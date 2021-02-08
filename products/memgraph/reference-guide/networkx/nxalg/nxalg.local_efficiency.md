# nxalg.local\_efficiency

## nxalg.local\_efficiency\(ctx: mgp.ProcCtx\)

Returns the average local efficiency of the graph.

The _efficiency_ of a pair of nodes in a graph is the multiplicative inverse of the shortest path distance between the nodes. The _local efficiency_ of a node in the graph is the average global efficiency of the subgraph induced by the neighbors of the node. The _average local efficiency_ is the average of the local efficiencies of each node.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.

**Returns**

The average local efficiency of the graph.

**Return type**

mgp.Record\(local\_efficiency=float\)

