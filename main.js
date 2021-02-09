$(document).ready(function(){
    new WOW({
        animateClass: 'animate__animated'
    }).init();
    $('.photo-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    });

    $('.checkout').click(() => {
        $('#join-us-container').css('display', 'flex');
    });
    $('#join-us-cancel-close, #join-us-container').click((e) => {
        if (e.target.id === 'join-us-container' || e.target.id === 'join-us-cancel-close') {
            $('#join-us-container').hide();
        }
    })

    $('#join-us-button > button').click(() => {
        let name = $('#name')
        let number = $('#number')


        if (!name.val()) {
            name.siblings('.error-input').show();
            name.css('border-color', 'red');
            return;
        } else {

            name.css('border-color', '#273c11');
        }
        if (!number.val()) {
            number.siblings('.error-input').show();
            number.css('border-color', 'red');
            return;
        } else {
            number.css('border-color', '#273c11');
        }
        $.ajax({
            type: 'post',
            url: 'mail.php',
            data: 'name=' + name.val() + '&number=' + number.val(),
            success: () => {
                $('#join-us-container').hide();
            },
            error: () => {
                $('#join-us-container').hide();
                alert('Ошибка.')
            }
        });
    });
});