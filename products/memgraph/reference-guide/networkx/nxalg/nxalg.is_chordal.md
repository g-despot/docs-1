# nxalg.is\_chordal

## nxalg.is\_chordal\(ctx: mgp.ProcCtx\)

Checks whether `G` is a chordal graph.

A graph is _chordal_ if every cycle of length at least 4 has a chord \(an edge joining two nodes not adjacent in the cycle\).

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.

**Returns**

`True` if `G` is a chordal graph and `False` otherwise.

**Return type**

mgp.Record\(is\_chordal=bool\)

