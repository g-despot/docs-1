# nxalg.minimum\_spanning\_tree

## nxalg.minimum\_spanning\_tree\(ctx: mgp.ProcCtx, weight: str = 'weight', algorithm: str = 'kruskal', ignore\_nan: bool = False\)

Returns a minimum spanning tree or forest on an undirected graph `G`.

A _minimum spanning tree_ is a subset of the edges of a connected, undirected graph that connects all of the vertices together without any cycles.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **weight** \(_str_\) – \(default=’weight’\)

  Data key to use for edge weights.

* **algorithm** \(_str_\) – \(default=’kruskal’\)

  The algorithm to use when finding a minimum spanning tree.

  Valid choices are ‘kruskal’, ‘prim’, or ‘boruvka’.

* **ignore\_nan** \(_bool_\) – \(default=False\)

  If `NaN` is found as an edge weight normally an exception is raised.

  If `ignore_nan` is `True` then that edge is ignored.

**Returns**

A minimum spanning tree or forest.

**Return type**

mgp.Record\(nodes=mgp.List\[mgp.Vertex\], edges=mgp.List\[mgp.Edge\]\)

