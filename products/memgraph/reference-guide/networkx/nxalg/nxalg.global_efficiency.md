# nxalg.global\_efficiency

## nxalg.global\_efficiency\(ctx: mgp.ProcCtx\)

Returns the average global efficiency of the graph.

The _efficiency_ of a pair of nodes in a graph is the multiplicative inverse of the shortest path distance between the nodes. The _average global efficiency_ of a graph is the average efficiency of all pairs of nodes.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.

**Returns**

The average global efficiency of the graph.

**Return type**

mgp.Record\(global\_efficiency=float\)

