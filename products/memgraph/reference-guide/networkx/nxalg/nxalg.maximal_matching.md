# nxalg.maximal\_matching

## nxalg.maximal\_matching\(ctx: mgp.ProcCtx\)

Find a maximal matching in the graph.

A _matching_ is a subset of edges in which no node occurs more than once. A _maximal matching_ cannot add more edges and still be a matching.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.

**Returns**

A maximal matching of the graph.

**Return type**

mgp.Record\(edges=mgp.List\[mgp.Edge\]\)

