# nxalg.is\_edge\_cover

## nxalg.is\_edge\_cover\(ctx: mgp.ProcCtx, cover: mgp.List.mgp.Edge\)

Decides whether a set of edges is a valid edge cover of the graph.

Given a set of edges, it can be decided whether the set is an _edge covering_ if checked whether all nodes of the graph have an edge from the set incident on it.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **cover** \(_mgp.List\[mgp.Edge\]_\) – A list of edges to be checked.

**Returns**

Whether the set of edges is a valid edge cover of the graph.

**Return type**

mgp.Record\(is\_edge\_cover=bool\)

