Title: Local insecure registry with minikube
Date: 2019-01-23 18:20
Category: kubernetes
Slug: minikube-insecure-registry
Authors: Amrit Bera
Summary: Setting insecure docker registry with minikube for local development

Often we like to develop kubernetes applications locally and deploy it to minikube for testing purposes. The workflow involves:

- Edit code (& compile)
- Build & tag docker image
- Push the image to a local registry
- Update image tag in the deployment yaml
- Execute kubectl / helm upgrade on the local minikube cluster

To achieve this, we need to have a local docker registry running on minikube, configure docker daemon and deployments correctly. For this tutorial I am using kubernets `v1.12.6` and minikube `v0.35.0`.

For the registry, let's enable the minikube registry [addon](https://github.com/kubernetes/minikube/blob/master/docs/addons.md):
```
$ minikube addons enable registry
```

By default, the registry has a service [type](https://github.com/kubernetes/minikube/blob/master/deploy/addons/registry/registry-svc.yaml#L10) of `clusterIP`. Let's update this and change it to `NodePort`. If you want a consistent port, add a `NodePort` value as well, e.x. 30237. Once the service is saved, your registry will be accessible from the host machine `http://minikube-vm-ip:30237/v2/_catalog`. Get the IP address using
```
$ minikube ip
```

To use this registry from your host machine, you need to add this IP address to the insecure registries daemon configuration. For mac, go to `Docker desktop preferences -> Daemon -> Basic -> Add insecure registry`.

Once this is done, you can build and push images to this registry.
```
$ docker build -t minikube-vm-ip:30237/my-image:1 .
$ docker push minikube-vm-ip:30237/my-image:1
```

Now the kubernetes part. Copy the `clusterIP` of the [registry service](http://localhost:8001/api/v1/namespaces/kube-system/services/http:kubernetes-dashboard:/proxy/#!/service/kube-system/registry?namespace=kube-system) running on `kube-system` namespace and put it on the pod spec's image:
```
...
spec:
  replicas: 1
  template:
    spec:
      containers:
      - name: my-container
        image: <cluster-ip>:80/my-image:1
...
```
Here port 80 is fine as it's the default [configuration](https://github.com/kubernetes/minikube/blob/master/deploy/addons/registry/registry-svc.yaml#L12).