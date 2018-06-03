# INSTALL 
## yarn 

# RUN SERVER 
## yarn start 
# ENDPOINTS 
## localhost: 4000/graphql 

# Example query shape
```
{
  book(id:1){
    id,
    title,
    genre,
    author{
      id,
      age,
      name
    }
  }
}
```

```
{
  authors{
    name
    books{
      title
    }
  }
}
```

```
{
  books{
    title
    author{
      age
    }
  }
}
```

# Example Mutation
```
mutation{
  addAuthor(name: "Sandy", age:27){
    name
    age
  }
}
```

# DEPLOY 
## npm build
