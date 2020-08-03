// Create controller for GET request to '/api'
exports.homeGet = async (req, res) => {
    const message = await res.send('Welcome back commander.');
    return message;
}
