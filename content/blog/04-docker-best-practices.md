---
title: "Docker Best Practices for Production"
date: "2026-02-20"
author: "Mahesh Kale"
excerpt: "Learn essential Docker practices for building secure, efficient, and production-ready containers. From multi-stage builds to security scanning and resource optimization."
tags: ["Docker", "DevOps", "Containers"]
---

# Docker Best Practices for Production

## Building Efficient Images

### Multi-Stage Builds

Reduce image size significantly by using separate build and runtime stages:

```dockerfile
FROM golang:1.21 as builder
WORKDIR /app
COPY . .
RUN go build -o main .

FROM alpine:latest
COPY --from=builder /app/main .
CMD ["./main"]
```

### Minimize Layer Count

Each instruction creates a layer. Combine operations:

```dockerfile
# Bad
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y git

# Good
RUN apt-get update && \
    apt-get install -y curl git && \
    apt-get clean
```

## Security Best Practices

### Use Specific Versions

```dockerfile
# Risky: unpredictable builds
FROM node:latest

# Better: specific version
FROM node:20.10-alpine3.18
```

### Run as Non-Root

```dockerfile
RUN useradd -m appuser
USER appuser
```

### Scan for Vulnerabilities

```bash
docker scan myapp:latest
trivy image myapp:latest
```

## Image Optimization

### Use Slim/Alpine Bases

- `ubuntu:latest`: ~77MB
- `debian:latest`: ~124MB
- `alpine:latest`: ~7MB
- `golang:latest`: ~1GB
- `golang:alpine`: ~376MB

### Remove Unnecessary Files

```dockerfile
RUN apt-get update && \
    apt-get install -y curl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
```

## Container Orchestration

### Health Checks

```dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8080/health || exit 1
```

### Resource Limits

```yaml
docker run --memory=512m --cpus=1 myapp
```

## Networking

### Networking Best Practices

- Use custom networks for isolation
- Never expose containers to all interfaces by default
- Use secrets management for sensitive data

## Logging and Monitoring

### Structured Logging

```go
log.Printf(`{"level":"info","service":"api","timestamp":"%s","message":"request","path":"%s"}`, time.Now(), r.URL.Path)
```

### Log Driver Configuration

```docker-compose
services:
  app:
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
```

## Development Workflow

### Use .dockerignore

```
.git
node_modules
__pycache__
.env
.DS_Store
```

### Docker Compose for Local Development

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - DATABASE_URL=postgres://db:5432/mydb
    depends_on:
      - db
  db:
    image: postgres:15
    environment:
      - POSTGRES_PASSWORD=secret
```

## Production Deployment Checklist

- [ ] Image scanned for vulnerabilities
- [ ] Non-root user configured
- [ ] Health checks in place
- [ ] Resource limits defined
- [ ] Logging configured
- [ ] Secrets management implemented
- [ ] Image size optimized
- [ ] Tags and versioning strategy in place

## Conclusion

Following these Docker best practices ensures your containers are secure, efficient, and production-ready. Invest time in optimizing your build process early—it pays dividends at scale.
