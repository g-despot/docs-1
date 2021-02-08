# nxalg.is\_tournament

## nxalg.is\_tournament\(ctx: mgp.ProcCtx\)

Returns `True` if and only if `G` is a tournament.

A _tournament_ is a directed graph, with neither self-loops nor multi-edges, in which there is exactly one directed edge joining each pair of distinct nodes.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.

**Returns**

Whether the given graph is a tournament graph.

**Return type**

mgp.Record\(is\_tournament=bool\)

