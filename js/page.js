$(function(){

	// $( "#slider-range" ).slider({
 //      range: true,
 //      min: 0,
 //      max: 500,
 //      values: [ 75, 300 ],
 //      slide: function( event, ui ) {
 //        $( "#amount" ).val( "" + ui.values[ 0 ] + "---" + ui.values[ 1 ] );
 //      }
 //    });

 //    $( "#amount" ).val( "" + $( "#slider-range" ).slider( "values", 0 ) +
 //      "---" + $( "#slider-range" ).slider( "values", 1 ) );


    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 1000,
        grid: true
    });

});