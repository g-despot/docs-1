# nxalg.dfs\_successors

## nxalg.dfs\_successors\(ctx: mgp.ProcCtx, source: mgp.Vertex, depth\_limit: mgp.Nullable.int = None\)

Returns a dictionary of successors in depth-first-search from source.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **source** \(_mgp.Vertex_\) – Specify starting node for depth-first search.
* **depth\_limit** \(_mgp.Nullable\[int\]_\) – \(default=None\)

  Specify the maximum search depth.

**Returns**

A dictionary with nodes as keys and list of successor nodes as values.

**Return type**

mgp.Record\(node=mgp.Vertex, successors=mgp.List\[mgp.Vertex\]\)

