# nxalg.is\_simple\_path

## nxalg.is\_simple\_path\(ctx: mgp.ProcCtx, nodes: mgp.List.mgp.Vertex\)

Returns `True` if and only if the given nodes form a simple path in `G`.

A _simple path_ in a graph is a nonempty sequence of nodes in which no node appears more than once in the sequence and each adjacent pair of nodes in the sequence is adjacent in the graph.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **nodes** \(_mgp.List\[mgp.Vertex\]_\) – A list of one or more nodes in the graph `G`.

**Returns**

Whether the given list of nodes represents a simple path in `G`.

**Return type**

mgp.Record\(is\_simple\_path=bool\)

