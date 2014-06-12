/// <reference path="vendor/require/require.d.ts" />

require.config({
    paths: {
    },
	
	shim: {
	'underscore': {
	  exports: '_'
	},
	'bootstrap': {
	  deps: ['jquery'],
	  exports: "$.fn.popover"
	},
	'backbone': {
	  deps: ['underscore', 'jquery', 'bootstrap'],
	  exports: 'Backbone'
	}
	}

});

require(["app"], function(App){
	//App.initialize();
});
