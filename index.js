function formsubmit(){
    var password = document.getElementById("password");
    var confirnpassword = document.getElementById("confirnpassword");
    if(password!==confirnpassword){
        document.getElementById('error').style.display = 'block';
    }else{
        window.location.href = "done.html";
    }
}