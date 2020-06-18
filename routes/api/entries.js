const express = require('express')
const router = express.Router()
const entriesCtrl = require('../../controllers/entries')

const checkAuth = (req, res, next) => {
    if (req.user) return next()
    return res.status(401).json({ msg: 'Not Authorized' })
}


router.get('/', entriesCtrl.index);

// protected routes //

router.use(require('../../middleware/auth'))

router.post('/', checkAuth, entriesCtrl.create)

module.exports = router