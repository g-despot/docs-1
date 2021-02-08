# nxalg.triadic\_census

## nxalg.triadic\_census\(ctx: mgp.ProcCtx\)

Determines the triadic census of a directed graph.

The _triadic census_ is a count of how many of the 16 possible types of triads are present in a directed graph.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.

**Returns**

Dictionary with triad names as keys and number of occurrences as values.

**Return type**

mgp.Record\(triad=str, count=int\)

