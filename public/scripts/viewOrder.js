
$(document).ready(function () {
    $.get("http://localhost:3000/order", function (data) {
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            if (data.length === 0) {
                $('#order-table').html('<h2>You have not placed any order</h2>')
            } else {
                $('.tbody').append(`
                <tr>
                <td>${data[i].id}</td>
                <td>${data[i].foodType}</td>
                <td>${data[i].price}</td>
                <td>${data[i].location}</td>
                </tr>`);
            }
        }
    });
});