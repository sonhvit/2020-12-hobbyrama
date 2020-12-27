$('#navbarMainMenu').before('<div class="bg-overlay-menu"></div>');
$('.bg-overlay-menu').click(function() {
    $(this).removeClass('show');
    $('#navbarMainMenu').removeClass('show');
})
$('button[data-target="#navbarMainMenu"]').click(function() {
    $('.bg-overlay-menu').addClass('show');
});
$(".close-menu").click(function() {
    $('#navbarMainMenu').removeClass('show');
    $('.bg-overlay-menu').removeClass('show');
});
$("#filters>.list-group>.list-group-item").click(function() {
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');
});