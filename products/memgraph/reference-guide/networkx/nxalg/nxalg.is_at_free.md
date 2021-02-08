# nxalg.is\_at\_free

## nxalg.is\_at\_free\(ctx: mgp.ProcCtx\)

Check if a graph is AT-free.

The method uses the find\_asteroidal\_triple method to recognize an AT-free graph. If no asteroidal triple is found, the graph is AT-free and `True` is returned. If at least one asteroidal triple is found, the graph is not AT-free and `False` is returned.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.

**Returns**

`True` if `G` is AT-free and `False` otherwise.

**Return type**

mgp.Record\(is\_at\_free=bool\)

