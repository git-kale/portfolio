---
title: "System Design: Caching Strategies at Scale"
date: "2026-03-15"
author: "Mahesh Kale"
excerpt: "Deep dive into caching patterns including LRU, LFU, and Write-Through strategies. Understand when to cache, what to cache, and how to invalidate cache effectively."
tags: ["Systems Design", "Performance", "Redis"]
---

# System Design: Caching Strategies at Scale

## Why Caching Matters

Caching is one of the most powerful tools for improving system performance. A well-designed caching strategy can reduce database load by 60-80% and improve latency significantly.

## Common Caching Patterns

### Write-Through Cache

Data is written to both cache and database simultaneously, ensuring consistency.

```
Client -> Cache -> Database
         wait    (sync write)
```

**Pros**: Guarantees data consistency
**Cons**: High write latency

### Write-Behind Cache

Data is written to cache first, then asynchronously synchronized to the database.

```
Client -> Cache (async) -> Database
         (return immediately)
```

**Pros**: Low write latency, high throughput
**Cons**: Risk of data loss if cache fails

### Write-Around Cache

Data bypasses the cache on write and goes directly to the database.

```
Client -> Database
Client -> Cache (on read)
```

**Pros**: Prevents cache pollution
**Cons**: Cache miss on first read

## Eviction Policies

### LRU (Least Recently Used)

Removes the least recently accessed item when capacity is reached.

**Best for**: General-purpose caching with temporal locality

### LFU (Least Frequently Used)

Removes the least frequently accessed item.

**Best for**: Workloads with clear popularity patterns

### FIFO (First In First Out)

Removes the oldest item first, regardless of access patterns.

**Best for**: Simple TTL-based caching

## Cache Invalidation

The hardest problem in computer science! Key strategies:

1. **Time-based**: Expire entries after a TTL
2. **Event-based**: Invalidate on specific events
3. **Manual**: Explicit invalidation via API
4. **Dependency-based**: Track data dependencies

## Practical Implementation

```go
type CacheEntry struct {
    Value      interface{}
    ExpiresAt  time.Time
    AccessedAt time.Time
    Frequency  int64
}

type Cache struct {
    data map[string]*CacheEntry
    mu   sync.RWMutex
}

func (c *Cache) Get(key string) (interface{}, bool) {
    c.mu.RLock()
    defer c.mu.RUnlock()
    
    entry, ok := c.data[key]
    if !ok || time.Now().After(entry.ExpiresAt) {
        return nil, false
    }
    
    entry.AccessedAt = time.Now()
    entry.Frequency++
    return entry.Value, true
}
```

## Redis in Production

Redis is the go-to choice for caching at scale:

- **In-memory**: Extremely fast
- **Persistence**: Optional RDB or AOF
- **Replication**: Master-slave setup
- **Clustering**: Horizontal scaling

## Monitoring and Metrics

Track these metrics to optimize your cache:

- **Hit Rate**: Percentage of cache hits
- **Eviction Rate**: Items removed due to capacity
- **Memory Usage**: Cache size and efficiency
- **Response Time**: Impact on overall latency

## Conclusion

Effective caching requires understanding your access patterns, choosing the right strategy, and careful monitoring. Start simple, measure, and optimize based on real-world performance data.
