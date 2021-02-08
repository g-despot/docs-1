# Uniqueness constraint

Uniqueness constraint enforces that each `label, property_set` pair is unique. This constraint can be enforced using the following language construct:

```text
CREATE CONSTRAINT ON (n:label) ASSERT n.property1, n.property2, ..., IS UNIQUE;
```

For example, suppose you are keeping track of basic employee info in your database. Obviously, each employee should have a unique e-mail address. You can enforce this by issuing the following query:

```text
CREATE CONSTRAINT ON (n:Employee) ASSERT n.email IS UNIQUE;
```

You can confirm that your constraint was successfully created by issuing the following query:

```text
SHOW CONSTRAINT INFO;
```

You should get a result similar to this:

```text
+-----------------+-----------------+-----------------+
| constraint type | label           | properties      |
+-----------------+-----------------+-----------------+
| unique          | Employee        | email           |
+-----------------+-----------------+-----------------+
```

Trying to modify the database in a way that violates the constraint will yield an error `Unable to commit due to unique constraint violation on :Employee(email)`.

Naturally, you can also specify multiple properties when creating uniqueness constraints. For example, we might want to enforce that all employees have a unique `(name, surname)` pair \(obviously, this would be a bad decision in real life\). This can be achieved by the following query:

```text
CREATE CONSTRAINT ON (n:Employee) ASSERT n.name, n.surname IS UNIQUE;
```

At this point, `SHOW CONSTRAINT INFO;` yields the following result:

```text
+-----------------+-----------------+-----------------+
| constraint type | label           | properties      |
+-----------------+-----------------+-----------------+
| unique          | Employee        | email           |
| unique          | Employee        | name, surname   |
+-----------------+-----------------+-----------------+
```

Constraints can also be dropped using the `DROP` keyword. For example, dropping the previously created constraints can be done by the following query:

```text
DROP CONSTRAINT ON (n:Employee) ASSERT n.email IS UNIQUE;
DROP CONSTRAINT ON (n:Employee) ASSERT n.name, n.surname IS UNIQUE;
```

Now, `SHOW CONSTRAINT INFO;` yields an empty set.

## Where to next?

To learn more about Memgraph's functionalities, visit the [**Reference guide**](../../reference-guide/). For real-world examples of how to use Memgraph, we strongly suggest going through one of the available [**Tutorials**](https://github.com/memgraph/docs/tree/330f0c5baa48ee0ece2ed2b8a4bad2752666aba1/products/memgraph/v1.3.0/database_functionalities/tutorials/tutorials.md).

