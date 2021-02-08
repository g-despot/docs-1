# nxalg.degree\_assortativity\_coefficient

## nxalg.degree\_assortativity\_coefficient\(ctx: mgp.ProcCtx, x: str = 'out', y: str = 'in', weight: mgp.Nullable.str = None, nodes: mgp.Nullable.mgp.List.mgp.Vertex = None\)

Compute degree assortativity of a graph.

_Assortativity_ measures the similarity of connections in the graph with respect to the node degree.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.
* **x** \(_str\('in','out'\)_\) – \(default=’out’\)

  The degree type for source node \(directed graphs only\).

* **y** \(_str\('in','out'\)_\) – \(default=’in’\)

  The degree type for target node \(directed graphs only\).

* **weight** \(_mgp.Nullable\[str\]_\) – \(default=None\)

  The edge attribute that holds the numerical value used

  as a weight.  If `None`, then each edge has weight 1.

  The degree is the sum of the edge weights adjacent to the node.

* **nodes** \(_mgp.Nullable\[mgp.List\[mgp.Vertex\]\]_\) – \(default=None\)

  Compute degree assortativity only for nodes in a container.

  The default is all nodes.

**Returns**

Assortativity of graph by degree.

**Return type**

mgp.Record\(assortativity=float\)

