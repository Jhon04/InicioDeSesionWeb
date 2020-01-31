$(document).ready(function (){
    $("html").click(function() {
        $("#contentPass").css("border", "2px solid #fff");
        $("#inputEmail").css("border", "2px solid #3493e600");
    });
    
    
    $('#inputEmail').click(function(e){
        e.stopPropagation();
        $("#contentPass").css("border", "2px solid #fff");
        $("#inputEmail").css("border", "2px solid #3494e6");
    });

    
    $('#inputPassword').click(function(e){
        e.stopPropagation();
        $("#contentPass").css("border", "2px solid #3494e6");
        $("#inputEmail").css("border", "2px solid #3493e600");
    });

    $('#buttonEye').click(function(e){
        e.stopPropagation();
        var cambio = document.getElementById("inputPassword");
        if(cambio.type == "password"){
            cambio.type = "text";
            $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
            $("#contentPass").css("border", "2px solid #3494e6");
            $("#inputEmail").css("border", "2px solid #3493e600");
        }else{
            cambio.type = "password";
            $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
            $("#contentPass").css("border", "2px solid #3494e6");
            $("#inputEmail").css("border", "2px solid #3493e600");
        }
    });

    
});