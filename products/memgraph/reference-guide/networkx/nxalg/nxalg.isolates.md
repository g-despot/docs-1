# nxalg.isolates

## nxalg.isolates\(ctx: mgp.ProcCtx\)

Returns a list of isolates in the graph.

An _isolate_ is a node with no neighbors \(that is, with degree zero\). For directed graphs, this means no in-neighbors and no out-neighbors.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.

**Returns**

A list of isolates in `G`.

**Return type**

mgp.Record\(isolates=mgp.List\[mgp.Vertex\]\)

