Title: Kubernetes NetworkPolicy to block internal calls
Date: 2019-09-11 19:30
Modified: 2019-09-11 19:30
Category: kubernetes
Slug: kubernetes-networkpolicy-block-internal
Authors: Amrit Bera
Summary: NetworkPolicy to block internal calls

Network policies are pretty powerful in kubernetes. It helps us define how a group of pods can communicate with other network endpoints - which can be internal or external to the cluster.

And if you want to run **customer workloads**, it's always a good idea to make sure none of the pods can connect to other network endpoints running inside your cluster. [NetworkPolicies](https://kubernetes.io/docs/concepts/services-networking/network-policies/) are the perfect candidate to implement this.

One thing to keep in mind, as soon as you block all outgoing connections internal to the cluster, **DNS will be unreachable** as well. To make it work, you have to add a [DNS config](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#pod-s-dns-config) for the pod which will configure it's `resolv.conf`. Example pod spec:

```
...
spec:
  containers:
    - name: test
      image: nginx
  dnsPolicy: "None"
  dnsConfig:
    nameservers:
      - 1.1.1.1
...
```
Once this is set and assuming your pod don't have to connect to any other component inside the cluster, we can have a NetworkPolicy similar to this:
```
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  namespace: example-namespace
  name: np-block-internal
spec:
  podSelector: {}
  policyTypes:
  - Egress
  egress:
  - to:
    - ipBlock:
        cidr: 0.0.0.0/0
        except:
        - 10.0.0.0/21
```
Few things to notice here:

- `podSelector: {}` specifies all pods in this namespace should be affected
- `egress` means outgoing connections
- `to` `ipBlock` `cidr` sets the rule. 0.0.0.0/0 means all IP addresses over the internet are allowed. Except 10.0.0.0/21
- `10.0.0.0/21` is the pod address range. This is different for each cloud provider, configured during cluster creation. In GCP it's set with the `--cluster-ipv4-cidr` flag if you are creating the cluster via CLI.