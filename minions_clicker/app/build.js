({
    baseUrl: "./",
    appDir: "./js",
    dir: "./build",
    paths: {
        jquery: "../lib/jquery/dist/jquery.min",
    },
    wrapShim: true,
    mainConfigFile: 'js/app.js',
    modules: [
        {
            name: "./main",
            exclude: ["jquery"]
        }
    ]
})