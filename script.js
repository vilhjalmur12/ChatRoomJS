// Modal view
$('#add-room').click( function() {
        $('.modal').modal('show');
});

// room sidebar hover
$('.room-item').hover( function(e) {
    $(this).css('background', '#3F295C');
    var desc = $(this).find('.description');
    desc.removeClass('hidden');
}, function(e) {
    $(this).css('background', 'none');
    $(this).find('.description').addClass('hidden');
});

// Left menu bar
$('.left-menu-button').click( function(e) {
    $('.left-menu-button').removeClass('active');
    $(this).addClass('active');
});

// Right menu bar
$('.right-menu-button').click( function(e) {

});

$('.right-menu-button').hover( function(e) {
    $(this).addClass('active');
}, function(e) {
    $(this).removeClass('active');
});

//Byrja scrollable á botni
$('.ui.raised.segment').scrollTop($('.ui.raised.segment')[0].scrollHeight);

$('.room-drop-button').click( function() {
    $(this).dropdown();
});
