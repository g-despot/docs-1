# nxalg.strongly\_connected\_components

## nxalg.strongly\_connected\_components\(ctx: mgp.ProcCtx\)

Returns nodes in strongly connected components of a graph.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.

**Returns**

A list of lists of nodes, one for each strongly connected component of `G`.

**Return type**

mgp.Record\(components=mgp.List\[mgp.List\[mgp.Vertex\]\]\)

