# nxalg.bfs\_successors

## nxalg.bfs\_successors\(ctx: mgp.ProcCtx, source: mgp.Vertex, depth\_limit: mgp.Nullable.int = None\)

Returns an iterator of successors in breadth-first-search from source.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **source** \(_node_\) – Specify starting node for breadth-first search.
* **depth\_limit** \(_int optional_\) – \(default=None\)

  Specify the maximum search depth.

**Returns**

`(node, successors)` iterator where `successors` is the list of successors of the node.

**Return type**

mgp.Record\(node=mgp.Vertex, successors=mgp.List\[mgp.Vertex\]\)

