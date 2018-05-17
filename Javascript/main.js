$(document).ready(function() {

    $('#register-div').hide();
    $('#expenses-section').hide();
    // end of document.ready
});

function SwitchToRegForm() {

    $('#login-div').hide();
    $('#register-div').show();
}

$("#login-btn").click(function(e) {
    e.preventDefault();
    var password = $("#password").val();
    var username = $("#forma_log_in").val();
    $.ajax({
        type: 'POST',
        url: 'RestApi/loginController.php',
        data: { username: username, password: password },
        success: function(data) {
            $('#expenses-section').show();
            $('#login-div').hide();
        },
        error: function() {
            console.log("error");
        }
    });
});

$("#register-btn-submit").click(function(e) {
    e.preventDefault();
    var email = $("#reg_email").val();
    var username = $("#reg_username").val();
    var password = $("#reg_password").val();
    $.ajax({
        type: 'POST',
        url: 'RestApi/registerController.php',
        data: { username: username, email: email, password: password },
        success: function(data) {
            console.log(data)
            $('#register-div').hide();
            $('#login-div').show();
        },
        error: function() {
            console.log("error");
        }
    });

})

function Logout() {
    $('#expenses-section').hide();
    $('#login-div').show();
    $.ajax({
        type:'GET',
        url:'RestApi/logoutController.php',
        success:function () {
            console.log('managed to logout');
        }
    })
}