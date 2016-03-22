"use strict";

const Memcached = require("memcached"),
    Q = require("q");

let client = new Memcached("127.0.0.1:11211");

module.exports = {

    /**
     * Достает из memcached данные по указанному ключу
     *
     * @example curl -v -X GET "http://127.0.0.1:8081/memcached/bar"
     * @param next
     */
    getAction: function * (next){
        //this.body = yield Q.npost(client, "get", [this.params.key]);
        let getKey = function(key) {
            return function (cb) {
                client.get(key, cb);
            }
        };
       this.body = yield getKey(this.params.key);
    },
    /**
     * @todo Описать метод PUT /memcached/:key {"value":"baz","expires":90}, чтобы он менял данные в memcached по указанному ключу
     * @example curl -v -X PUT "http://127.0.0.1:8081/memcached/bar" -d '{"value":"baz","expires":90}' -H "Content-Type: application/json"
     * @param next
     */
    putAction: function * (next){
        let putVal = function(key, value, exp){
            return function(cb) {
                console.log(key); //+ value + exp)
                client.replace(key, value, exp, cb);
            }
        };
        this.body = yield putVal(this.params.key,this.request.body.value, this.request.body.expires);
        yield next;

    },

    /**
     * Устанаваливает значение заданному ключу
     *
     * @example curl -v -X POST "http://127.0.0.1:8081/memcached" -d '{"key":"bar","value":"foo","expires":60}' -H "Content-Type: application/json"
     * @param next
     */
    postAction: function * (next){
      /*
        try{
            yield Q.npost(client, "set", [this.request.body.key, this.request.body.value, this.request.body.expires]);
            this.status = 201;
            this.body = this.request.body;
        }catch(e){
            this.status = 400;
            this.body = {message: "Bad Request"};
        }

        yield next;

*/
       // 2 variant
            let setVal = function (key, val, exp) {
                return function (cb) {
                    client.set(key, val, exp, cb);
                }
            };
            this.body = yield setVal(this.request.body.key, this.request.body.value, this.request.body.expires)
            yield next;
    },

    /**
     *
     * @todo Описать метод DELETE /memcached/:key который удалял бы по ключу из memcached. Использовать другие методы преобразования функций для работы с memcached
     * @param next
     */
    deleteAction: function * (next){

        let delKey = function(key) {
            return function (cb) {
                client.del(key, cb);
            }
        };
        this.body = yield delKey(this.params.key);

    }
};