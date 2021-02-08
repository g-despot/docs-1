# nxalg.has\_eulerian\_path

## nxalg.has\_eulerian\_path\(ctx: mgp.ProcCtx\)

Returns `True` if `G` has an Eulerian path.

An _Eulerian path_ is a path in a graph that uses each edge of a graph exactly once.

A directed graph has an Eulerian path if:

* at most one vertex has `out_degree - in_degree = 1`,
* at most one vertex has `in_degree - out_degree = 1`,
* every other vertex has equal in\_degree and out\_degree,
* and all of its vertices with nonzero degree belong to a

  single connected component of the underlying undirected graph.

An undirected graph has an Eulerian path if exactly zero or two vertices have an odd degree and all of its vertices with nonzero degrees belong to a single connected component.

**Parameters**

* **ctx** \(_mgp.ProcCtx_\) – The context of the procedure being executed.

**Returns**

`True` if `G` has an eulerian path.

**Return type**

mgp.Record\(has\_eulerian\_path=bool\)

