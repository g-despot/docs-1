# nxalg.simple\_cycles

## nxalg.simple\_cycles\(ctx: mgp.ProcCtx\)

Find simple cycles \(elementary circuits\) of a directed graph.

A _simple cycle_, or _elementary circuit_, is a closed path where no node appears twice. Two elementary circuits are distinct if they are not cyclic permutations of each other.

This is a nonrecursive, iterator/generator version of Johnson’s algorithm. There may be better algorithms for some cases.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.

**Returns**

A list of elementary cycles in the graph. Each cycle is represented by a list of nodes in the cycle.

**Return type**

mgp.Record\(cycles=mgp.List\[mgp.List\[mgp.Vertex\]\]\)

