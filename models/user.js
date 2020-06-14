const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 6

const userSchema = new Schema(
  {
    name: String, 
    email: {
      type: String, 
      required: true, 
      unique: true, 
      lowercase: true,
    },
    password: { 
      type: String, 
      required: true 
    } 
  }, {
    timestamps: true
  }
);

userSchema.set("toJSON", { 
  transform: (doc, ret) => {
    delete ret.password;
    return ret;
  }, 
});

userSchema.pre("save", (next) => {
  const user = this;
  if (!user.isModified("password")) return next();
  bcrypt.hash(user.password, SALT_ROUNDS, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = (tryPassword, cb) => {
  bcrypt.compare(tryPassword, this.password, cb);
}

module.exports = mongoose.model('User', userSchema);