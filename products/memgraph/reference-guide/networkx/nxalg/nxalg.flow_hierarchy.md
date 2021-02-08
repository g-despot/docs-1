# nxalg.flow\_hierarchy

## nxalg.flow\_hierarchy\(ctx: mgp.ProcCtx, weight: mgp.Nullable.str = None\)

Returns the flow hierarchy of a directed network.

_Flow hierarchy_ is defined as the fraction of edges not participating in cycles in a directed graph.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **weight** \(_mgp.Nullable\[str\]_\) – \(default=None\)

  Attribute to use for node weights. If `None`, the weight defaults to 1.

**Returns**

Flow hierarchy value.

**Return type**

mgp.Record\(flow\_hierarchy=float\)

