function updateFood() {
    $('.update').submit(function (e) {
        e.preventDefault();
        const newId = $('#foodId').val();
        const foodType = $('#foodType').val();
        const menu = $('#menu').val();
        const side = $('#side').val();
        const price = $('#price').val();
        const data = { foodType, price, menu, side }
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
            $.get(url + `?id=${newId}`, (data) => {
                const dataId = data[0].id;
                const type = data[0].foodType;
                const foodMenu = data[0].menu;
                const foodSide = data[0].side;
                const foodPrice = data[0].price;
                {
                    $.ajax({
                        url: url + `/${newId}`,
                        type: 'PUT',
                        data: {
                            foodId = dataId,
                            foodType: type,
                            menu: foodMenu,
                            side: foodSide,
                            price: foodPrice
                        },
                        success: function () {
                            alert = ' You have successfully updated the menu';
                            window.location.replace('./create.html');
                        }


                    });
                }
            })
        }
        return false;
    });
}