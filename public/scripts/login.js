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