---
title: "Implementing Circuit Breaker Pattern"
date: "2025-12-28"
author: "Mahesh Kale"
excerpt: "Learn the circuit breaker pattern for fault tolerance. Prevent cascading failures and enable graceful degradation in microservices."
tags: ["Architecture", "Resilience", "Backend"]
---

# Implementing Circuit Breaker Pattern

## Overview

Circuit breaker prevents repeated calls to failing services:

```
CLOSED → checks requests → OPEN (on failure) → HALF_OPEN (after timeout) → CLOSED
```

## States

### CLOSED (Normal)

Requests pass through normally. Failures counted.

### OPEN (Failing)

Circuit breaks, fast-fail without calling service.

```go
if circuitOpen {
    return errors.New("circuit breaker open")
}
```

### HALF_OPEN (Recovery)

Limited requests allowed to test if service recovered:

```go
if circuitHalfOpen && testCount < maxTestRequests {
    // Allow request
    return callService()
}
```

## Implementation

```go
type CircuitBreaker struct {
    state       string
    failures    int
    maxFailures int
    lastFailTime time.Time
    timeout     time.Duration
}

func (cb *CircuitBreaker) Call(fn func() error) error {
    if cb.state == "OPEN" {
        if time.Since(cb.lastFailTime) > cb.timeout {
            cb.state = "HALF_OPEN"
            cb.failures = 0
        } else {
            return ErrCircuitOpen
        }
    }
    
    err := fn()
    if err != nil {
        cb.failures++
        cb.lastFailTime = time.Now()
        if cb.failures >= cb.maxFailures {
            cb.state = "OPEN"
        }
    } else {
        cb.failures = 0
        cb.state = "CLOSED"
    }
    return err
}
```

## Libraries

- **Hystrix**: Netflix's implementation
- **Gobreaker**: Go implementation
- **Resilience4j**: Java implementation

## Fallback Strategies

```go
result, err := circuitBreaker.Call(func() error {
    return fetchData()
})
if err != nil && isFallbackAvailable {
    return getFallbackData()
}
```

Conclusion: Circuit breaker is essential for building resilient distributed systems.
