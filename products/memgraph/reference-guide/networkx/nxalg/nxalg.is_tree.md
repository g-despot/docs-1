# nxalg.is\_tree

## nxalg.is\_tree\(ctx: mgp.ProcCtx\)

Returns `True` if `G` is a tree.

A _tree_ is a connected graph with no undirected cycles.

For directed graphs, `G` is a tree if the underlying graph is a tree. The underlying graph is obtained by treating each directed edge as a single undirected edge in a multigraph.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.

**Returns**

A boolean that is `True` if `G` is a tree.

**Return type**

mgp.Record\(is\_tree=bool\)

