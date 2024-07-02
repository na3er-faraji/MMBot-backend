const mapLoginData = async (user) => {
    return {
        username: user.username,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname
    }
};

module.exports = {
    mapLoginData
}
