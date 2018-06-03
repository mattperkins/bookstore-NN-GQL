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

# Example Mutations
```
mutation{
  addAuthor(name: "Sandy", age:27){
    name
    age
  }
}
```

```
mutation{
  addBook(title: "The Bible", genre:"History", authorId:"5b133b64998cc502f8905a6e"){
    title
    genre
  }
}
```


# DEPLOY 
## npm build
