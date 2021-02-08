# nxalg.bfs\_edges

## nxalg.bfs\_edges\(ctx: mgp.ProcCtx, source: mgp.Vertex, reverse: bool = False, depth\_limit: mgp.Nullable.int = None\)

Iterate over edges in a breadth-first-search starting at source.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **source** \(_mgp.Vertex_\) – Specify starting node for breadth-first search; this function

  iterates over only those edges in the component reachable from

  this node.

* **reverse** \(_bool_\) – \(default=False\)

  If `True`, traverse a directed graph in the reverse direction.

* **depth\_limit** \(_mgp.Nullable\[int\]_\) – \(default=None\)

  Specify the maximum search depth.

**Returns**

A list of edges in the breadth-first-search.

**Return type**

mgp.Record\(edges=mgp.List\[mgp.Edge\]\)

