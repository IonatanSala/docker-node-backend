const app = require('express')();
const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
// mongoose.connect('db');
//
// const userSchema = new Schema({
//   name: {
//     type: String
//   }
// })
//
// const User = mongoose.model('user', userSchema);

app.get('/', (req, res, next) => {
  // const newUser = new User({name: 'Jonatan' + new Date()});
  // newUser.save()
  //   .then(u => User.find({}))
  //   .then(users => res.json(users));
  res.json({
    s: 'e'
  });
});

app.listen(process.env.PORT, () => console.log('Listening on port' + process.env.PORT));
