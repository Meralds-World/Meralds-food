function deleteFood() {
    $('.delete').submit(function (e) {
        e.preventDefault();
        const newId = $('#foodId').val();
        const remove = { newId };
        const url = $(this).attr('id');
        {
            $.ajax({
                url: "http://localhost:3000/food/" + url,
                type: "delete",
                data: remove,
                success: function (data) {
                    $(data).remove();
                    window.location.replace('./create.html');
                }
            })
        }

    })
}

