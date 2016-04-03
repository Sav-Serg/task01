(function() {
    
    requirejs.config({
    paths: {
        main: "main",
        utils: "utils",
        jquery: '/lib/jquery/dist/jquery.min'
        
    }
});
    define(['jquery', "main"]);
    
    
}
)();

/*


(function() {

    require.config({
        baseUrl: 'js',
        paths: {
            main: "modules/main",
            sorting: "modules/sorting",
            dataloading : "modules/dataloadng",
            searching: "modules/searching",
            counterclear: "modules/counterclear",
            jquery: "lib/jquery/dist/jquery.min"
        },

        "shim": {
            "lib/jquery/dist/jquery.min": {
                "exports": "$"
            }
        }
    });

    //define(['jquery'], function(){
        define(['jquery', "main"]);
    //});

})();


;
define("app", ['jquery'], function ($) {
    
    var dataAPI = "data/minions.json";
    $.getJSON(dataAPI)
        .done(function (data) {
            for (var key in data) {
                if (localStorage.getItem(data[key].id)) {
                    var $span = $('<span>').addClass("counter").text(localStorage.getItem(data[key].id))
                } else {
                    var $span = $('<span>').addClass("counter").text('0')
                }
                var $image = $('<img>').attr('src', data[key].image);
                var $li = $('<li>').addClass("item");
                $li.attr('onclick', "increase(this.querySelector('span')," + data[key].id + ")")
                $li.append($image).append($span);
                $("ul").append($li);
            }
        })
        .fail(function () {
            console.log("error");
        })
    
});
*/