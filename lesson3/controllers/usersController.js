/**
 * Created by sav on 16.03.16.
 */
"use strict";

var users = require("../lib/users");

module.exports = {
    getUsers: function(request, response, next){
        /* next(null) */
        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json; charset=UTF-8");
        response.write(JSON.stringify(users.userdata));
        next();
    },
    addUser: function(request, response, next){
        //var jsonObject = JSON.parse(request);
        //console.log(jsonObject);
        var body = "";
        request.on('data', function (chunk) {
            body += chunk;
        });
        request.on('end', function () {
            //console.log('body: ' + body);
            var jsonObj = JSON.parse(body);
            //console.log(jsonObj);
            users.userAdd(jsonObj);
        });
        //{"nick": "boss","name": "Petya","e-mail": "pet@gmail.com","description": "commander","age": 32}
        //next(400);

        if (users.statusCode === 400){
            next(400);
        }
        else{
            next();
        }
    }
};