$( document ).ready(function() {
    $( "a" ).click(function( event ) {
        alert( "The link will no longer take you to jquery.com" );
        event.preventDefault();
    });

    $("body#buttonLocation").click(function() {
		$("<em>", {html: "no data yet..."}).appendTo("body");

		// $("body").next("div").next("div").html("<p>" + "No data yet..." + "<?p>");
	});

});

$( "a" ).addClass("test");
$("a").removeClass("test");

$( "a" ).click(function( event ) {
 
    event.preventDefault();
 
    $( this ).hide( "slow" );
});

$.get( "myhtmlpage.html", function() {
 
    myCallBack( param1, param2 );
 
});





