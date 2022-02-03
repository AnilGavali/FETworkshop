    
var alertTrigger=document.getElementById('search');
var celeryClick=document.querySelector(".celery");
var spaghettiClick=document.querySelector(".spaghetti");
var mushroomClick=document.querySelector('.mushroom');
alertTrigger.addEventListener('click',function(){
   document.querySelector('.myAlert').classList.remove("myAlert");
})
celeryClick.addEventListener('click',function(){
    document.querySelector('.myclassBeet').classList.remove("myclassBeet");
    document.querySelector('.myclassSpaghetti').classList.add("myclassSpaghetti");
    document.querySelector('.myclassMushroom').classList.add("myclassMushroom");
})
spaghettiClick.addEventListener('click',function(){
    document.querySelector('.myclassSpaghetti').classList.remove("myclassSpaghetti");
    document.querySelector('.myclassBeet').classList.add("myclassBeet");
    document.querySelector('.myclassMushroom').classList.add("myclassMushroom");
})
spaghettiClick.addEventListener('click',function(){
    document.querySelector('.myclassMushroom').classList.remove("myclassMushroom");
    document.querySelector('.myclassBeet').classList.add("myclassBeet");
    document.querySelector('.myclassSpaghetti').classList.add("myclassSpaghetti");
})
