function createOrder() {
    $('.form').submit(function (e) {
        e.preventDefault();
        const price = $('#price').val();
        let foodType = $('#foodType').val();
        const location = $('#location').val();
        const url = $(this).attr('action');
        const order = { foodType, price, location }
        if (foodType === '') {
            alert("Please select from the menu");
        } else if (price === '' || price === 0) {
            alert("Please enter the price");
        } else if (location === '') {
            alert("Please enter your location");
        } else {
            $.ajax({
                url: url,
                type: 'POST',
                data: order,
                success: function (data) {
                    window.location.replace('./welcome.html');
                }
            })
        }
        return false;
    })
}