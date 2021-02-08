# nxalg.bfs\_predecessors

## nxalg.bfs\_predecessors\(ctx: mgp.ProcCtx, source: mgp.Vertex, depth\_limit: mgp.Nullable.int = None\)

Returns an iterator of predecessors in breadth-first-search from source.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **source** \(_mgp.Vertex_\) – Specify starting node for breadth-first search.
* **depth\_limit** \(_mgp.Nullable\[int\]_\) – \(default=None\)

  Specify the maximum search depth.

**Returns**

`(node, predecessors)` iterator where `predecessors` is the list of predecessors of the node.

**Return type**

mgp.Record\(node=mgp.Vertex, predecessor=mgp.Vertex\)

