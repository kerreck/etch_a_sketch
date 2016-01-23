var rows = 12;
var columns = 12;
var $row = $("<div />", {
    class: 'row'
});
var $block = $("<div />", {
    class: 'block'
});
$(document).ready(function() {

    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    $("form").submit(function(e) {
        e.preventDefault();
    });

    for (var i = 0; i < rows; i++) {
        $row.append($block.clone());
    };

    for (var i = 0; i < rows; i++) {
        $(".wrapper_game").append($row.clone());
    };

    $(".wrapper_game").delegate(".block", "mouseenter", function() {
        $(this).addClass("switched");
    });

    $('#but_color').click(function() {
        $(this).toggleClass("down");
        $('#but_opacity').removeClass("down");
        $(".wrapper_game").delegate(".block", "mouseenter", function() {
            if ($("#but_color").hasClass("down") === true) {
                $(this).css("background", getRandomColor());
            }
        });
    });

    $('#but_trail').click(function() {
        $(this).toggleClass("down");
        $('#but_opacity').removeClass("down");
        $('#but_color').removeClass("down");
        if ($("#but_trail").hasClass("down") === true) {
            $('.wrapper_game').mouseenter(function() {
                $(".block").mouseenter(function() {
                    //$(this).addClass("switched");
                    if ($("#but_trail").hasClass("down") === true) {
                        $(this).fadeTo(800, 0.1);
                    }
                })
            })
        }

    });

    $('#but_opacity').click(function() {
        $(this).toggleClass("down");
        $('#but_color').removeClass("down");
    });

    $(".wrapper_game").delegate(".block", "mouseenter", function() {
            if ($("#but_opacity").hasClass("down") === true) {
                var value = parseFloat($(this).css("opacity"));
                if (value <= 1.0) {
                    $(this).css("opacity", value - 0.1);
                }
            }
        })

    $('#reset').click(function() {
        $('.block').removeClass("switched");
        $('.block').removeAttr('style');
    })

    $('#setsize').click(function() {
        var rows_new = parseInt($('input[name=size]').val());
        var columns_new = parseInt($('input[name=size]').val());
        $('form')[0].reset();

        if (rows_new === NaN) {
            return;
        }

        if (rows_new > 32) {
            rows_new = columns_new = 32
        };

        $('.wrapper_game').empty();

        var $row = $("<div />", {
            class: 'row'
        });

        var $block = $("<div />", {
            class: 'block'
        });

        
        for (var q = 0; q < columns_new; q++) {
            $row.append($block.clone());
        }
        //clone the temp row object with the columns to the wrapper
        for (var i = 0; i < rows_new; i++) {
            $(".wrapper_game").append($row.clone());
        }

    });


});
