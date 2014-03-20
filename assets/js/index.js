$(document).ready(function(){

var $container = $('#post-container');
// initialize
$container.masonry({
  gutter: 0,
  itemSelector: '.post'
});

$(".arrow-up").click(function() {
    $(".arrow-up-red", this).fadeIn().delay(200).fadeOut();
});
$(".arrow-up").click(function() {
    modify_qty(1);
});

$(".arrow-down").click(function() {
    $(".arrow-down-red", this).fadeIn().delay(200).fadeOut();
});
$(".arrow-down").click(function() {
	// var id;
// 	var par = this.parentNode;
// 	var elements = document.getElementsByName( 'qty' );
// 	for (var e in elements) 
// 	{
// 		if (e.parentNode === par) {
// 		    id = new String(e);
// 		}
// 	}
	
	
    modify_qty(-1);
});

$(".arrow-container").mouseenter(function() {
    $(this, ".arrow-container").css("opacity", "0.8");
    //$(this).find(".overlay").css("opacity", "0.7");
    //$(".overlay", this).stop().fadeTo(100, e.type=="mouseenter"? 1 : 0.7 );
    $(".overlay", this).css("opacity", "0.7");
});
$(".arrow-container").mouseleave(function() {
    $(this, ".arrow-container").css("opacity", "0");
    $(".overlay", this).css("opacity", "0");
});

});

function modify_qty(val) {
    var qty = document.getElementById('qty').innerHTML;
    var new_qty = parseInt(qty,10) + val;
    
    var result = new String(new_qty);
    document.getElementById('qty').innerHTML = result;
    return result;
}