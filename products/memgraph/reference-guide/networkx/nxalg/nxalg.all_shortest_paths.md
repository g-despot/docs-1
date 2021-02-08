# nxalg.all\_shortest\_paths

## nxalg.all\_shortest\_paths\(ctx: mgp.ProcCtx, source: mgp.Vertex, target: mgp.Vertex, weight: mgp.Nullable.str = None, method: str = 'dijkstra'\)

Compute all shortest simple paths in the graph.

A simple path is a path with no repeated nodes.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **source** \(_mgp.Vertex_\) – Starting node for the path.
* **target** \(_mgp.Vertex_\) – Ending node for the path.
* **weight** \(_mgp.Nullable\[str\]_\) – \(default=None\)

  If `None`, every edge has weight/distance/cost 1.

  If a string, use this edge attribute as the edge weight.

  Any edge attribute not present defaults to 1.

* **method** \(_str_\) – \(default=’dijkstra’\)

  The algorithm to use to compute the path lengths.

  Supported options: ‘dijkstra’, ‘bellman-ford’.

  Other inputs produce a ValueError.

  If `weight` is `None`, unweighted graph methods are used, and this

  suggestion is ignored.

**Returns**

A list of all paths between source and target.

**Return type**

mgp.Record\(paths=mgp.List\[mgp.List\[mgp.Vertex\]\]\)

