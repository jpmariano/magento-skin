/*
This file should contain any js scripts you want to add to the site.
You can add it in the Genesis admin too, but sometimes that can
get a bit jumbled and it's tough once you have a lot going on.
Use this file to better manage your scripts.
*/

// as the page loads, call these scripts
jQuery(document).ready(function($) {
    


$(".checkout-onepage-index .col-main input[type=text]").each(function() {
var title = $(this).attr("title");
$(this).attr("placeholder", title);
});

$(".checkout-onepage-index input[type=email]").each(function() {
var title = $(this).attr("title");
$(this).attr("placeholder", title);
});


$ ('.main-container.col1-layout tbody tr:even').addClass('odd');
$ ('.main-container.col1-layout tbody tr:odd').addClass('even');

/*$('.mini-cart-top .block-cart-header a').hover(function(e){ $('body').addClass('button-hover-overlay'); }, function(e){ $('body').removeClass('button-hover-overlay'); });*/

$( "body" ).append( "<div id='fade' style='display: none;'></div>" );
/*
$('#cartview').observe('mouseover', function(e) {  $('#cartview-panel').show();} ); 
$('#cartview').observe('mouseout', function(e) {  $('#cartview-panel').hide();} ); 
*/
/*
  $("#cartview").on({
    mouseenter: function(){
        // Trigger #tag hover to stop flickering
        $('#fade').mouseenter();
    }

    mouseleave: function(){
        // Trigger #tag mouseleave
        $('#fade').mouseleave();
    }
    });
*/
/*$('div#cartview, div#cartview-link, div#cartview-link span, div#cartview-link span a ').hover(function(e){ $('#fade').css('display', 'block');  }, function(e){ $('#fade').css('display', 'none');  } );*/

}); /* end of as page load scripts */

