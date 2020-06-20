let Entry = require('../models/entry');

const create = async (req, res) => {
    req.body.user = req.user._id
    try {
        await Entry.create(req.body)
        index(req, res)
    } catch (err) {
        res.json({err})
    }
}


const index = async (req, res) => {
    req.body.user = req.user._id
    const entries = await Entry.find({user: req.user._id})
    res.status(200).json(entries);
}

const deleteOne = async (req, res) => {
    try{
        const deletedEntry = await Entry.findByIdAndRemove(req.params.id)
        res.status(200).json(deletedEntry)
    }
    catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    create,
    index,
    deleteOne,
}