(function() {
    
    requirejs.config({
    paths: {
        main: "main",
        utils: "utils",
        jquery: '../lib/jquery/dist/jquery.min'
        
    },
	        "shim": {
            "lib/jquery/dist/jquery.min": {
                "exports": "$"
            }
        }
});
    define(['jquery', "main"]);
    
    
}
)();

