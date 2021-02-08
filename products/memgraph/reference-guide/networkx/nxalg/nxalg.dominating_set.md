# nxalg.dominating\_set

## nxalg.dominating\_set\(ctx: mgp.ProcCtx, start: mgp.Vertex\)

Finds a dominating set for the graph `G`.

A _dominating set_ for a graph with node set `V` is a subset `D` of `V` such that every node not in `D` is adjacent to at least one member of `D`.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **start** \(_mgp.Vertex_\) – Node to use as a starting point for the algorithm.

**Returns**

A dominating set for `G`.

**Return type**

mgp.Record\(dominating\_set=mgp.List\[mgp.Vertex\]\)

