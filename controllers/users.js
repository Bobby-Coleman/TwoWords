const User = require('../models/User')
const bcrypt = require('bcryptjs');

const signup = (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields'})
    }
    // Check for existing user email
    User.findOne( {email} )
        .then(user => {
          if(user) return res.status(400).json({ msg: 'A user with that email already exists'});

          const newUser = new User({
            name,
            email,
            password
          });
          // Create salt and hash password
          bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if(err) throw err;
                  newUser.password = hash;
                  newUser.save()
                    .then(user => {
                        res.json({
                          user: {
                            id: user.id,
                            name: user.name,
                            email: user.email
                          }
                      })
                  })
              })
         })
    })
};

module.exports = { 
    signup,
  };