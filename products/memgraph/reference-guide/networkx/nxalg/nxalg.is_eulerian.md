# nxalg.is\_eulerian

## nxalg.is\_eulerian\(ctx: mgp.ProcCtx\)

Returns `True` if and only if `G` is Eulerian.

A graph is _Eulerian_ if it has an Eulerian circuit. An _Eulerian circuit_ is a closed walk that includes each edge of a graph exactly once.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.

**Returns**

`True` if `G` is Eulerian.

**Return type**

mgp.Record\(is\_eulerian=bool\)

