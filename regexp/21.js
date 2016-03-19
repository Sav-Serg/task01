var addresses = require('./addresses');
var result = [];

// ... some good code ...
var str;
for (var obj in addresses) {
    var address= {
        street :null,
        house : null,
        flat : null
    };
    str = addresses[obj];
    str = str.replace(/^\s|\.|\,|ул|пр-т|пер|пл|дом|кв/g, '');
    str = str.replace(/^\s+/, '');
    if (/\d+.[а-я]+\s[а-я]+|[а-я]+.[а-я]+|\d+.[а-я]+|[а-я]+/ig.test(str)) {
        // вулиця
        address.street = /\d+.[а-я]+\s[а-я]+|[а-я]+.[а-я]+|\d+.[а-я]+|[а-я]+/ig.exec(str)[0];
        str = str.substr(address.street.length);
        str = str.replace(/^\s+/, '');
        if (str.length > 0) {
            if (/(\d+.[а-я])|(\d+[а-я])|\d+/i.test(str)) {
                // будинок
                address.house = /(\d+.[а-я])|(\d+[а-я])|\d+/i.exec(str)[0];
                str = str.substr(address.house.length);
                if (str.length > 0) {
                    if (/\d+/.test(str)) {
                        // квартира
                        address.flat = /\d+/.exec(str)[0];
                    }
                }
            }
        }
    }
    result.push(address);
}

// Думаю, що в завданні малось на увазі отримати масив даних в форматі JSON. Якщо я помилився, то наступна строка зайва
result = JSON.stringify(result);
/*
приклад структури масиву result
>>> result
[
  ...
  {
    "street": 'Юности', //string
    "house": '25',      //string
    "flat": '6'         //string
  }
 ...
]
*/
module.exports = result;