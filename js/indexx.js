$('.section2').waypoint(function(direction){
    $('.section2').addClass('fade-in');
},{
    offset: '30%'
});

$('.section3').waypoint(function(direction){
    $('.section3').addClass('fade-in');
},{
    offset: '30%'
});

$('.section4').waypoint(function(direction){
    $('.section4').addClass('fade-in');
},{
    offset: '30%'
});

$('.section5').waypoint(function(direction){
    $('.section5').addClass('fade-in');
},{
    offset: '30%'
});

$('.section6').waypoint(function(direction){
    $('.section6').addClass('fade-in');
},{
    offset: '30%'
});
$('.section7').waypoint(function(direction){
    $('.section7').addClass('fade-in');
},{
    offset: '30%'
});
$('.footer').waypoint(function(direction){
    $('.footer').addClass('fade-in');
},{
    offset: '30%'
});

$(".more").on("click", (e) => {
    console.log($(e.target).parent().children("p").toggleClass("text-truncate"));
});