# nxalg.all\_simple\_paths

## nxalg.all\_simple\_paths\(ctx: mgp.ProcCtx, source: mgp.Vertex, target: mgp.Vertex, cutoff: mgp.Nullable.int = None\)

Returns all simple paths in the graph `G` from source to target.

A simple path is a path with no repeated nodes.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **source** \(_mgp.Vertex_\) – Starting node for the path.
* **target** \(_mgp.Vertex_\) – Ending node for the path.
* **cutoff** \(_mgp.Nullable\[int\]_\) – \(default=None\)

  Depth to stop the search. Only paths of `length <= cutoff` are returned.

**Returns**

A list of simple path lists. If there are no paths between the source and target within the given cutoff there is no output.

**Return type**

mgp.Record\(paths=mgp.List\[mgp.List\[mgp.Vertex\]\]\)

