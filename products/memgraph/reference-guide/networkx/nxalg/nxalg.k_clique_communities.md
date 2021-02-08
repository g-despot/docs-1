# nxalg.k\_clique\_communities

## nxalg.k\_clique\_communities\(ctx: mgp.ProcCtx, k: int, cliques: mgp.Nullable.mgp.List.mgp.List.mgp.Vertex = None\)

Find k-clique communities in a graph using the percolation method.

A _k-clique community_ is the union of all cliques of size `k` that can be reached through adjacent \(sharing `k-1` nodes\) k-cliques.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **k** \(_int_\) – Size of the smallest clique.
* **cliques** \(_mgp.Nullable**\[**mgp.List**\[**mgp.List\[mgp.Vertex\]**\]**\]_\) – \(default=None\)

  Precomputed cliques \(use networkx.find\_cliques\(G\)\).

**Returns**

Sets of nodes, one for each k-clique community.

**Return type**

mgp.Record\(communities=mgp.List\[mgp.List\[mgp.Vertex\]\]\)

