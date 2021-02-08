# nxalg.is\_strongly\_regular

## nxalg.is\_strongly\_regular\(ctx: mgp.ProcCtx\)

Returns `True` if and only if the given graph is strongly regular.

An undirected graph is _strongly regular_ if

* it is regular,
* each pair of adjacent vertices has the same number of neighbors in

  common,

* each pair of nonadjacent vertices has the same number of neighbors

  in common.

Each strongly regular graph is a distance-regular graph. Conversely, if a distance-regular graph has a diameter of two, then it is a strongly regular graph.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.

**Returns**

Whether `G` is strongly regular.

**Return type**

mgp.Record\(is\_strongly\_regular=bool\)

