# nxalg.has\_path

## nxalg.has\_path\(ctx: mgp.ProcCtx, source: mgp.Vertex, target: mgp.Vertex\)

Returns `True` if `G` has a path from `source` to `target`.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **source** \(_mgp.Vertex_\) – Starting node for the path.
* **target** \(_mgp.Vertex_\) – Ending node for the path.

**Returns**

`True` if `G` has a path from `source` to `target`.

**Return type**

mgp.Record\(has\_path=bool\)

