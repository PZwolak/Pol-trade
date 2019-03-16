$(document).ready(function(){ 

$(document).on('scroll', function () {
    var windowHeight = $(window).height();
    var scrollValue = $(this).scrollTop();
    var $sf = $('section.first div div');
    var $ss = $('section.second div div');
    var $sfText = $('section.first div div h2');
    var $ssDiv = $('section.second div div:nth-child(1)');
    var $ssImg = $('section.second div div:nth-child(1) img');
    var $ssH1 = $('section.second div div:nth-child(1) h1');
    var $ssDiv2 = $('section.second div div:nth-child(2)');
    var $ssImg2 = $('section.second div div:nth-child(2) img');
    var $ssH12 = $('section.second div div:nth-child(2) h1');
    var $ssDiv3 = $('section.second div div:nth-child(3)');
    var $ssImg3 = $('section.second div div:nth-child(3) img');
    var $ssH13 = $('section.second div div:nth-child(3) h1');
    var sod1FT = $sf.offset().top;
    var sod1H = $sf.outerHeight();
    var ssX = $ss.offset().top;
    var ssY = $ss.outerHeight();

    if (scrollValue > sod1FT + sod1H - windowHeight) {
        $sf.addClass('active');
        $sfText.addClass('active');
    }
    if (scrollValue > ssX + ssY - windowHeight - 1) {
        $ssDiv.addClass('active');
        $ssImg.addClass('active');
        $ssH1.addClass('active');
        $ssDiv2.addClass('active');
        $ssImg2.addClass('active');
        $ssH12.addClass('active');
        $ssDiv3.addClass('active');
        $ssImg3.addClass('active');
        $ssH13.addClass('active');

    }
});
$('i.fas.fa-bars').on('click', function(){
    $('div.menuList').toggleClass('active');
    $(this).toggleClass('active');
    $('.mobileMenu').toggleClass('hiddenOn');
});
if($(document).width()<769){
$('section.forth h3 span').text(" ");
}
});