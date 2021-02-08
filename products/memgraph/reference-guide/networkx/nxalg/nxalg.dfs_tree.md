# nxalg.dfs\_tree

## nxalg.dfs\_tree\(ctx: mgp.ProcCtx, source: mgp.Vertex, depth\_limit: mgp.Nullable.int = None\)

Returns an oriented tree constructed from a depth-first-search from source.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **source** \(_mgp.Vertex_\) – Specify starting node for depth-first search.
* **depth\_limit** \(_mgp.Nullable\[int\]_\) – \(default=None\)

  Specify the maximum search depth.

**Returns**

An oriented tree.

**Return type**

mgp.Record\(tree=mgp.List\[mgp.Vertex\]\)

