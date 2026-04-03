---
title: "PostgreSQL Query Optimization Techniques"
date: "2026-02-10"
author: "Mahesh Kale"
excerpt: "Master PostgreSQL query optimization including indexing strategies, execution plans analysis, and performance tuning techniques for high-throughput systems."
tags: ["PostgreSQL", "Performance", "Backend"]
---

# PostgreSQL Query Optimization Techniques

## Understanding Query Plans

Use EXPLAIN ANALYZE to understand how PostgreSQL executes queries:

```sql
EXPLAIN ANALYZE
SELECT users.name, COUNT(orders.id) as order_count
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.id;
```

Look for:
- Sequential scans (usually bad)
- Index scans (usually good)
- High actual vs. estimated rows (statistics issue)

## Indexing Strategies

### B-Tree Indexes

The default index type for most scenarios:

```sql
CREATE INDEX idx_users_email ON users(email);
```

### Hash Indexes

For simple equality checks:

```sql
CREATE INDEX idx_users_id_hash ON users USING hash(id);
```

### GiST Indexes

For complex data types and geometric queries:

```sql
CREATE INDEX idx_location_gist ON locations USING gist(coordinates);
```

### GIN Indexes

Great for arrays and full-text search:

```sql
CREATE INDEX idx_tags_gin ON articles USING gin(tags);
```

## Common Performance Issues

### N+1 Query Problem

```go
// Bad: N+1 queries
users := GetAllUsers()
for _, user := range users {
    orders := GetOrdersByUser(user.ID) // N additional queries
}

// Good: JOIN or batch fetch
users := GetUsersWithOrders() // Single query with JOIN
```

### Missing LIMIT

Always use LIMIT for debugging:

```sql
SELECT * FROM large_table LIMIT 1000; -- Safer than SELECT *
```

## Query Tuning

### Use Appropriate Data Types

```sql
-- Bad
CREATE TABLE products (
    id BIGINT, -- Overkill for small tables
    price TEXT -- Should be DECIMAL
);

-- Good
CREATE TABLE products (
    id INT,
    price NUMERIC(10,2)
);
```

### Denormalization When Necessary

```sql
-- Read-heavy scenario: cache computed values
ALTER TABLE users ADD COLUMN order_count INT;
-- Update via trigger or batch job
```

## Connection Pooling

Use PgBouncer for connection management:

```
[databases]
myapp = host=localhost port=5432 dbname=myapp

[pgbouncer]
pool_mode = transaction
max_client_conn = 1000
default_pool_size = 25
```

## Monitoring and Maintenance

```sql
-- Find slow queries
SELECT query, calls, mean_time 
FROM pg_stat_statements 
ORDER BY mean_time DESC 
LIMIT 10;

-- Analyze table statistics
ANALYZE users;

-- Rebuild indexes
REINDEX INDEX idx_users_email;
```

## Partitioning Large Tables

```sql
CREATE TABLE events (
    id SERIAL,
    created_at TIMESTAMP,
    data JSONB
) PARTITION BY RANGE (created_at);

CREATE TABLE events_2024_01 
    PARTITION OF events
    FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');
```

## Conclusion

Query optimization is both art and science. Regular monitoring, understanding your access patterns, and applying appropriate indexing strategies will dramatically improve your system's performance.
