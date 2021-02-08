# nxalg.bfs\_tree

## nxalg.bfs\_tree\(ctx: mgp.ProcCtx, source: mgp.Vertex, reverse: bool = False, depth\_limit: mgp.Nullable.int = None\)

Returns an oriented tree constructed from of a breadth-first-search starting at `source`.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **source** \(_mgp.Vertex_\) – Specify starting node for breadth-first search.
* **reverse** \(_bool_\) – \(default=False\)

  If `True`, traverse a directed graph in the reverse direction.

* **depth\_limit** \(_mgp.Nullable\[int\]_\) – \(default=None\)

  Specify the maximum search depth.

**Returns**

An oriented tree.

**Return type**

mgp.Record\(tree=mgp.List\[mgp.Vertex\]\)

