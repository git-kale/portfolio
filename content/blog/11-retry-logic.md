---
title: "Building Resilient APIs with Retry Logic"
date: "2025-12-20"
author: "Mahesh Kale"
excerpt: "Master retry strategies with exponential backoff and jitter. Handle transient failures gracefully and improve system reliability."
tags: ["Resilience", "Backend", "Systems Design"]
---

# Building Resilient APIs with Retry Logic

## Why Retries Matter

Transient failures (network hiccups, timeouts) should not fail requests:

```
Request 1 → Timeout
Request 2 (after 100ms) → Timeout  
Request 3 (after 200ms) → Success ✓
```

## Retry Strategy

### Exponential Backoff with Jitter

```go
func exponentialBackoff(attempt int) time.Duration {
    baseDelay := 100 * time.Millisecond
    maxDelay := 30 * time.Second
    
    delay := baseDelay * time.Duration(math.Pow(2, float64(attempt)))
    if delay > maxDelay {
        delay = maxDelay
    }
    
    // Add jitter: ±10%
    jitter := time.Duration(rand.Intn(20)-10) * delay / 100
    return delay + jitter
}
```

## Implementation

```go
func retryWithBackoff(fn func() error, maxAttempts int) error {
    for attempt := 1; attempt <= maxAttempts; attempt++ {
        err := fn()
        if err == nil {
            return nil
        }
        
        if attempt < maxAttempts {
            delay := exponentialBackoff(attempt - 1)
            time.Sleep(delay)
        }
    }
    return ErrMaxRetriesExceeded
}
```

## Idempotency

Retries only safe for idempotent operations:

```go
// Safe (GET)
GET /users/123

// Unsafe (POST without idempotency)
POST /orders {"item": "book"}

// Safe (POST with idempotency key)
POST /orders {"item": "book"} 
Headers: {"Idempotency-Key": "unique-uuid"}
```

## When NOT to Retry

- 4xx errors (client errors)
- Permanent failures
- Non-idempotent operations
- Slow operations (already waited)

Conclusion: Smart retry logic significantly improves system resilience and user experience.
