---
title: "Observability in Microservices: Metrics, Logs, Traces"
date: "2026-01-05"
author: "Mahesh Kale"
excerpt: "Implement comprehensive observability with metrics collection, structured logging, and distributed tracing. Essential for production microservices."
tags: ["Observability", "Monitoring", "DevOps"]
---

# Observability in Microservices: The Three Pillars

## Metrics

Quantitative measurements of system behavior:

```go
httpRequestsTotal := prometheus.NewCounterVec(
    prometheus.CounterOpts{
        Name: "http_requests_total",
        Help: "Total HTTP requests",
    },
    []string{"method", "endpoint", "status"},
)

httpRequestsTotal.WithLabelValues("GET", "/api/users", "200").Inc()
```

### Key Metrics

- **Latency**: Request response time
- **Throughput**: Requests per second
- **Errors**: Error rate and types
- **Resource**: CPU, memory, disk usage

## Logs

Detailed records of events:

```go
log.Printf(`{"timestamp":"%s","level":"info","service":"api","message":"user_created","user_id":%d}`,
    time.Now().Format(time.RFC3339), userID)
```

### Structured Logging

JSON format for easy parsing and querying.

## Traces

End-to-end request flow visualization:

```go
span := tracer.StartSpan("database_query")
defer span.Finish()

// Query execution
result := db.Query(query)

span.SetTag("query", query)
span.SetTag("duration_ms", duration)
```

## ELK Stack

```yaml
Elasticsearch → Kibana (visualization)
↑
Logstash (processing)
↑
Application logs
```

## Prometheus + Grafana

```yaml
Prometheus (time-series DB)
    ↓
Grafana (dashboards)
    ↓
Visualization
```

## Best Practices

1. Correlate metrics, logs, and traces using request IDs
2. Set meaningful alerts based on SLOs
3. Implement proper retention policies
4. Regular analysis and tuning

Conclusion: Observability is what separates reliable systems from fragile ones.
