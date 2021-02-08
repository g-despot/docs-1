# C API

This is the API documentation for `mg_procedure.h` which contains declarations of all functions that can be used to implement a query module procedure. The source file can be found in the Memgraph installation directory, under `include/memgraph`. On the standard Debian installation, this will be under `/usr/include/memgraph`.

## Classes

|  | Name |
| :--- | :--- |
| struct | **mgp\_label**  Label of a vertex. |
| struct | **mgp\_edge\_type**  Type of an edge. |
| struct | **mgp\_property**  Reference to a named property value. |
| struct | **mgp\_vertex\_id**  ID of a vertex; valid during a single query execution. |
| struct | **mgp\_edge\_id**  ID of an edge; valid during a single query execution. |

## Types

|  | Name |
| :--- | :--- |
| enum | [**mgp\_value\_type**](c-api.md#enum-mgp_value_type) { MGP\_VALUE\_TYPE\_NULL, MGP\_VALUE\_TYPE\_BOOL, MGP\_VALUE\_TYPE\_INT, MGP\_VALUE\_TYPE\_DOUBLE, MGP\_VALUE\_TYPE\_STRING, MGP\_VALUE\_TYPE\_LIST, MGP\_VALUE\_TYPE\_MAP, MGP\_VALUE\_TYPE\_VERTEX, MGP\_VALUE\_TYPE\_EDGE, MGP\_VALUE\_TYPE\_PATH } All available types that can be stored in a mgp\_value. |
| typedef void\(_\)\(const struct mgp\_list_ , const struct mgp\_graph _, struct mgp\_result_ , struct mgp\_memory \*\) | [**mgp\_proc\_cb**](c-api.md#typedef-mgp_proc_cb)  Entry-point for a query module procedure, invoked through openCypher. |

## Functions

|  | Name |
| :--- | :--- |
| void \* | [**mgp\_alloc**](c-api.md#function-mgp_alloc)\(struct mgp\_memory \* memory, size\_t size\_in\_bytes\)  Allocate a block of memory with given size in bytes. |
| void \* | [**mgp\_aligned\_alloc**](c-api.md#function-mgp_aligned_alloc)\(struct mgp\_memory \* memory, size\_t size\_in\_bytes, size\_t alignment\)  Allocate an aligned block of memory with given size in bytes. |
| void | [**mgp\_free**](c-api.md#function-mgp_free)\(struct mgp\_memory  _memory, void_  ptr\)  Deallocate an allocation from mgp\_alloc or mgp\_aligned\_alloc. |
| void | [**mgp\_value\_destroy**](c-api.md#function-mgp_value_destroy)\(struct mgp\_value \* val\)  Free the memory used by the given mgp\_value instance. |
| struct mgp\_value \* | [**mgp\_value\_make\_null**](c-api.md#function-mgp_value_make_null)\(struct mgp\_memory \* memory\)  Construct a value representing `null` in openCypher. |
| struct mgp\_value \* | [**mgp\_value\_make\_bool**](c-api.md#function-mgp_value_make_bool)\(int val, struct mgp\_memory \* memory\)  Construct a boolean value. |
| struct mgp\_value \* | [**mgp\_value\_make\_int**](c-api.md#function-mgp_value_make_int)\(int64\_t val, struct mgp\_memory \* memory\)  Construct an integer value. |
| struct mgp\_value \* | [**mgp\_value\_make\_double**](c-api.md#function-mgp_value_make_double)\(double val, struct mgp\_memory \* memory\)  Construct a double floating point value. |
| struct mgp\_value \* | [**mgp\_value\_make\_string**](c-api.md#function-mgp_value_make_string)\(const char  _val, struct mgp\_memory_  memory\)  Construct a character string value from a NULL terminated string. |
| struct mgp\_value \* | [**mgp\_value\_make\_list**](c-api.md#function-mgp_value_make_list)\(struct mgp\_list \* val\)  Create a mgp\_value storing a mgp\_list. |
| struct mgp\_value \* | [**mgp\_value\_make\_map**](c-api.md#function-mgp_value_make_map)\(struct mgp\_map \* val\)  Create a mgp\_value storing a mgp\_map. |
| struct mgp\_value \* | [**mgp\_value\_make\_vertex**](c-api.md#function-mgp_value_make_vertex)\(struct mgp\_vertex \* val\)  Create a mgp\_value storing a mgp\_vertex. |
| struct mgp\_value \* | [**mgp\_value\_make\_edge**](c-api.md#function-mgp_value_make_edge)\(struct mgp\_edge \* val\)  Create a mgp\_value storing a mgp\_edge. |
| struct mgp\_value \* | [**mgp\_value\_make\_path**](c-api.md#function-mgp_value_make_path)\(struct mgp\_path \* val\)  Create a mgp\_value storing a mgp\_path. |
| enum [mgp\_value\_type](c-api.md#enum-mgp_value_type) | [**mgp\_value\_get\_type**](c-api.md#function-mgp_value_get_type)\(const struct mgp\_value \* val\)  Return the type of the value contained in mgp\_value. |
| int | [**mgp\_value\_is\_null**](c-api.md#function-mgp_value_is_null)\(const struct mgp\_value \* val\)  Return non-zero if the given mgp\_value represents `null`. |
| int | [**mgp\_value\_is\_bool**](c-api.md#function-mgp_value_is_bool)\(const struct mgp\_value \* val\)  Return non-zero if the given mgp\_value stores a boolean. |
| int | [**mgp\_value\_is\_int**](c-api.md#function-mgp_value_is_int)\(const struct mgp\_value \* val\)  Return non-zero if the given mgp\_value stores an integer. |
| int | [**mgp\_value\_is\_double**](c-api.md#function-mgp_value_is_double)\(const struct mgp\_value \* val\)  Return non-zero if the given mgp\_value stores a double floating-point. |
| int | [**mgp\_value\_is\_string**](c-api.md#function-mgp_value_is_string)\(const struct mgp\_value \* val\)  Return non-zero if the given mgp\_value stores a character string. |
| int | [**mgp\_value\_is\_list**](c-api.md#function-mgp_value_is_list)\(const struct mgp\_value \* val\)  Return non-zero if the given mgp\_value stores a list of values. |
| int | [**mgp\_value\_is\_map**](c-api.md#function-mgp_value_is_map)\(const struct mgp\_value \* val\)  Return non-zero if the given mgp\_value stores a map of values. |
| int | [**mgp\_value\_is\_vertex**](c-api.md#function-mgp_value_is_vertex)\(const struct mgp\_value \* val\)  Return non-zero if the given mgp\_value stores a vertex. |
| int | [**mgp\_value\_is\_edge**](c-api.md#function-mgp_value_is_edge)\(const struct mgp\_value \* val\)  Return non-zero if the given mgp\_value stores an edge. |
| int | [**mgp\_value\_is\_path**](c-api.md#function-mgp_value_is_path)\(const struct mgp\_value \* val\)  Return non-zero if the given mgp\_value stores a path. |
| int | [**mgp\_value\_get\_bool**](c-api.md#function-mgp_value_get_bool)\(const struct mgp\_value \* val\)  Return the contained boolean value. |
| int64\_t | [**mgp\_value\_get\_int**](c-api.md#function-mgp_value_get_int)\(const struct mgp\_value \* val\)  Return the contained integer. |
| double | [**mgp\_value\_get\_double**](c-api.md#function-mgp_value_get_double)\(const struct mgp\_value \* val\)  Return the contained double floating-point. |
| const char \* | [**mgp\_value\_get\_string**](c-api.md#function-mgp_value_get_string)\(const struct mgp\_value \* val\)  Return the contained character string. |
| const struct mgp\_list \* | [**mgp\_value\_get\_list**](c-api.md#function-mgp_value_get_list)\(const struct mgp\_value \* val\)  Return the contained list of values. |
| const struct mgp\_map \* | [**mgp\_value\_get\_map**](c-api.md#function-mgp_value_get_map)\(const struct mgp\_value \* val\)  Return the contained map of values. |
| const struct mgp\_vertex \* | [**mgp\_value\_get\_vertex**](c-api.md#function-mgp_value_get_vertex)\(const struct mgp\_value \* val\)  Return the contained vertex. |
| const struct mgp\_edge \* | [**mgp\_value\_get\_edge**](c-api.md#function-mgp_value_get_edge)\(const struct mgp\_value \* val\)  Return the contained edge. |
| const struct mgp\_path \* | [**mgp\_value\_get\_path**](c-api.md#function-mgp_value_get_path)\(const struct mgp\_value \* val\)  Return the contained path. |
| struct mgp\_list \* | [**mgp\_list\_make\_empty**](c-api.md#function-mgp_list_make_empty)\(size\_t capacity, struct mgp\_memory \* memory\)  Create an empty list with given capacity. |
| void | [**mgp\_list\_destroy**](c-api.md#function-mgp_list_destroy)\(struct mgp\_list \* list\)  Free the memory used by the given mgp\_list and contained elements. |
| int | [**mgp\_list\_append**](c-api.md#function-mgp_list_append)\(struct mgp\_list  _list, const struct mgp\_value_  val\)  Append a copy of mgp\_value to mgp\_list if capacity allows. |
| int | [**mgp\_list\_append\_extend**](c-api.md#function-mgp_list_append_extend)\(struct mgp\_list  _list, const struct mgp\_value_  val\)  Append a copy of mgp\_value to mgp\_list increasing capacity if needed. |
| size\_t | [**mgp\_list\_size**](c-api.md#function-mgp_list_size)\(const struct mgp\_list \* list\)  Return the number of elements stored in mgp\_list. |
| size\_t | [**mgp\_list\_capacity**](c-api.md#function-mgp_list_capacity)\(const struct mgp\_list \* list\)  Return the total number of elements for which there's already allocated memory in mgp\_list. |
| const struct mgp\_value \* | [**mgp\_list\_at**](c-api.md#function-mgp_list_at)\(const struct mgp\_list \* list, size\_t index\)  Return the element in mgp\_list at given position. |
| struct mgp\_map \* | [**mgp\_map\_make\_empty**](c-api.md#function-mgp_map_make_empty)\(struct mgp\_memory \* memory\)  Create an empty map of character strings to mgp\_value instances. |
| void | [**mgp\_map\_destroy**](c-api.md#function-mgp_map_destroy)\(struct mgp\_map \* map\)  Free the memory used by the given mgp\_map and contained items. |
| int | [**mgp\_map\_insert**](c-api.md#function-mgp_map_insert)\(struct mgp\_map  _map, const char_  key, const struct mgp\_value \* value\)  Insert a new mapping from a NULL terminated character string to a value. |
| size\_t | [**mgp\_map\_size**](c-api.md#function-mgp_map_size)\(const struct mgp\_map \* map\)  Return the number of items stored in mgp\_map. |
| const struct mgp\_value \* | [**mgp\_map\_at**](c-api.md#function-mgp_map_at)\(const struct mgp\_map  _map, const char_  key\)  Return the mapped mgp\_value to the given character string. |
| const char \* | [**mgp\_map\_item\_key**](c-api.md#function-mgp_map_item_key)\(const struct mgp\_map\_item \* item\)  Get the key of the mapped item. |
| const struct mgp\_value \* | [**mgp\_map\_item\_value**](c-api.md#function-mgp_map_item_value)\(const struct mgp\_map\_item \* item\)  Get the value of the mapped item. |
| struct mgp\_map\_items\_iterator \* | [**mgp\_map\_iter\_items**](c-api.md#function-mgp_map_iter_items)\(const struct mgp\_map  _map, struct mgp\_memory_  memory\)  Start iterating over items contained in the given map. |
| void | [**mgp\_map\_items\_iterator\_destroy**](c-api.md#function-mgp_map_items_iterator_destroy)\(struct mgp\_map\_items\_iterator \* it\)  Deallocate memory used by mgp\_map\_items\_iterator. |
| const struct mgp\_map\_item \* | [**mgp\_map\_items\_iterator\_get**](c-api.md#function-mgp_map_items_iterator_get)\(const struct mgp\_map\_items\_iterator \* it\)  Get the current item pointed to by the iterator. |
| const struct mgp\_map\_item \* | [**mgp\_map\_items\_iterator\_next**](c-api.md#function-mgp_map_items_iterator_next)\(struct mgp\_map\_items\_iterator \* it\)  Advance the iterator to the next item stored in map and return it. |
| struct mgp\_path \* | [**mgp\_path\_make\_with\_start**](c-api.md#function-mgp_path_make_with_start)\(const struct mgp\_vertex  _vertex, struct mgp\_memory_  memory\)  Create a path with the copy of the given starting vertex. |
| struct mgp\_path \* | [**mgp\_path\_copy**](c-api.md#function-mgp_path_copy)\(const struct mgp\_path  _path, struct mgp\_memory_  memory\)  Copy a mgp\_path. |
| void | [**mgp\_path\_destroy**](c-api.md#function-mgp_path_destroy)\(struct mgp\_path \* path\)  Free the memory used by the given mgp\_path and contained vertices and edges. |
| int | [**mgp\_path\_expand**](c-api.md#function-mgp_path_expand)\(struct mgp\_path  _path, const struct mgp\_edge_  edge\)  Append an edge continuing from the last vertex on the path. |
| size\_t | [**mgp\_path\_size**](c-api.md#function-mgp_path_size)\(const struct mgp\_path \* path\)  Return the number of edges in a mgp\_path. |
| const struct mgp\_vertex \* | [**mgp\_path\_vertex\_at**](c-api.md#function-mgp_path_vertex_at)\(const struct mgp\_path \* path, size\_t index\)  Return the vertex from a path at given index. |
| const struct mgp\_edge \* | [**mgp\_path\_edge\_at**](c-api.md#function-mgp_path_edge_at)\(const struct mgp\_path \* path, size\_t index\)  Return the edge from a path at given index. |
| int | [**mgp\_path\_equal**](c-api.md#function-mgp_path_equal)\(const struct mgp\_path  _p1, const struct mgp\_path_  p2\)  Return non-zero if given paths are equal, otherwise 0. |
| int | [**mgp\_result\_set\_error\_msg**](c-api.md#function-mgp_result_set_error_msg)\(struct mgp\_result  _res, const char_  error\_msg\)  Set the error as the result of the procedure. |
| struct mgp\_result\_record \* | [**mgp\_result\_new\_record**](c-api.md#function-mgp_result_new_record)\(struct mgp\_result \* res\)  Create a new record for results. |
| int | [**mgp\_result\_record\_insert**](c-api.md#function-mgp_result_record_insert)\(struct mgp\_result\_record  _record, const char_  field\_name, const struct mgp\_value \* val\)  Assign a value to a field in the given record. |
| void | [**mgp\_properties\_iterator\_destroy**](c-api.md#function-mgp_properties_iterator_destroy)\(struct mgp\_properties\_iterator \* it\)  Free the memory used by a mgp\_properties\_iterator. |
| const struct mgp\_property \* | [**mgp\_properties\_iterator\_get**](c-api.md#function-mgp_properties_iterator_get)\(const struct mgp\_properties\_iterator \* it\)  Get the current property pointed to by the iterator. |
| const struct mgp\_property \* | [**mgp\_properties\_iterator\_next**](c-api.md#function-mgp_properties_iterator_next)\(struct mgp\_properties\_iterator \* it\)  Advance the iterator to the next property and return it. |
| void | [**mgp\_edges\_iterator\_destroy**](c-api.md#function-mgp_edges_iterator_destroy)\(struct mgp\_edges\_iterator \* it\)  Free the memory used by a mgp\_edges\_iterator. |
| struct mgp\_vertex\_id | [**mgp\_vertex\_get\_id**](c-api.md#function-mgp_vertex_get_id)\(const struct mgp\_vertex \* v\)  Get the ID of given vertex. |
| struct mgp\_vertex \* | [**mgp\_vertex\_copy**](c-api.md#function-mgp_vertex_copy)\(const struct mgp\_vertex  _v, struct mgp\_memory_  memory\)  Copy a mgp\_vertex. |
| void | [**mgp\_vertex\_destroy**](c-api.md#function-mgp_vertex_destroy)\(struct mgp\_vertex \* v\)  Free the memory used by a mgp\_vertex. |
| int | [**mgp\_vertex\_equal**](c-api.md#function-mgp_vertex_equal)\(const struct mgp\_vertex  _v1, const struct mgp\_vertex_  v2\)  Return non-zero if given vertices are equal, otherwise 0. |
| size\_t | [**mgp\_vertex\_labels\_count**](c-api.md#function-mgp_vertex_labels_count)\(const struct mgp\_vertex \* v\)  Return the number of labels a given vertex has. |
| struct mgp\_label | [**mgp\_vertex\_label\_at**](c-api.md#function-mgp_vertex_label_at)\(const struct mgp\_vertex \* v, size\_t index\)  Return mgp\_label in mgp\_vertex at given index. |
| int | [**mgp\_vertex\_has\_label**](c-api.md#function-mgp_vertex_has_label)\(const struct mgp\_vertex \* v, struct mgp\_label label\)  Return non-zero if the given vertex has the given label. |
| int | [**mgp\_vertex\_has\_label\_named**](c-api.md#function-mgp_vertex_has_label_named)\(const struct mgp\_vertex  _v, const char_  label\_name\)  Return non-zero if the given vertex has a label with given name. |
| struct mgp\_value \* | [**mgp\_vertex\_get\_property**](c-api.md#function-mgp_vertex_get_property)\(const struct mgp\_vertex  _v, const char_  property\_name, struct mgp\_memory \* memory\)  Get a copy of a vertex property mapped to a given name. |
| struct mgp\_properties\_iterator \* | [**mgp\_vertex\_iter\_properties**](c-api.md#function-mgp_vertex_iter_properties)\(const struct mgp\_vertex  _v, struct mgp\_memory_  memory\)  Start iterating over properties stored in the given vertex. |
| struct mgp\_edges\_iterator \* | [**mgp\_vertex\_iter\_in\_edges**](c-api.md#function-mgp_vertex_iter_in_edges)\(const struct mgp\_vertex  _v, struct mgp\_memory_  memory\)  Start iterating over inbound edges of the given vertex. |
| struct mgp\_edges\_iterator \* | [**mgp\_vertex\_iter\_out\_edges**](c-api.md#function-mgp_vertex_iter_out_edges)\(const struct mgp\_vertex  _v, struct mgp\_memory_  memory\)  Start iterating over outbound edges of the given vertex. |
| const struct mgp\_edge \* | [**mgp\_edges\_iterator\_get**](c-api.md#function-mgp_edges_iterator_get)\(const struct mgp\_edges\_iterator \* it\)  Get the current edge pointed to by the iterator. |
| const struct mgp\_edge \* | [**mgp\_edges\_iterator\_next**](c-api.md#function-mgp_edges_iterator_next)\(struct mgp\_edges\_iterator \* it\)  Advance the iterator to the next edge and return it. |
| struct mgp\_edge\_id | [**mgp\_edge\_get\_id**](c-api.md#function-mgp_edge_get_id)\(const struct mgp\_edge \* e\)  Get the ID of given edge. |
| struct mgp\_edge \* | [**mgp\_edge\_copy**](c-api.md#function-mgp_edge_copy)\(const struct mgp\_edge  _e, struct mgp\_memory_  memory\)  Copy a mgp\_edge. |
| void | [**mgp\_edge\_destroy**](c-api.md#function-mgp_edge_destroy)\(struct mgp\_edge \* e\)  Free the memory used by a mgp\_edge. |
| int | [**mgp\_edge\_equal**](c-api.md#function-mgp_edge_equal)\(const struct mgp\_edge  _e1, const struct mgp\_edge_  e2\)  Return non-zero if given edges are equal, otherwise 0. |
| struct mgp\_edge\_type | [**mgp\_edge\_get\_type**](c-api.md#function-mgp_edge_get_type)\(const struct mgp\_edge \* e\)  Return the type of the given edge. |
| const struct mgp\_vertex \* | [**mgp\_edge\_get\_from**](c-api.md#function-mgp_edge_get_from)\(const struct mgp\_edge \* e\)  Return the source vertex of the given edge. |
| const struct mgp\_vertex \* | [**mgp\_edge\_get\_to**](c-api.md#function-mgp_edge_get_to)\(const struct mgp\_edge \* e\)  Return the destination vertex of the given edge. |
| struct mgp\_value \* | [**mgp\_edge\_get\_property**](c-api.md#function-mgp_edge_get_property)\(const struct mgp\_edge  _e, const char_  property\_name, struct mgp\_memory \* memory\)  Get a copy of a edge property mapped to a given name. |
| struct mgp\_properties\_iterator \* | [**mgp\_edge\_iter\_properties**](c-api.md#function-mgp_edge_iter_properties)\(const struct mgp\_edge  _e, struct mgp\_memory_  memory\)  Start iterating over properties stored in the given edge. |
| struct mgp\_vertex \* | [**mgp\_graph\_get\_vertex\_by\_id**](c-api.md#function-mgp_graph_get_vertex_by_id)\(const struct mgp\_graph  _g, struct mgp\_vertex\_id id, struct mgp\_memory_  memory\)  Return the vertex corresponding to given ID. |
| void | [**mgp\_vertices\_iterator\_destroy**](c-api.md#function-mgp_vertices_iterator_destroy)\(struct mgp\_vertices\_iterator \* it\)  Free the memory used by a mgp\_vertices\_iterator. |
| struct mgp\_vertices\_iterator \* | [**mgp\_graph\_iter\_vertices**](c-api.md#function-mgp_graph_iter_vertices)\(const struct mgp\_graph  _g, struct mgp\_memory_  memory\)  Start iterating over vertices of the given graph. |
| const struct mgp\_vertex \* | [**mgp\_vertices\_iterator\_get**](c-api.md#function-mgp_vertices_iterator_get)\(const struct mgp\_vertices\_iterator \* it\)  Get the current vertex pointed to by the iterator. |
| const struct mgp\_vertex \* | [**mgp\_vertices\_iterator\_next**](c-api.md#function-mgp_vertices_iterator_next)\(struct mgp\_vertices\_iterator \* it\)  Advance the iterator to the next vertex and return it. |
| const struct mgp\_type \* | [**mgp\_type\_any**](c-api.md#function-mgp_type_any)\(\)  Get the type representing any value that isn't `null`. |
| const struct mgp\_type \* | [**mgp\_type\_bool**](c-api.md#function-mgp_type_bool)\(\)  Get the type representing boolean values. |
| const struct mgp\_type \* | [**mgp\_type\_string**](c-api.md#function-mgp_type_string)\(\)  Get the type representing character string values. |
| const struct mgp\_type \* | [**mgp\_type\_int**](c-api.md#function-mgp_type_int)\(\)  Get the type representing integer values. |
| const struct mgp\_type \* | [**mgp\_type\_float**](c-api.md#function-mgp_type_float)\(\)  Get the type representing floating-point values. |
| const struct mgp\_type \* | [**mgp\_type\_number**](c-api.md#function-mgp_type_number)\(\)  Get the type representing any number value. |
| const struct mgp\_type \* | [**mgp\_type\_map**](c-api.md#function-mgp_type_map)\(\)  Get the type representing map values. |
| const struct mgp\_type \* | [**mgp\_type\_node**](c-api.md#function-mgp_type_node)\(\)  Get the type representing graph node values. |
| const struct mgp\_type \* | [**mgp\_type\_relationship**](c-api.md#function-mgp_type_relationship)\(\)  Get the type representing graph relationship values. |
| const struct mgp\_type \* | [**mgp\_type\_path**](c-api.md#function-mgp_type_path)\(\)  Get the type representing a graph path \(walk\) from one node to another. |
| const struct mgp\_type \* | [**mgp\_type\_list**](c-api.md#function-mgp_type_list)\(const struct mgp\_type \* element\_type\)  Build a type representing a list of values of given `element_type`. |
| const struct mgp\_type \* | [**mgp\_type\_nullable**](c-api.md#function-mgp_type_nullable)\(const struct mgp\_type \* type\)  Build a type representing either a `null` value or a value of given `type`. |
| struct mgp\_proc \* | [**mgp\_module\_add\_read\_procedure**](c-api.md#function-mgp_module_add_read_procedure)\(struct mgp\_module  _module, const char_  name, [mgp\_proc\_cb](c-api.md#typedef-mgp_proc_cb) cb\)  Register a read-only procedure with a module. |
| int | [**mgp\_proc\_add\_arg**](c-api.md#function-mgp_proc_add_arg)\(struct mgp\_proc  _proc, const char_  name, const struct mgp\_type \* type\)  Add a required argument to a procedure. |
| int | [**mgp\_proc\_add\_opt\_arg**](c-api.md#function-mgp_proc_add_opt_arg)\(struct mgp\_proc  _proc, const char_  name, const struct mgp\_type  _type, const struct mgp\_value_  default\_value\)  Add an optional argument with a default value to a procedure. |
| int | [**mgp\_proc\_add\_result**](c-api.md#function-mgp_proc_add_result)\(struct mgp\_proc  _proc, const char_  name, const struct mgp\_type \* type\)  Add a result field to a procedure. |
| int | [**mgp\_proc\_add\_deprecated\_result**](c-api.md#function-mgp_proc_add_deprecated_result)\(struct mgp\_proc  _proc, const char_  name, const struct mgp\_type \* type\)  Add a result field to a procedure and mark it as deprecated. |
| int | [**mgp\_must\_abort**](c-api.md#function-mgp_must_abort)\(const struct mgp\_graph \* graph\)  Return non-zero if the currently executing procedure should abort as soon as possible. |

## Types Documentation

### enum mgp\_value\_type

| Enumerator | Value | Description |
| :--- | :--- | :--- |
| MGP\_VALUE\_TYPE\_NULL |  |  |
| MGP\_VALUE\_TYPE\_BOOL |  |  |
| MGP\_VALUE\_TYPE\_INT |  |  |
| MGP\_VALUE\_TYPE\_DOUBLE |  |  |
| MGP\_VALUE\_TYPE\_STRING |  |  |
| MGP\_VALUE\_TYPE\_LIST |  |  |
| MGP\_VALUE\_TYPE\_MAP |  |  |
| MGP\_VALUE\_TYPE\_VERTEX |  |  |
| MGP\_VALUE\_TYPE\_EDGE |  |  |
| MGP\_VALUE\_TYPE\_PATH |  |  |

All available types that can be stored in a mgp\_value.

### typedef mgp\_proc\_cb

```cpp
typedef void(* mgp_proc_cb) (const struct mgp_list *, const struct mgp_graph *, struct mgp_result *, struct mgp_memory *);
```

Entry-point for a query module procedure, invoked through openCypher.

Passed in arguments will not live longer than the callback's execution. Therefore, you must not store them globally or use the passed in mgp\_memory to allocate global resources.

## Functions Documentation

### function mgp\_alloc

```cpp
void * mgp_alloc(
    struct mgp_memory * memory,
    size_t size_in_bytes
)
```

Allocate a block of memory with given size in bytes.

Unlike malloc, this function is not thread-safe. `size_in_bytes` must be greater than 0. The returned pointer must be freed with mgp\_free. NULL is returned if unable to serve the requested allocation.

### function mgp\_aligned\_alloc

```cpp
void * mgp_aligned_alloc(
    struct mgp_memory * memory,
    size_t size_in_bytes,
    size_t alignment
)
```

Allocate an aligned block of memory with given size in bytes.

Unlike malloc and aligned\_alloc, this function is not thread-safe. `size_in_bytes` must be greater than 0. `alignment` must be a power of 2 value. The returned pointer must be freed with mgp\_free. NULL is returned if unable to serve the requested allocation.

### function mgp\_free

```cpp
void mgp_free(
    struct mgp_memory * memory,
    void * ptr
)
```

Deallocate an allocation from mgp\_alloc or mgp\_aligned\_alloc.

Unlike free, this function is not thread-safe. If `ptr` is NULL, this function does nothing. The behavior is undefined if `ptr` is not a value returned from a prior mgp\_alloc or mgp\_aligned\_alloc call with the corresponding `memory`.

### function mgp\_value\_destroy

```cpp
void mgp_value_destroy(
    struct mgp_value * val
)
```

Free the memory used by the given mgp\_value instance.

### function mgp\_value\_make\_null

```cpp
struct mgp_value * mgp_value_make_null(
    struct mgp_memory * memory
)
```

Construct a value representing `null` in openCypher.

You need to free the instance through mgp\_value\_destroy. NULL is returned if unable to allocate a mgp\_value.

### function mgp\_value\_make\_bool

```cpp
struct mgp_value * mgp_value_make_bool(
    int val,
    struct mgp_memory * memory
)
```

Construct a boolean value.

Non-zero values represent `true`, while zero represents `false`. You need to free the instance through mgp\_value\_destroy. NULL is returned if unable to allocate a mgp\_value.

### function mgp\_value\_make\_int

```cpp
struct mgp_value * mgp_value_make_int(
    int64_t val,
    struct mgp_memory * memory
)
```

Construct an integer value.

You need to free the instance through mgp\_value\_destroy. NULL is returned if unable to allocate a mgp\_value.

### function mgp\_value\_make\_double

```cpp
struct mgp_value * mgp_value_make_double(
    double val,
    struct mgp_memory * memory
)
```

Construct a double floating point value.

You need to free the instance through mgp\_value\_destroy. NULL is returned if unable to allocate a mgp\_value.

### function mgp\_value\_make\_string

```cpp
struct mgp_value * mgp_value_make_string(
    const char * val,
    struct mgp_memory * memory
)
```

Construct a character string value from a NULL terminated string.

You need to free the instance through mgp\_value\_destroy. NULL is returned if unable to allocate a mgp\_value.

### function mgp\_value\_make\_list

```cpp
struct mgp_value * mgp_value_make_list(
    struct mgp_list * val
)
```

Create a mgp\_value storing a mgp\_list.

You need to free the instance through mgp\_value\_destroy. The ownership of the list is given to the created mgp\_value and destroying the mgp\_value will destroy the mgp\_list. Therefore, if a mgp\_value is successfully created you must not call mgp\_list\_destroy on the given list. NULL is returned if unable to allocate a mgp\_value.

### function mgp\_value\_make\_map

```cpp
struct mgp_value * mgp_value_make_map(
    struct mgp_map * val
)
```

Create a mgp\_value storing a mgp\_map.

You need to free the instance through mgp\_value\_destroy. The ownership of the map is given to the created mgp\_value and destroying the mgp\_value will destroy the mgp\_map. Therefore, if a mgp\_value is successfully created you must not call mgp\_map\_destroy on the given map. NULL is returned if unable to allocate a mgp\_value.

### function mgp\_value\_make\_vertex

```cpp
struct mgp_value * mgp_value_make_vertex(
    struct mgp_vertex * val
)
```

Create a mgp\_value storing a mgp\_vertex.

You need to free the instance through mgp\_value\_destroy. The ownership of the vertex is given to the created mgp\_value and destroying the mgp\_value will destroy the mgp\_vertex. Therefore, if a mgp\_value is successfully created you must not call mgp\_vertex\_destroy on the given vertex. NULL is returned if unable to allocate a mgp\_value.

### function mgp\_value\_make\_edge

```cpp
struct mgp_value * mgp_value_make_edge(
    struct mgp_edge * val
)
```

Create a mgp\_value storing a mgp\_edge.

You need to free the instance through mgp\_value\_destroy. The ownership of the edge is given to the created mgp\_value and destroying the mgp\_value will destroy the mgp\_edge. Therefore, if a mgp\_value is successfully created you must not call mgp\_edge\_destroy on the given edge. NULL is returned if unable to allocate a mgp\_value.

### function mgp\_value\_make\_path

```cpp
struct mgp_value * mgp_value_make_path(
    struct mgp_path * val
)
```

Create a mgp\_value storing a mgp\_path.

You need to free the instance through mgp\_value\_destroy. The ownership of the path is given to the created mgp\_value and destroying the mgp\_value will destroy the mgp\_path. Therefore, if a mgp\_value is successfully created you must not call mgp\_path\_destroy on the given path. NULL is returned if unable to allocate a mgp\_value.

### function mgp\_value\_get\_type

```cpp
enum mgp_value_type mgp_value_get_type(
    const struct mgp_value * val
)
```

Return the type of the value contained in mgp\_value.

### function mgp\_value\_is\_null

```cpp
int mgp_value_is_null(
    const struct mgp_value * val
)
```

Return non-zero if the given mgp\_value represents `null`.

### function mgp\_value\_is\_bool

```cpp
int mgp_value_is_bool(
    const struct mgp_value * val
)
```

Return non-zero if the given mgp\_value stores a boolean.

### function mgp\_value\_is\_int

```cpp
int mgp_value_is_int(
    const struct mgp_value * val
)
```

Return non-zero if the given mgp\_value stores an integer.

### function mgp\_value\_is\_double

```cpp
int mgp_value_is_double(
    const struct mgp_value * val
)
```

Return non-zero if the given mgp\_value stores a double floating-point.

### function mgp\_value\_is\_string

```cpp
int mgp_value_is_string(
    const struct mgp_value * val
)
```

Return non-zero if the given mgp\_value stores a character string.

### function mgp\_value\_is\_list

```cpp
int mgp_value_is_list(
    const struct mgp_value * val
)
```

Return non-zero if the given mgp\_value stores a list of values.

### function mgp\_value\_is\_map

```cpp
int mgp_value_is_map(
    const struct mgp_value * val
)
```

Return non-zero if the given mgp\_value stores a map of values.

### function mgp\_value\_is\_vertex

```cpp
int mgp_value_is_vertex(
    const struct mgp_value * val
)
```

Return non-zero if the given mgp\_value stores a vertex.

### function mgp\_value\_is\_edge

```cpp
int mgp_value_is_edge(
    const struct mgp_value * val
)
```

Return non-zero if the given mgp\_value stores an edge.

### function mgp\_value\_is\_path

```cpp
int mgp_value_is_path(
    const struct mgp_value * val
)
```

Return non-zero if the given mgp\_value stores a path.

### function mgp\_value\_get\_bool

```cpp
int mgp_value_get_bool(
    const struct mgp_value * val
)
```

Return the contained boolean value.

Non-zero values represent `true`, while zero represents `false`. The result is undefined if mgp\_value does not contain the expected type.

### function mgp\_value\_get\_int

```cpp
int64_t mgp_value_get_int(
    const struct mgp_value * val
)
```

Return the contained integer.

The result is undefined if mgp\_value does not contain the expected type.

### function mgp\_value\_get\_double

```cpp
double mgp_value_get_double(
    const struct mgp_value * val
)
```

Return the contained double floating-point.

The result is undefined if mgp\_value does not contain the expected type.

### function mgp\_value\_get\_string

```cpp
const char * mgp_value_get_string(
    const struct mgp_value * val
)
```

Return the contained character string.

The result is undefined if mgp\_value does not contain the expected type.

### function mgp\_value\_get\_list

```cpp
const struct mgp_list * mgp_value_get_list(
    const struct mgp_value * val
)
```

Return the contained list of values.

The result is undefined if mgp\_value does not contain the expected type.

### function mgp\_value\_get\_map

```cpp
const struct mgp_map * mgp_value_get_map(
    const struct mgp_value * val
)
```

Return the contained map of values.

The result is undefined if mgp\_value does not contain the expected type.

### function mgp\_value\_get\_vertex

```cpp
const struct mgp_vertex * mgp_value_get_vertex(
    const struct mgp_value * val
)
```

Return the contained vertex.

The result is undefined if mgp\_value does not contain the expected type.

### function mgp\_value\_get\_edge

```cpp
const struct mgp_edge * mgp_value_get_edge(
    const struct mgp_value * val
)
```

Return the contained edge.

The result is undefined if mgp\_value does not contain the expected type.

### function mgp\_value\_get\_path

```cpp
const struct mgp_path * mgp_value_get_path(
    const struct mgp_value * val
)
```

Return the contained path.

The result is undefined if mgp\_value does not contain the expected type.

### function mgp\_list\_make\_empty

```cpp
struct mgp_list * mgp_list_make_empty(
    size_t capacity,
    struct mgp_memory * memory
)
```

Create an empty list with given capacity.

You need to free the created instance with mgp\_list\_destroy. The created list will have allocated enough memory for `capacity` elements of mgp\_value, but it will not contain any elements. Therefore, mgp\_list\_size will return 0. NULL is returned if unable to allocate a new list.

### function mgp\_list\_destroy

```cpp
void mgp_list_destroy(
    struct mgp_list * list
)
```

Free the memory used by the given mgp\_list and contained elements.

### function mgp\_list\_append

```cpp
int mgp_list_append(
    struct mgp_list * list,
    const struct mgp_value * val
)
```

Append a copy of mgp\_value to mgp\_list if capacity allows.

The list copies the given value and therefore does not take ownership of the original value. You still need to call mgp\_value\_destroy to free the original value. Return non-zero on success, or 0 if there's no capacity or memory to append the mgp\_value to mgp\_list.

### function mgp\_list\_append\_extend

```cpp
int mgp_list_append_extend(
    struct mgp_list * list,
    const struct mgp_value * val
)
```

Append a copy of mgp\_value to mgp\_list increasing capacity if needed.

The list copies the given value and therefore does not take ownership of the original value. You still need to call mgp\_value\_destroy to free the original value. In case of a capacity change, the previously contained elements will move in memory and any references to them will be invalid. Return non-zero on success, or 0 if there's no memory to append the mgp\_value to mgp\_list.

### function mgp\_list\_size

```cpp
size_t mgp_list_size(
    const struct mgp_list * list
)
```

Return the number of elements stored in mgp\_list.

### function mgp\_list\_capacity

```cpp
size_t mgp_list_capacity(
    const struct mgp_list * list
)
```

Return the total number of elements for which there's already allocated memory in mgp\_list.

### function mgp\_list\_at

```cpp
const struct mgp_value * mgp_list_at(
    const struct mgp_list * list,
    size_t index
)
```

Return the element in mgp\_list at given position.

NULL is returned if the index is not within mgp\_list\_size.

### function mgp\_map\_make\_empty

```cpp
struct mgp_map * mgp_map_make_empty(
    struct mgp_memory * memory
)
```

Create an empty map of character strings to mgp\_value instances.

You need to free the created instance with mgp\_map\_destroy. NULL is returned if unable to allocate a new map.

### function mgp\_map\_destroy

```cpp
void mgp_map_destroy(
    struct mgp_map * map
)
```

Free the memory used by the given mgp\_map and contained items.

### function mgp\_map\_insert

```cpp
int mgp_map_insert(
    struct mgp_map * map,
    const char * key,
    const struct mgp_value * value
)
```

Insert a new mapping from a NULL terminated character string to a value.

If a mapping with the same key already exists, it is _not_ replaced. In case of insertion, both the string and the value are copied into the map. Therefore, the map does not take ownership of the original key nor value, so you still need to free their memory explicitly. Return non-zero on success, or 0 if there's no memory to insert a new mapping or a previous mapping already exists.

### function mgp\_map\_size

```cpp
size_t mgp_map_size(
    const struct mgp_map * map
)
```

Return the number of items stored in mgp\_map.

### function mgp\_map\_at

```cpp
const struct mgp_value * mgp_map_at(
    const struct mgp_map * map,
    const char * key
)
```

Return the mapped mgp\_value to the given character string.

NULL is returned if no mapping exists.

### function mgp\_map\_item\_key

```cpp
const char * mgp_map_item_key(
    const struct mgp_map_item * item
)
```

Get the key of the mapped item.

### function mgp\_map\_item\_value

```cpp
const struct mgp_value * mgp_map_item_value(
    const struct mgp_map_item * item
)
```

Get the value of the mapped item.

### function mgp\_map\_iter\_items

```cpp
struct mgp_map_items_iterator * mgp_map_iter_items(
    const struct mgp_map * map,
    struct mgp_memory * memory
)
```

Start iterating over items contained in the given map.

The returned mgp\_map\_items\_iterator needs to be deallocated with mgp\_map\_items\_iterator\_destroy. NULL is returned if unable to allocate a new iterator.

### function mgp\_map\_items\_iterator\_destroy

```cpp
void mgp_map_items_iterator_destroy(
    struct mgp_map_items_iterator * it
)
```

Deallocate memory used by mgp\_map\_items\_iterator.

### function mgp\_map\_items\_iterator\_get

```cpp
const struct mgp_map_item * mgp_map_items_iterator_get(
    const struct mgp_map_items_iterator * it
)
```

Get the current item pointed to by the iterator.

When the mgp\_map\_items\_iterator\_next is invoked, the returned pointer to mgp\_map\_item becomes invalid. On the other hand, pointers obtained with mgp\_map\_item\_key and mgp\_map\_item\_value remain valid throughout the lifetime of a map. Therefore, you can store the key as well as the value before, and use them after invoking mgp\_map\_items\_iterator\_next. NULL is returned if the end of the iteration has been reached.

### function mgp\_map\_items\_iterator\_next

```cpp
const struct mgp_map_item * mgp_map_items_iterator_next(
    struct mgp_map_items_iterator * it
)
```

Advance the iterator to the next item stored in map and return it.

The previous pointer obtained through mgp\_map\_items\_iterator\_get will be invalidated, but the pointers to key and value will remain valid. NULL is returned if the end of the iteration has been reached.

### function mgp\_path\_make\_with\_start

```cpp
struct mgp_path * mgp_path_make_with_start(
    const struct mgp_vertex * vertex,
    struct mgp_memory * memory
)
```

Create a path with the copy of the given starting vertex.

You need to free the created instance with mgp\_path\_destroy. NULL is returned if unable to allocate a path.

### function mgp\_path\_copy

```cpp
struct mgp_path * mgp_path_copy(
    const struct mgp_path * path,
    struct mgp_memory * memory
)
```

Copy a mgp\_path.

Returned pointer must be freed with mgp\_path\_destroy. NULL is returned if unable to allocate a mgp\_path.

### function mgp\_path\_destroy

```cpp
void mgp_path_destroy(
    struct mgp_path * path
)
```

Free the memory used by the given mgp\_path and contained vertices and edges.

### function mgp\_path\_expand

```cpp
int mgp_path_expand(
    struct mgp_path * path,
    const struct mgp_edge * edge
)
```

Append an edge continuing from the last vertex on the path.

The edge is copied into the path. Therefore, the path does not take ownership of the original edge, so you still need to free the edge memory explicitly. The last vertex on the path will become the other endpoint of the given edge, as continued from the current last vertex. Return non-zero on success, or 0 if the current last vertex in the path is not part of the given edge. 0 is also returned if unable to allocate memory for path extension.

### function mgp\_path\_size

```cpp
size_t mgp_path_size(
    const struct mgp_path * path
)
```

Return the number of edges in a mgp\_path.

### function mgp\_path\_vertex\_at

```cpp
const struct mgp_vertex * mgp_path_vertex_at(
    const struct mgp_path * path,
    size_t index
)
```

Return the vertex from a path at given index.

The valid index range is \[0, mgp\_path\_size\]. NULL is returned if index is out of range.

### function mgp\_path\_edge\_at

```cpp
const struct mgp_edge * mgp_path_edge_at(
    const struct mgp_path * path,
    size_t index
)
```

Return the edge from a path at given index.

The valid index range is \[0, mgp\_path\_size - 1\]. NULL is returned if index is out of range.

### function mgp\_path\_equal

```cpp
int mgp_path_equal(
    const struct mgp_path * p1,
    const struct mgp_path * p2
)
```

Return non-zero if given paths are equal, otherwise 0.

### function mgp\_result\_set\_error\_msg

```cpp
int mgp_result_set_error_msg(
    struct mgp_result * res,
    const char * error_msg
)
```

Set the error as the result of the procedure.

If there's no memory for copying the error message, 0 is returned.

### function mgp\_result\_new\_record

```cpp
struct mgp_result_record * mgp_result_new_record(
    struct mgp_result * res
)
```

Create a new record for results.

The previously returned pointer to mgp\_result\_record is no longer valid, and you must not use it. Return NULL if unable to allocate a mgp\_result\_record.

### function mgp\_result\_record\_insert

```cpp
int mgp_result_record_insert(
    struct mgp_result_record * record,
    const char * field_name,
    const struct mgp_value * val
)
```

Assign a value to a field in the given record.

Return 0 if there's no memory to copy the mgp\_value to mgp\_result\_record or if the combination of `field_name` and `val` does not satisfy the procedure's result signature.

### function mgp\_properties\_iterator\_destroy

```cpp
void mgp_properties_iterator_destroy(
    struct mgp_properties_iterator * it
)
```

Free the memory used by a mgp\_properties\_iterator.

### function mgp\_properties\_iterator\_get

```cpp
const struct mgp_property * mgp_properties_iterator_get(
    const struct mgp_properties_iterator * it
)
```

Get the current property pointed to by the iterator.

When the mgp\_properties\_iterator\_next is invoked, the previous mgp\_property is invalidated and its value must not be used. NULL is returned if the end of the iteration has been reached.

### function mgp\_properties\_iterator\_next

```cpp
const struct mgp_property * mgp_properties_iterator_next(
    struct mgp_properties_iterator * it
)
```

Advance the iterator to the next property and return it.

The previous mgp\_property obtained through mgp\_properties\_iterator\_get will be invalidated, and you must not use its value. NULL is returned if the end of the iteration has been reached.

### function mgp\_edges\_iterator\_destroy

```cpp
void mgp_edges_iterator_destroy(
    struct mgp_edges_iterator * it
)
```

Free the memory used by a mgp\_edges\_iterator.

### function mgp\_vertex\_get\_id

```cpp
struct mgp_vertex_id mgp_vertex_get_id(
    const struct mgp_vertex * v
)
```

Get the ID of given vertex.

The ID is only valid for a single query execution, you should never store it globally in a query module.

### function mgp\_vertex\_copy

```cpp
struct mgp_vertex * mgp_vertex_copy(
    const struct mgp_vertex * v,
    struct mgp_memory * memory
)
```

Copy a mgp\_vertex.

Returned pointer must be freed with mgp\_vertex\_destroy. NULL is returned if unable to allocate a mgp\_vertex.

### function mgp\_vertex\_destroy

```cpp
void mgp_vertex_destroy(
    struct mgp_vertex * v
)
```

Free the memory used by a mgp\_vertex.

### function mgp\_vertex\_equal

```cpp
int mgp_vertex_equal(
    const struct mgp_vertex * v1,
    const struct mgp_vertex * v2
)
```

Return non-zero if given vertices are equal, otherwise 0.

### function mgp\_vertex\_labels\_count

```cpp
size_t mgp_vertex_labels_count(
    const struct mgp_vertex * v
)
```

Return the number of labels a given vertex has.

### function mgp\_vertex\_label\_at

```cpp
struct mgp_label mgp_vertex_label_at(
    const struct mgp_vertex * v,
    size_t index
)
```

Return mgp\_label in mgp\_vertex at given index.

If the index is out of bounds, mgp\_label.name is set to NULL.

### function mgp\_vertex\_has\_label

```cpp
int mgp_vertex_has_label(
    const struct mgp_vertex * v,
    struct mgp_label label
)
```

Return non-zero if the given vertex has the given label.

### function mgp\_vertex\_has\_label\_named

```cpp
int mgp_vertex_has_label_named(
    const struct mgp_vertex * v,
    const char * label_name
)
```

Return non-zero if the given vertex has a label with given name.

### function mgp\_vertex\_get\_property

```cpp
struct mgp_value * mgp_vertex_get_property(
    const struct mgp_vertex * v,
    const char * property_name,
    struct mgp_memory * memory
)
```

Get a copy of a vertex property mapped to a given name.

Returned value must be freed with mgp\_value\_destroy. NULL is returned if unable to allocate a mgp\_value.

### function mgp\_vertex\_iter\_properties

```cpp
struct mgp_properties_iterator * mgp_vertex_iter_properties(
    const struct mgp_vertex * v,
    struct mgp_memory * memory
)
```

Start iterating over properties stored in the given vertex.

The returned mgp\_properties\_iterator needs to be deallocated with mgp\_properties\_iterator\_destroy. NULL is returned if unable to allocate a new iterator.

### function mgp\_vertex\_iter\_in\_edges

```cpp
struct mgp_edges_iterator * mgp_vertex_iter_in_edges(
    const struct mgp_vertex * v,
    struct mgp_memory * memory
)
```

Start iterating over inbound edges of the given vertex.

The returned mgp\_edges\_iterator needs to be deallocated with mgp\_edges\_iterator\_destroy. NULL is returned if unable to allocate a new iterator.

### function mgp\_vertex\_iter\_out\_edges

```cpp
struct mgp_edges_iterator * mgp_vertex_iter_out_edges(
    const struct mgp_vertex * v,
    struct mgp_memory * memory
)
```

Start iterating over outbound edges of the given vertex.

The returned mgp\_edges\_iterator needs to be deallocated with mgp\_edges\_iterator\_destroy. NULL is returned if unable to allocate a new iterator.

### function mgp\_edges\_iterator\_get

```cpp
const struct mgp_edge * mgp_edges_iterator_get(
    const struct mgp_edges_iterator * it
)
```

Get the current edge pointed to by the iterator.

When the mgp\_edges\_iterator\_next is invoked, the previous mgp\_edge is invalidated and its value must not be used. NULL is returned if the end of the iteration has been reached.

### function mgp\_edges\_iterator\_next

```cpp
const struct mgp_edge * mgp_edges_iterator_next(
    struct mgp_edges_iterator * it
)
```

Advance the iterator to the next edge and return it.

The previous mgp\_edge obtained through mgp\_edges\_iterator\_get will be invalidated, and you must not use its value. NULL is returned if the end of the iteration has been reached.

### function mgp\_edge\_get\_id

```cpp
struct mgp_edge_id mgp_edge_get_id(
    const struct mgp_edge * e
)
```

Get the ID of given edge.

The ID is only valid for a single query execution, you should never store it globally in a query module.

### function mgp\_edge\_copy

```cpp
struct mgp_edge * mgp_edge_copy(
    const struct mgp_edge * e,
    struct mgp_memory * memory
)
```

Copy a mgp\_edge.

Returned pointer must be freed with mgp\_edge\_destroy. NULL is returned if unable to allocate a mgp\_edge.

### function mgp\_edge\_destroy

```cpp
void mgp_edge_destroy(
    struct mgp_edge * e
)
```

Free the memory used by a mgp\_edge.

### function mgp\_edge\_equal

```cpp
int mgp_edge_equal(
    const struct mgp_edge * e1,
    const struct mgp_edge * e2
)
```

Return non-zero if given edges are equal, otherwise 0.

### function mgp\_edge\_get\_type

```cpp
struct mgp_edge_type mgp_edge_get_type(
    const struct mgp_edge * e
)
```

Return the type of the given edge.

### function mgp\_edge\_get\_from

```cpp
const struct mgp_vertex * mgp_edge_get_from(
    const struct mgp_edge * e
)
```

Return the source vertex of the given edge.

### function mgp\_edge\_get\_to

```cpp
const struct mgp_vertex * mgp_edge_get_to(
    const struct mgp_edge * e
)
```

Return the destination vertex of the given edge.

### function mgp\_edge\_get\_property

```cpp
struct mgp_value * mgp_edge_get_property(
    const struct mgp_edge * e,
    const char * property_name,
    struct mgp_memory * memory
)
```

Get a copy of a edge property mapped to a given name.

Returned value must be freed with mgp\_value\_destroy. NULL is returned if unable to allocate a mgp\_value.

### function mgp\_edge\_iter\_properties

```cpp
struct mgp_properties_iterator * mgp_edge_iter_properties(
    const struct mgp_edge * e,
    struct mgp_memory * memory
)
```

Start iterating over properties stored in the given edge.

The returned mgp\_properties\_iterator needs to be deallocated with mgp\_properties\_iterator\_destroy. NULL is returned if unable to allocate a new iterator.

### function mgp\_graph\_get\_vertex\_by\_id

```cpp
struct mgp_vertex * mgp_graph_get_vertex_by_id(
    const struct mgp_graph * g,
    struct mgp_vertex_id id,
    struct mgp_memory * memory
)
```

Return the vertex corresponding to given ID.

The returned vertex must be freed using mgp\_vertex\_destroy. NULL is returned if unable to allocate the vertex or if ID is not valid.

### function mgp\_vertices\_iterator\_destroy

```cpp
void mgp_vertices_iterator_destroy(
    struct mgp_vertices_iterator * it
)
```

Free the memory used by a mgp\_vertices\_iterator.

### function mgp\_graph\_iter\_vertices

```cpp
struct mgp_vertices_iterator * mgp_graph_iter_vertices(
    const struct mgp_graph * g,
    struct mgp_memory * memory
)
```

Start iterating over vertices of the given graph.

The returned mgp\_vertices\_iterator needs to be deallocated with mgp\_vertices\_iterator\_destroy. NULL is returned if unable to allocate a new iterator.

### function mgp\_vertices\_iterator\_get

```cpp
const struct mgp_vertex * mgp_vertices_iterator_get(
    const struct mgp_vertices_iterator * it
)
```

Get the current vertex pointed to by the iterator.

When the mgp\_vertices\_iterator\_next is invoked, the previous mgp\_vertex is invalidated and its value must not be used. NULL is returned if the end of the iteration has been reached.

### function mgp\_vertices\_iterator\_next

```cpp
const struct mgp_vertex * mgp_vertices_iterator_next(
    struct mgp_vertices_iterator * it
)
```

Advance the iterator to the next vertex and return it.

The previous mgp\_vertex obtained through mgp\_vertices\_iterator\_get will be invalidated, and you must not use its value. NULL is returned if the end of the iteration has been reached.

### function mgp\_type\_any

```cpp
const struct mgp_type * mgp_type_any()
```

Get the type representing any value that isn't `null`.

The ANY type is the parent type of all types.

### function mgp\_type\_bool

```cpp
const struct mgp_type * mgp_type_bool()
```

Get the type representing boolean values.

### function mgp\_type\_string

```cpp
const struct mgp_type * mgp_type_string()
```

Get the type representing character string values.

### function mgp\_type\_int

```cpp
const struct mgp_type * mgp_type_int()
```

Get the type representing integer values.

### function mgp\_type\_float

```cpp
const struct mgp_type * mgp_type_float()
```

Get the type representing floating-point values.

### function mgp\_type\_number

```cpp
const struct mgp_type * mgp_type_number()
```

Get the type representing any number value.

This is the parent type for numeric types, i.e. INTEGER and FLOAT.

### function mgp\_type\_map

```cpp
const struct mgp_type * mgp_type_map()
```

Get the type representing map values.

**See**:

* [mgp\_type\_node](c-api.md#function-mgp_type_node)
* [mgp\_type\_relationship](c-api.md#function-mgp_type_relationship)

Map values are those which map string keys to values of any type. For example `{ database: "Memgraph", version: 1.42 }`. Note that graph nodes contain property maps, so a node value will also satisfy the MAP type. The same applies for graph relationship values.

### function mgp\_type\_node

```cpp
const struct mgp_type * mgp_type_node()
```

Get the type representing graph node values.

Since a node contains a map of properties, the node itself is also of MAP type.

### function mgp\_type\_relationship

```cpp
const struct mgp_type * mgp_type_relationship()
```

Get the type representing graph relationship values.

Since a relationship contains a map of properties, the relationship itself is also of MAP type.

### function mgp\_type\_path

```cpp
const struct mgp_type * mgp_type_path()
```

Get the type representing a graph path \(walk\) from one node to another.

### function mgp\_type\_list

```cpp
const struct mgp_type * mgp_type_list(
    const struct mgp_type * element_type
)
```

Build a type representing a list of values of given `element_type`.

NULL is returned if unable to allocate the new type.

### function mgp\_type\_nullable

```cpp
const struct mgp_type * mgp_type_nullable(
    const struct mgp_type * type
)
```

Build a type representing either a `null` value or a value of given `type`.

NULL is returned if unable to allocate the new type.

### function mgp\_module\_add\_read\_procedure

```cpp
struct mgp_proc * mgp_module_add_read_procedure(
    struct mgp_module * module,
    const char * name,
    mgp_proc_cb cb
)
```

Register a read-only procedure with a module.

The `name` must be a sequence of digits, underscores, lowercase and uppercase Latin letters. The name must begin with a non-digit character. Note that Unicode characters are not allowed. Additionally, names are case-sensitive.

NULL is returned if unable to allocate memory for mgp\_proc; if `name` is not valid or a procedure with the same name was already registered.

### function mgp\_proc\_add\_arg

```cpp
int mgp_proc_add_arg(
    struct mgp_proc * proc,
    const char * name,
    const struct mgp_type * type
)
```

Add a required argument to a procedure.

The order of adding arguments will correspond to the order the procedure must receive them through openCypher. Required arguments will be followed by optional arguments.

The `name` must be a valid identifier, following the same rules as the procedure`name` in mgp\_module\_add\_read\_procedure.

Passed in `type` describes what kind of values can be used as the argument.

0 is returned if unable to allocate memory for an argument; if invoking this function after setting an optional argument or if `name` is not valid. Non-zero is returned on success.

### function mgp\_proc\_add\_opt\_arg

```cpp
int mgp_proc_add_opt_arg(
    struct mgp_proc * proc,
    const char * name,
    const struct mgp_type * type,
    const struct mgp_value * default_value
)
```

Add an optional argument with a default value to a procedure.

The order of adding arguments will correspond to the order the procedure must receive them through openCypher. Optional arguments must follow the required arguments.

The `name` must be a valid identifier, following the same rules as the procedure `name` in mgp\_module\_add\_read\_procedure.

Passed in `type` describes what kind of values can be used as the argument.

`default_value` is copied and set as the default value for the argument. Don't forget to call mgp\_value\_destroy when you are done using `default_value`. When the procedure is called, if this argument is not provided, `default_value` will be used instead. `default_value` must not be a graph element \(node, relationship, path\) and it must satisfy the given `type`.

0 is returned if unable to allocate memory for an argument; if `name` is not valid or `default_value` does not satisfy `type`. Non-zero is returned on success.

### function mgp\_proc\_add\_result

```cpp
int mgp_proc_add_result(
    struct mgp_proc * proc,
    const char * name,
    const struct mgp_type * type
)
```

Add a result field to a procedure.

The `name` must be a valid identifier, following the same rules as the procedure `name` in mgp\_module\_add\_read\_procedure.

Passed in `type` describes what kind of values can be returned through the result field.

0 is returned if unable to allocate memory for a result field; if `name` is not valid or if a result field with the same name was already added. Non-zero is returned on success.

### function mgp\_proc\_add\_deprecated\_result

```cpp
int mgp_proc_add_deprecated_result(
    struct mgp_proc * proc,
    const char * name,
    const struct mgp_type * type
)
```

Add a result field to a procedure and mark it as deprecated.

This is the same as mgp\_proc\_add\_result, but the result field will be marked as deprecated.

### function mgp\_must\_abort

```cpp
int mgp_must_abort(
    const struct mgp_graph * graph
)
```

Return non-zero if the currently executing procedure should abort as soon as possible.

Procedures which perform heavyweight processing run the risk of running too long and going over the query execution time limit. To prevent this, such procedures should periodically call this function at critical points in their code in order to determine whether they should abort or not. Note that this mechanism is purely cooperative and depends on the procedure doing the checking and aborting on its own.

