function deleteFood() {
    $('.delete').submit(function (e) {
        e.preventDefault();
        let foodType = $('#foodType').val();
        let menu = $('#menu').val();
        let side = $('#side').val();
        const price = $('#price').val();
        const food = { foodType, price, menu, side }
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
                type: 'DELETE',
                data: food,
                success: function (data) {

                    window.location.replace('./create.html');
                }
            })
        }
        return false;
    })
}