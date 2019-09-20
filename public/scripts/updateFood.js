function updateFood() {
    $('.update').submit(function (e) {
        e.preventDefault();
        const newId = $('#foodId').val();
        const foodType = $('#foodType').val();
        const menu = $('#menu').val();
        const side = $('#side').val();
        const price = $('#price').val();
        const food = { foodType, price, menu, side }
        const url = $(this).attr('action');

        if (newId === '') {
            alert("Please enter Food ID");
        } else if (foodType === '') {
            alert("Please enter Food Type");
        } else if (menu === '') {
            alert("Please enter the menu");
        } else if (side === '') {
            alert("Please enter the side");
        } else if (price === '' || price === 0) {
            alert("Please enter the price");
        } else {
            $.get(url + `?id=${newId}`, (food) => {
                const dataId = data[0].newId;
                const type = data[0].foodType;
                const foodMenu = data[0].menu;
                const foodSide = data[0].side;
                const foodPrice = data[0].price;
                {
                    $.ajax({
                        url: "http://localhost:3000/food/" + url,
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
            });
        }
        return false;
    });
}

/*
//$('#my-table').delegate('.saveEdit', 'click', function () {
    // alert('this is save edit');
let data = $(this);



let newData = {
    "foodType": data.find('input.foodType').val(),
    "menu": data.find('input.menu').val(),
    "side": data.find('input.side').val(),
    "price": data.find('input.price').val(),

}

$.ajax({
    type: 'PUT',
    url: "http://localhost:3000/loanBucket/" + $div.attr('id'),
    data: newData,
    success: function (response) {
        alert('updated sucessfully');
        document.location.reload()
    }, error: function (response) {
        alert('server error...update failed');
    }
});




    });
}



//});*/