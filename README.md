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


# DEPLOY 
## npm build
