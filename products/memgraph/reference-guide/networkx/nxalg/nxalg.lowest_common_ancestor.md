# nxalg.lowest\_common\_ancestor

## nxalg.lowest\_common\_ancestor\(ctx: mgp.ProcCtx, node1: mgp.Vertex, node2: mgp.Vertex\)

Compute the lowest common ancestor of the given pair of nodes.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **node1** \(_mgp.Vertex_\) – A node in the graph.
* **node2** \(_mgp.Vertex_\) – A node in the graph.

**Returns**

The lowest common ancestor of `node1` and `node2`, or default if they have no common ancestors.

**Return type**

mgp.Record\(ancestor=mgp.Nullable\[mgp.Vertex\]\)

