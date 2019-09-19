function createFood() {
    $('.create').submit(function (e) {
        e.preventDefault();
        let foodType = $('#foodType').val();
        let menu = $('#menu').val();
        let side = $('#side').val();
        const price = $('#price').val();
        const food = { foodType, price, menu, side, price }
        const url = $(this).attr('action');

        if (foodType === '') {
            alert("Please enter Food Type");
        } else if (menu === '') {
            alert("Please enter the menu");
        } else if (side === '') {
            alert("Please enter the side");
        } else if (price === '' || price === 0) {
            alert("Please enter the price");
        } else {
            $.ajax({
                url: url,
                dataType: 'json',
                type: 'POST',
                data: food,
                success: function (data) {

                    window.location = '/create.html';
                }
            })
        }
        return false;
    })
}