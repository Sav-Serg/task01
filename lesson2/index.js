/**
 * Created by sav on 15.03.16.
 */
"use strict";

const  http = require("http"),
       handler = require("./modules");

let server = http.createServer(handler).listen(3000);