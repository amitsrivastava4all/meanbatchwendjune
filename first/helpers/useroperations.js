// CRUD Logic
const userOperations = {
    add(userObject){
        const store = require('../db/store');
        store.userArr.push(userObject);
        console.log(store.userArr);
        return "Record Added ";

    },
    search(userObject){
        const store = require('../db/store');
        return store.userArr.find(obj=>obj.userid==userObject.userid && obj.password==userObject.password)?"Welcome "+userObject.userid:"Invalid Userid or Password";
    }
}
module.exports = userOperations;