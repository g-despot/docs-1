# nxalg.ancestors

## nxalg.ancestors\(ctx: mgp.ProcCtx, source: mgp.Vertex\)

Returns all nodes having a path to `source` in `G`.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **source** \(_node_\) – A node in `G`.

**Returns**

The ancestors of source in `G`.

**Return type**

mgp.Record\(ancestors=mgp.List\[mgp.Vertex\]\)

