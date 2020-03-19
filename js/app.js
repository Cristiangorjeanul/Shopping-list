$(function () {

    var form = $('.products').find('form');
    var inputs = form.find('input');
    var list = $('.products-list');

    form.on('submit', function (ev) {
        ev.preventDefault();
        var productName = inputs.eq(0).val();
        var newElement = $('<li><span class="product-name">' + productName + '</span><button class="btn-delete">Delete</button></li>');
        list.append(newElement);
        form[0].reset();
    });


    list.on("click", '.btn-delete', function () {
        $(this).parent("li").slideUp(function () { //hiding li element
            $(this).remove(); //removing li element
        });
    });

});