# nxalg.node\_expansion

## nxalg.node\_expansion\(ctx: mgp.ProcCtx, s: mgp.List.mgp.Vertex\)

Returns the node expansion of the set `S`.

The _node expansion_ is the quotient of the size of the node boundary of `S` and the cardinality of `S`.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **s** \(_mgp.List\[mgp.Vertex\]_\) – A sequence of nodes in `G`.

**Returns**

The node expansion of the set `S`.

**Return type**

mgp.Record\(node\_expansion=mgp.Number\)

