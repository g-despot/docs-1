# nxalg.topological\_sort

## nxalg.topological\_sort\(ctx: mgp.ProcCtx\)

Returns nodes in topologically sorted order.

A _topological sort_ is a non unique permutation of the nodes such that an edge from `u` to `v` implies that `u` appears before `v` in the topological sort order.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.

**Returns**

A list of nodes in topological sorted order.

**Return type**

mgp.Record\(nodes=mgp.Nullable\[mgp.List\[mgp.Vertex\]\]\)

