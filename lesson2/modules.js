/**
 * Created by sav on 15.03.16.
 */
"use strict";
const url = require("url");
var count = 0;
var anl = function(path){
    var resData = {
        statusCode: 200,
        contentType : "text/html; charset=utf-8",
        message : ""
    };
    switch(path){
        case "/index.html":
            count++;
            resData.message = "Привіт світ!";
            break;
        case "/count.html":
            resData.message = "Кількість запитів до сторінки index.html - " + count;
            break;
        default:
            resData.statusCode = 404;
            resData.message = "Page not found!";
            break;
    };
    return resData;
};

module.exports = function handler (req, res, next) {
    var resData = anl(url.parse(req.url).pathname);
    res.setHeader('Content-Type',resData.contentType);
    res.statusCode = resData.statusCode;
    res.end(resData.message);
};