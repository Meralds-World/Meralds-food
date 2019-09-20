$(document).ready(function () {
    const gottenFood = JSON.parse(localStorage.getItem("admin"));
    const newId = gottenFood.id;

    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/food/?id=${newId}`,
        dataType: 'json'
    }).done(function (data) {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            if (data.length === 0) {
                $('#food-table').html('<h2>You have not created any food</h2>')
            } else {
                $('.tbody').append(`
                <tr>
                  <td>${data[i].id}</td>
                  <td>${data[i].foodType}</td>
                  <td>${data[i].menu}</td>
                  <td>${data[i].side}</td>
                  <td>${data[i].Price}</td>
                </tr>`);
            }
        }

    });
})