# nxalg.is\_isolate

## nxalg.is\_isolate\(ctx: mgp.ProcCtx, n: mgp.Vertex\)

Determines whether a node is an isolate.

An _isolate_ is a node with no neighbors \(that is, with degree zero\). For directed graphs, this means no in-neighbors and no out-neighbors.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **n** \(_mgp.Vertex_\) – A node in `G`.

**Returns**

`True` if and only if `n` has no neighbors.

**Return type**

mgp.Record\(is\_isolate=bool\)

