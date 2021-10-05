module.exports = mongoose => {
    var schema = mongoose.Schema({
        firstName: String,
        email: String,
        phone: Number,
    },
    )

    const User = mongoose.model("users", schema)
    return User
}