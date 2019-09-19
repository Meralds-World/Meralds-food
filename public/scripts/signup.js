function addUser() {
    $('.signupForm').submit(function (e) {
        e.preventDefault();
        const userName = $('#userName').val();
        const email = $('#email').val();
        const phoneNumber = $('#phoneNumber').val();
        const password = $('#password').val();
        const cPassword = $('#rePassword').val();
        const location = $('#location').val();
        const url = $(this).attr('action');
        const users = { userName, email, password, phoneNumber, location };
        const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (userName.trim().length < 1) {
            alert("Please enter your Username");
        } else if (email.trim().length < 1) {
            alert("Please enter your email address");
        } else if (!emailPattern.test(email.trim())) {
            alert("Please enter a valid email address")
        } else if (password.trim().length < 8) {
            alert("Password must be at least 8 characters long");
        } else if (password.trim() !== cPassword.trim()) {
            alert("Passwords do not match");
        } else if (phoneNumber.trim().length < 1) {
            alert("Please enter your Phone Number");
        } else {
            $.ajax({
                url: url,
                type: 'POST',
                data: users,
                success: function (data) {

                    /* }).done((data) => {
                         const { id, userName, email, location, phoneNumber } = data
                         const userDetails = JSON.stringify({ id, userName, email, location, phoneNumber })
                         localStorage.setItem("users", userDetails);
         */
                    window.location.replace('public/welcome.html');
                }
            })
        }

        return false;
    })
}