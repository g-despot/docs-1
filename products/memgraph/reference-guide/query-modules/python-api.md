# Python API

This is the API documentation for `mgp.py` which contains definitions of the public Python API provided by Memgraph. In essence, this is a wrapper around the `[C API](mg_procedure.md)`. This source file can be found in the Memgraph installation directory, under `python_support`. On the standard Debian installation, this will be under `/usr/lib/memgraph/python_support`.

## Contents

|  | Name |
| :--- | :--- |
| method | [**mgp.read\_proc**](python-api.md#mgp.read_proc)  Register a function as a read-only procedure of the current module. |
| exception | [**mgp.AbortError**](python-api.md#mgp.AbortError)  Signals that the procedure was asked to abort its execution. |
| class | [**mgp.Deprecated**](python-api.md#mgp.Deprecated)  Annotate a resulting Record’s field as deprecated. |
| class | [**mgp.Edge**](python-api.md#cmgp.Edge)  Edge in the graph database. |
| class | [**mgp.EdgeType**](python-api.md#mgp.EdgeType)  Type of an Edge. |
| class | [**mgp.Graph**](python-api.md#mgp.Graph)  State of the graph database in current ProcCtx. |
| class | [**mgp.Label**](python-api.md#mgp.Label)  Label of a Vertex. |
| class | [**mgp.Path**](python-api.md#mgp.Path)  Path containing Vertex and Edge instances. |
| class | [**mgp.ProcCtx**](python-api.md#mgp.ProcCtx)  Context of a procedure being executed. |
| class | [**mgp.Properties**](python-api.md#mgp.Properties)  A collection of properties either on a Vertex or an Edge. |
| class | [**mgp.Property**](python-api.md#mgp.Property)  Named property value of a Vertex or an Edge. |
| class | [**mgp.Record**](python-api.md#mgp.Record)  Represents a record of resulting field values. |
| class | [**mgp.Vertex**](python-api.md#mgp.Vertex)  Vertex in the graph database. |
| class | [**mgp.Vertices**](python-api.md#mgp.Vertices)  Iterable over vertices in a graph. |

## mgp.read\_proc\(func: Callable\[\[…\], mgp.Record\]\) <a id="mgp.read_proc"></a>

Register `func` as a read-only procedure of the current module.

`read_proc` is meant to be used as a decorator function to register module procedures. The registered `func` needs to be a callable which optionally takes `ProcCtx` as the first argument. Other arguments of `func` will be bound to values passed in the cypherQuery. The full signature of `func` needs to be annotated with types. The return type must be `Record(field_name=type, ...)` and the procedure must produce either a complete Record or None. To mark a field as deprecated, use `Record(field_name=Deprecated(type), ...)`. Multiple records can be produced by returning an iterable of them. Registering generator functions is currently not supported.

## exception mgp.AbortError\(\) <a id="mgp.AbortError"></a>

Bases: `Exception`

Signals that the procedure was asked to abort its execution.

## class mgp.Deprecated\(type\_\) <a id="mgp.Deprecated"></a>

Bases: `object`

Annotate a resulting Record’s field as deprecated.

#### field\_type\(\)

## class mgp.Edge\(edge\) <a id="mgp.Edge"></a>

Bases: `object`

Edge in the graph database.

Access to an Edge is only valid during a single execution of a procedure in a query. You should not globally store an instance of an Edge. Using an invalid Edge instance will raise InvalidContextError.

#### property from\_vertex\(\)

Raise InvalidContextError.

#### property id\(\)

Raise InvalidContextError.

#### is\_valid\(\)

Return True if self is in valid context and may be used.

#### property properties\(\)

Raise InvalidContextError.

#### property to\_vertex\(\)

Raise InvalidContextError.

#### property type\(\)

Raise InvalidContextError.

## class mgp.EdgeType\(name\) <a id="mgp.EdgeType"></a>

Bases: `object`

Type of an Edge.

#### property name\(\)

## class mgp.Graph\(graph\) <a id="mgp.Graph"></a>

Bases: `object`

State of the graph database in current ProcCtx.

#### get\_vertex\_by\_id\(vertex\_id: NewType..new\_type\)

Return the Vertex corresponding to given vertex\_id from the graph.

Access to a Vertex is only valid during a single execution of a procedure in a query. You should not globally store the returned Vertex.

Raise IndexError if unable to find the given vertex\_id. Raise InvalidContextError if context is invalid.

#### is\_valid\(\)

Return True if self is in valid context and may be used.

#### property vertices\(\)

All vertices in the graph.

Access to a Vertex is only valid during a single execution of a procedure in a query. You should not globally store the returned Vertex instances.

Raise InvalidContextError if context is invalid.

### exception mgp.InvalidContextError\(\)

Bases: `Exception`

Signals using a graph element instance outside of the registered procedure.

## class mgp.Label\(name\) <a id="mgp.Label"></a>

Bases: `object`

Label of a Vertex.

#### property name\(\)

## class mgp.Path\(starting\_vertex\_or\_path: Union\[\_mgp.Path, mgp.Vertex\]\) <a id="mgp.Path"></a>

Bases: `object`

Path containing Vertex and Edge instances.

#### property edges\(\)

Edges ordered from the start to the end of the path.

Raise InvalidContextError if using an invalid Path instance.

#### expand\(edge: mgp.Edge\)

Append an edge continuing from the last vertex on the path.

The last vertex on the path will become the other endpoint of the given edge, as continued from the current last vertex.

Raise ValueError if the current last vertex in the path is not part of the given edge. Raise InvalidContextError if using an invalid Path instance or if passed in edge is invalid.

#### is\_valid\(\)

#### property vertices\(\)

Vertices ordered from the start to the end of the path.

Raise InvalidContextError if using an invalid Path instance.

## class mgp.ProcCtx\(graph\) <a id="mgp.ProcCtx"></a>

Bases: `object`

Context of a procedure being executed.

Access to a ProcCtx is only valid during a single execution of a procedure in a query. You should not globally store a ProcCtx instance.

#### check\_must\_abort\(\)

#### property graph\(\)

Raise InvalidContextError if context is invalid.

#### is\_valid\(\)

#### must\_abort\(\)

## class mgp.Properties\(vertex\_or\_edge\) <a id="mgp.Properties"></a>

Bases: `object`

A collection of properties either on a Vertex or an Edge.

#### get\(property\_name: str, default=None\)

Get the value of a property with the given name or return default.

Raise InvalidContextError.

#### items\(\)

Raise InvalidContextError.

#### keys\(\)

Iterate over property names.

Raise InvalidContextError.

#### values\(\)

Iterate over property values.

Raise InvalidContextError.

## class mgp.Property\(name, value\) <a id="mgp.Property"></a>

Bases: `tuple`

Named property value of a Vertex or an Edge.

#### name\(\)

Alias for field number 0

#### value\(\)

Alias for field number 1

## class mgp.Record\(\*\*kwargs\) <a id="mgp.Record"></a>

Bases: `object`

Represents a record of resulting field values.

#### fields\(\)

### exception mgp.UnsupportedTypingError\(type\_\)

Bases: `Exception`

Signals a typing annotation is not supported as a \_mgp.CypherType.

## class mgp.Vertex\(vertex\) <a id="mgp.Vertex"></a>

Bases: `object`

Vertex in the graph database.

Access to a Vertex is only valid during a single execution of a procedure in a query. You should not globally store an instance of a Vertex. Using an invalid Vertex instance will raise InvalidContextError.

#### property id\(\)

Raise InvalidContextError.

#### property in\_edges\(\)

Raise InvalidContextError.

#### is\_valid\(\)

Return True if self is in valid context and may be used

#### property labels\(\)

Raise InvalidContextError.

#### property out\_edges\(\)

Raise InvalidContextError.

#### property properties\(\)

Raise InvalidContextError.

## class mgp.Vertices\(graph\) <a id="mgp.Vertices"></a>

Bases: `object`

Iterable over vertices in a graph.

#### is\_valid\(\)

Return True if self is in valid context and may be used.

