let Entry = require('../models/entry');

const create = async (req, res) => {
    req.body.user = req.user._id
    try {
        await Entry.create(req.body)
        console.log('Entry Added')
    } catch (err) {
        res.json({err})
    }
}

module.exports = {
    create,
}