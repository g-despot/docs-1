# nxalg.is\_bipartite

## nxalg.is\_bipartite\(ctx: mgp.ProcCtx\)

Returns `True` if graph `G` is bipartite, `False` if not.

A _bipartite graph_ \(or bigraph\) is a graph whose vertices can be divided into two disjoint and independent sets\`\`u\`\` and `v` and such that every edge connects a vertex in `u` one in `v`.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.

**Returns**

`True` if `G` is bipartite and `False` otherwise.

**Return type**

mgp.Record\(is\_bipartite=bool\)

