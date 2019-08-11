var userid= 'ram';
var password = '1234';
const User = require('./models/user');
const userObject = new User(userid, password);
const userOperations = require("./helpers/useroperations");
let msg = userOperations.add(userObject);
console.log(msg);
// Search
const userObj = new User('ram','fgsdjfhg');
msg = userOperations.search(userObj);
console.log(msg);


