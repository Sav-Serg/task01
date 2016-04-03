define(['jquery'], function () {
    var dataAPI = "data/minions.json";
    $.getJSON(dataAPI)
        .done(function (data) {
            var localStorData = {};
            if (localStorage['counters']) {
                localStorData = JSON.parse(localStorage.getItem('counters'));
            }
            for (var key in data) {
                if (localStorData[data[key].id]) {
                    var $span = $('<span></span>').addClass("counter").html(localStorData[data[key].id]);
                } else {
                    var $span = $('<span></span>').addClass("counter").html("0");
                }
                var $image = $('<img>').attr('src', data[key].image);
                var $li = $('<li></li>').attr('id', data[key].id).addClass("item").append($image).append($span);
                $li.on('click', {
                    id: data[key].id,
                    el: $span
                }, function (event) {
                    var localStorData = {};
                    if (localStorage['counters']) {
                        localStorData = JSON.parse(localStorage['counters']);
                    }
                    if (localStorData[event.data.id]) {
                        localStorData[event.data.id] = Number(event.data.el[0].innerHTML) + 1;
                    } else {
                        localStorData[event.data.id] = 1;
                    }
                    localStorage.setItem("counters", JSON.stringify(localStorData));
                    event.data.el[0].innerHTML = localStorData[event.data.id];
                })
                $("ul").append($li);
            }
        })
        .fail(function () {
            console.log("error");
        })
});