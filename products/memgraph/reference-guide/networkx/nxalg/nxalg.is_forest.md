# nxalg.is\_forest

## nxalg.is\_forest\(ctx: mgp.ProcCtx\)

Returns `True` if `G` is a forest.

A _forest_ is a graph with no undirected cycles.

For directed graphs, `G` is a forest if the underlying graph is a forest. The underlying graph is obtained by treating each directed edge as a single undirected edge in a multigraph.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.

**Returns**

A boolean that is `True` if `G` is a forest.

**Return type**

mgp.Record\(is\_forest=bool\)

