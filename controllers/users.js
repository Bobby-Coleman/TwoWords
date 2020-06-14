const User = require('../models/User')

const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;




// const signup = (req, res) => {
//     const { name, email, password } = req.body;

//     if(!name || !email || !password) {
//         return res.status(400).json({ msg: 'Please enter all fields'})
//     }
//     // Check for existing user email
//     User.findOne( {email} )
//         .then(user => {
//           if(user) return res.status(400).json({ msg: 'A user with that email already exists'});

//           const newUser = new User({
//             name,
//             email,
//             password
//           });
//           // Create salt and hash password
//           bcrypt.genSalt(10, (err, salt) => {
//               bcrypt.hash(newUser.password, salt, (err, hash) => {
//                   if(err) throw err;
//                   newUser.password = hash;
//                   newUser.save()
//                     .then(user => {
//                         const token = createJWT(user)
//                           res.json({
//                             token,
//                             user: {
//                               id: user.id,
//                               name: user.name,
//                               email: user.email
//                             }
//                         })
//                         }
//                       )
//                   })
//               })
//          })
// };

const signup = async (req, res) => {
  const user = new User(req.body)
  try {
      await user.save()
      const token = createJWT(user)
      res.json({ token })
  } catch (err) {
      res.status(400).json(err)
  }
}


const login = async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}


const createJWT = (user) => { 
  return jwt.sign(
    { user }, 
    SECRET,
    { expiresIn: "24h" }
    );
}

module.exports = { 
    signup,
    login,
};