const app = require('express')();
const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('db');

const userSchema = new Schema({
  name: {
    type: String
  }
})

const User = mongoose.model('user', userSchema);

app.get('/', (req, res, next) => {
  const newUser = new User({name: 'Jonatan' + new Date()});
  newUser.save()
    .then(u => User.find({}))
    .then(users => res.json(users));
});

app.listen(3000, () => console.log('Listening on port 3000'));
