# Mongodb Readme

## Initialization

```
init-mongo.js
```


```
db.createUser(
  {
    user: "tony",
    pwd: passwordPrompt(),
    roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
  }
)
```