var orm = require("../config/orm.js");

var users = {
    CreateNewUser: function (cols, vals, cb){
        orm.CreateNewUser('users', 'acct_name', 'secret_word','userone_name','usertwo_name', cols,vals, function(res){
            
            cb(res);

        });
    }
}


module.exports = users;