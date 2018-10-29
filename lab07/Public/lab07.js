$( document ).ready(function() {

	var dataHolder;

    $( "#getDataButton" ).click(function( event ) {

    	$.ajax({
    		url: "/hello",
    		data: {
    			name: "lab07"
    		},
    		type: "GET",
    		dataType: "json",
    	})
    	.done(function ( json ) {
    		if (dataHolder == null) {
	        	$("<em>Hello Lab07!</em>").appendTo("body");
	        }
	        dataHolder = $( "em" )[0];
	        dataHolder.innerHTML = json.data;
    	})
    	.fail(function ( xhr, status, errorThrown ) {
    		if (dataHolder == null) {
	        	$("<em>An error occurred!</em>").appendTo("body");
	        }
	        dataHolder = $( "em" )[0];
	        dataHolder.innerHTML = "An error occurred!";
    	})

    });

});