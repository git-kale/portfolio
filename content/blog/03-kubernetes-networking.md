---
title: "Kubernetes Networking Deep Dive"
date: "2026-03-01"
author: "Mahesh Kale"
excerpt: "Understand pod-to-pod communication, services, ingress controllers, and network policies. Master networking concepts essential for production Kubernetes deployments."
tags: ["Kubernetes", "Networking", "DevOps"]
---

# Kubernetes Networking Deep Dive

## Kubernetes Networking Fundamentals

Kubernetes provides a sophisticated networking model that enables secure, scalable communication between containers. Understanding this model is essential for running production-grade applications.

## Pod Networking

Every pod gets a unique IP address on a flat network where all pods can communicate directly.

### Pod-to-Pod Communication

Pods communicate directly via IP addresses:

```
Pod A (10.0.0.1) <-> CNI Bridge <-> Pod B (10.0.0.2)
```

The Container Network Interface (CNI) manages this connectivity.

### Network Plugins

Popular CNI implementations:

- **Flannel**: Simple overlay networks
- **Calico**: BGP-based with network policies
- **Weave**: Multi-host mesh networking
- **Cilium**: eBPF-based networking

## Services: Exposing Pods

Services provide stable endpoints for accessing pods:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  type: ClusterIP
  selector:
    app: web
  ports:
  - port: 80
    targetPort: 8080
```

### Service Types

**ClusterIP**: Internal service, only accessible within the cluster

**NodePort**: Exposes service on a node port (30000-32767)

**LoadBalancer**: Cloud provider's load balancer

**ExternalName**: DNS CNAME to external service

## Ingress Controllers

Ingress manage external access to services:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: web-ingress
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: web-service
            port:
              number: 80
```

### Popular Ingress Controllers

- **NGINX Ingress**: Most widely used
- **Traefik**: Cloud-native and dynamic
- **HAProxy Ingress**: High performance
- **AWS ALB Ingress**: AWS-native

## Network Policies

Control traffic between pods:

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-external
spec:
  podSelector:
    matchLabels:
      tier: frontend
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          tier: backend
    ports:
    - protocol: TCP
      port: 8080
```

## DNS in Kubernetes

Kubernetes includes built-in DNS:

```
<service-name>.<namespace>.svc.cluster.local
```

## Performance Optimization

### Connection Pooling

Reuse connections to reduce overhead:

```go
client := &http.Client{
    Transport: &http.Transport{
        MaxIdleConns:    100,
        MaxIdleConnsPerHost: 10,
    },
}
```

### Service Mesh Integration

Istio and Linkerd provide advanced networking:

- Traffic management
- Security policies
- Observability
- Load balancing algorithms

## Troubleshooting Network Issues

```bash
# Check pod IP
kubectl get pods -o wide

# Debug connectivity
kubectl exec pod-name -- curl service-name:port

# Check service endpoints
kubectl get endpoints service-name

# Network policies
kubectl get networkpolicies
```

## Conclusion

Kubernetes networking is powerful and flexible. Understanding these concepts allows you to build secure, scalable applications that leverage the platform's capabilities effectively.
