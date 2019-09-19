function loginAdmin() {
    $('.admin').submit(function (e) {
        e.preventDefault();
        const email = $('#email').val();
        const password = $('#password').val();
        const url = $(this).attr('action');
        if (email.trim().length < 1) {
            alert("Please enter your email address");
        } else if (password.trim().length < 1) {
            alert("Please enter your password");
        } else {
            $.ajax({
                url: url + `?email=${email}&&password=${password}`,
                type: 'GET',
                dataType: 'json'
            }).done((data) => {
                console.log(data)
                if (data.length === 0) {

                    alert('Admin login credentials incorrect')
                } else {
                    const { id, email } = data[0]
                    const adminDetails = JSON.stringify({ id, email })
                    localStorage.setItem("admin", adminDetails);
                    window.location.replace('./create.html');
                }
            })
        }
        return false;
    })
}
