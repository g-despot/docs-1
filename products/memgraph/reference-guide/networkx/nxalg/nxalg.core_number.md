# nxalg.core\_number

## nxalg.core\_number\(ctx: mgp.ProcCtx\)

Returns the core number for each vertex.

A _k-core_ is a maximal subgraph that contains nodes of degree `k` or more.

The core number of a node is the largest value `k` of a k-core containing that node.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.

**Returns**

A dictionary keyed by node to the core number.

**Return type**

mgp.Record\(node=mgp.Vertex, core=mgp.Number\)

