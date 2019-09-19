function loginUser() {
    $('.loginForm').submit(function (e) {
        e.preventDefault();
        const email = $('#loginEmail').val();
        const password = $('#loginPassword').val();
        const url = $(this).attr('action');
        if (email.trim().length < 1) {
            alert("Please enter your email address");
        } else if (password.trim().length < 1) {
            alert("Please enter your password");
        } else {
            $.ajax({
                url: url + `?loginEmail=${email}&&loginPassword=${password}`,
                type: 'GET',
                dataType: 'json'
            }).done((data) => {
                console.log(data)
                if (data.length === 0) {
                    alert('User login credentials incorrect')
                } else {
                    const { id, userName, email, location } = data[0]
                    const userDetails = JSON.stringify({ id, userName, email, location })
                    localStorage.setItem("users", userDetails);
                    window.location.replace('./welcome.html')
                }
            })
        }
        return false;
    })
}
