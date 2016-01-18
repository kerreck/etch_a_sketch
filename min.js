$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + '<p>' + toAdd + '</p>' + '</div>')
    })
});

$(document).on('click', '.item', function(){
    $(this).remove()
})