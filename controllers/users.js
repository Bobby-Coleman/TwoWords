const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;




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
                        const token = createJWT(user)
                          res.json({
                            token,
                            user: {
                              id: user.id,
                              name: user.name,
                              email: user.email
                            }
                        })
                        }
                      )
                  })
              })
         })
};

const login = (req, res) => {
  const { email, password } = req.body
  // Simple validation
  if( !email || !password) {
    return res.status(400).json( { msg: 'Please enter all fields'} );
  }

  // Check for existing user
  User.findOne( {email} )
        .then(user => {
          if(!user) return res.status(400).json({ msg: 'Sorry, that user does not exist'});
        
          // Validate password
          bcrypt.compare(password, user.password)
          .then(isMatch => {
            if(!isMatch) return res.status(400).json({ msg: 'That password does not match'})
            const token = createJWT(user)
            res.json({
              token,
              user: {
                id: user.id,
                name: user.name,
                email: user.email
              }
         })
     })    
  })
}

const createJWT = (user) => { 
  return jwt.sign(
    { user }, 
    SECRET,
    { expiresIn: "24h" }
    );
}
  
const user = (req, res) => {
    console.log(req.user.id)
    User.findById(req.user.id)
    .select('-password')
    .then( user => res.json(user))
};


module.exports = { 
    signup,
    login,
    user,
};