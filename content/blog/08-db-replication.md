---
title: "Database Replication Strategies"
date: "2026-01-15"
author: "Mahesh Kale"
excerpt: "Master database replication patterns for high availability and read scaling. Learn about master-slave, master-master, and multi-region replication setup."
tags: ["PostgreSQL", "Systems Design", "DevOps"]
---

# Database Replication Strategies

## Master-Slave Replication

Primary for read scaling:

```
Master (Write) → Replica 1 (Read)
              → Replica 2 (Read)
              → Replica 3 (Read)
```

### PostgreSQL Configuration

```sql
-- Master
wal_level = replica
max_wal_senders = 10

-- Standby
primary_conninfo = 'host=master user=replication password=secret'
```

## Master-Master Replication

Bidirectional replication for active-active:

```
Master A ↔ Master B
Both accept writes
Potential conflicts
```

## Multi-Region Replication

Geo-distribution for disaster recovery:

```
Region 1 (Primary)
    ↓
Region 2 (Replica)
    ↓
Region 3 (Replica)
```

## Replication Lag

Monitor and handle replication delays:

```go
// Check replication lag
lag := checkReplicationLag()
if lag > 5*time.Second {
    // Route reads to master
    readFromMaster()
}
```

## Failover Strategies

1. **Manual**: DBA-driven
2. **Semi-automatic**: Require confirmation
3. **Automatic**: Scripted failover

## Conclusion

Proper replication strategy is crucial for reliability and scalability. Choose based on your RTO/RPO requirements and operational capacity.
