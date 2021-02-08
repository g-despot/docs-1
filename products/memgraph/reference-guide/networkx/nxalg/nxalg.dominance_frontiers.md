# nxalg.dominance\_frontiers

## nxalg.dominance\_frontiers\(ctx: mgp.ProcCtx, start: mgp.Vertex\)

Returns the dominance frontiers of all nodes of a directed graph.

The _dominance frontier_ of a node `d` is the set of all nodes such that `d` dominates an immediate predecessor of a node, but `d` does not strictly dominate that node.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **start** \(_mgp.Vertex_\) – The start node of dominance computation.

**Returns**

A dictionary containing the dominance frontiers of each node reachable from `start` as lists.

**Return type**

mgp.Record\(node=mgp.Vertex, frontier=mgp.List\[mgp.Vertex\]\)

