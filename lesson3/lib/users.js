/**
 * Created by sav on 16.03.16.
 */
var userdata = [
        {
            nick: "petrovich",
            name: "Микола",
            'e-mail': "mp@gmail.com",
            description: "тестер",
            age: 33
        }
];
var statusCode= 200;


var userAdd = function(userobj){
    if (userobj.nick === '' || userobj.name === ''){
        statusCode = 400;
        return;
    }
    else if(userobj.age > 120){
        // Значення віку - https://goo.gl/qj6ETZ
        statusCode = 400;
        return;
    }

    else{
       var newuser = true;
       for(var obj in userdata){

           //console.log(userobj['e-mail']);
           if (userdata[obj].nick === userobj.nick){
               userdata[obj] = userobj;
               console.log('data update');
               newuser = false;
               break;

           }
       }
       if (newuser) {
           userdata.push(userobj);
       }

    }
    return ;

}

module.exports.statusCode = statusCode;
module.exports.userdata = userdata;
module.exports.userAdd = userAdd;