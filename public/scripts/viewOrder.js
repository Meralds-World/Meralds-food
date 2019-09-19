$(document).ready(function () {
    const userValue = JSON.parse(localStorage.getItem('users'));
    console.log(userValue)
    const name = userValue.userName
    const newEmail = userValue.email;
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/order/?userEmail=${newEmail}`,
        dataType: 'json'
    }).done(function (data) {
        console.log(data)
        $('#welcome').html(`<h2>Welcome, ${name}</h2>`)
        for (let i = 0; i < data.length; i++) {
            if (data.length === 0) {
                $('#order-table').html('<h2>You have not placed any order</h2>')
            } else {
                $('.tbody').append(`
                <tr>
                  <td>${data[i].id}</td>
                  <td>${data[i].userEmail}</td>
                  <td>${data[i].foodType}</td>
                  <td>${data[i].price}</td>
                  <td>${data[i].location}</td>
                </tr>`);
            }
        }

    });
})