const User = require('../models/User')


const signup = (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields'})
    }

    User.findOne( {email} )
        .then(user => {
          if(user) return res.status(400).json({ msg: 'A user with that email already exists'});

          const newUser = new User({
            name,
            email,
            password
          });
    })
};

module.exports = { 
    signup,
  };