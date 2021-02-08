# nxalg.dfs\_preorder\_nodes

## nxalg.dfs\_preorder\_nodes\(ctx: mgp.ProcCtx, source: mgp.Vertex, depth\_limit: mgp.Nullable.int = None\)

Returns nodes in a depth-first-search pre-ordering starting at source.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **source** \(_mgp.Vertex_\) – Specify starting node for depth-first search and return nodes in

  the component reachable from

  this node.

* **depth\_limit** \(_mgp.Nullable\[int\]_\) – \(default=None\)

  Specify the maximum search depth.

**Returns**

A list of nodes in a depth-first-search pre-ordering.

**Return type**

mgp.Record\(nodes=mgp.List\[mgp.Vertex\]\)

