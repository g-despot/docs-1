# RPM Package

This article briefly outlines the basic steps necessary to install the Memgraph RPM package.

## Prerequisites

Before you proceed with the installation guide make sure that you have:

* Downloaded the latest **Memgraph RPM Package** which can be \[found

  here\]\([https://memgraph.com/download/](https://memgraph.com/download/)\).

## Installation guide <a id="installation-guide"></a>

After downloading the Memgraph RPM package, you can install it by issuing the following command:

```text
yum --nogpgcheck localinstall /path/to/memgraph-<version>.rpm
```

{% hint style="info" %}
**NOTE:** Please take care of the SELinux config. The easiest way of running Memgraph is to disable SELinux by executing `setenforce 0`. If that's not an option, please configure system properly.
{% endhint %}

After successful installation, Memgraph can be started as a service using the following command:

```text
systemctl start memgraph
```

To verify that Memgraph is running, run the following command:

```text
journalctl --unit memgraph
```

If successful, you should receive an output similar to the following:

```text
Nov 23 13:40:13 hostname memgraph[14654]: BoltS server is fully armed and operational
Nov 23 13:40:13 hostname memgraph[14654]: BoltS listening on 0.0.0.0 at 7687
```

If you want the Memgraph service to start automatically on each startup, run the following command:

```text
systemctl enable memgraph
```

At this point, Memgraph is ready for you to [submit queries](../querying/).

### Configuration

The Memgraph configuration is available in `/etc/memgraph/memgraph.conf`. If the Memgraph configuration is altered, Memgraph needs to be restarted.

### Stopping Memgraph

To shut down the Memgraph server, issue the following command:

```text
systemctl stop memgraph
```

## Where to next?

To learn how to query the database, take a look at the [**Querying**](../querying/) guide or [**Memgraph Playground**](https://playground.memgraph.com/) for interactive tutorials.  
 Visit the [**Building applications**](https://github.com/memgraph/docs/tree/330f0c5baa48ee0ece2ed2b8a4bad2752666aba1/products/memgraph/v1.3.0/getting_started/connecting_applications/connecting_applications.md) page if you need to connect to the database programmatically.

## Getting help

Visit the **Getting help** page in case you run into any kind of problem or you have additional questions.

{% page-ref page="../../getting-help/" %}

