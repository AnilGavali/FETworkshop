$(document).ready(function(){
    
    $('#btn-login').on('click',function(){
        $.getJSON('https://mocki.io/v1/9c06236c-67ed-4689-a20c-c90a00103824',function(creds){
            if($('#username').val()===creds.username&& $('#password').val()===creds.password){
                
                alert('login successfully');
            }else{
                alert('invalid credentials');
            }
    } );
    
  
 })
$('#btn-submit').on('click',function(){
    alert("form submitted successfully!")
})
});
