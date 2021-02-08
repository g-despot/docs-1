# nxalg.communicability

## nxalg.communicability\(ctx: mgp.ProcCtx\)

Returns communicability between all pairs of nodes in `G`.

The _communicability_ between pairs of nodes in `G` is the sum of closed walks of different lengths starting at node `u` and ending at node `v`.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.

**Returns**

Dictionary of dictionaries keyed by nodes with communicability as the value.

**Return type**

mgp.Record\(node1=mgp.Vertex, node2=mgp.Vertex, communicability=mgp.Number\)

