const db = require('../models');

const User = db.users;

exports.create = (req, res) => {
    let { firstName, email, phone } = req.body

    const user = new User({
        firstName: firstName,
        email: email,
        phone: phone,
    },
    )

    //saving data to database
    user.save(user)
        .then(data => (
            res.send(data)
        ))
}


// fetch all user data from db
exports.findAll = (req, res) => {
    //All record/documents
    User.find()
        .then((data) => {
            res.send(data)
        })
}

exports.findOne = (req, res) => {

    const id = req.params.id
    User.findById(id)
        .then((data) => {
            res.send(data)
        })
}

exports.findphone = (req, res) => {

    const phone = req.params.phone
    const condition = { "phone": phone }
    User.find(condition)
        .then((data) => {
            res.send(data)
        })
}


// updating record

exports.update = (req, res) => {
    const id = req.params.id;

    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            res.send({ message: "User updated successfully!!!" })
        })
}

//delete record
exports.delete = (req, res) => {
    const id = req.params.id;
    const con = { "_id": id }
    User.findByIdAndDelete(con)
        .then(data => {
            res.send({ message: "User delete successfully!!!" })
        })
}


