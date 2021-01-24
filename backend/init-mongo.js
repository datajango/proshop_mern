db.createUser(
    {
        user: "guest",
        pwd: "guest",
        roles: [
            {
                role: "read",
                db: "pocdb"
            }
        ]
    },
    {
        user: "manager",
        pwd: "manager",
        roles: [
            {
                role: "readWrite",
                db: "pocdb"
            }
        ]
    },
    {
        user: "employee",
        pwd: "employee",
        roles: [
            {
                role: "readWrite",
                db: "pocdb"
            }
        ]
    },
);