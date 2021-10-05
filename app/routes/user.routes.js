module.exports = app => {
    const users = require('../controller/user.controller')

    var router = require('express').Router()

    //saving data to database
    router.post("/saveUser", users.create)

    // fetch data from database and return to client
    router.get("/getAllUsers", users.findAll)

    //fetch single user based on id
    router.get("/getSingleUser/:id", users.findOne)

    //fetch single user based on name
    router.get("/getSingleUserPhone/:phone", users.findphone)

    //update user
    router.put("/updateUser/:id", users.update)

    //update user
    router.delete("/deleteUser/:id", users.delete)

    app.use("/api", router)
}