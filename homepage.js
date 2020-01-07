// var u;
// u=localStorage.getItem('Registered_users');
// console.log(u);
// var btn=document.querySelector("#registerbtn");
// btn.addEventListener("click", function(){
// 	// body...
// window.location.href= "registrartion.html";
// })
var data={
	email:"user@gmail.com",
	password:"123456"
}
localStorage.setItem("Credentials",JSON.stringify(data));
var email=document.querySelector('#email');
var password=document.querySelector('#passwd');
var login=document.querySelector('#loginbtn');
var register=document.querySelector('#registerbtn');
//email.value="user@gmail.com"
var getitem=localStorage.getItem("Credentials");
var realdata=JSON.parse(getitem);
register.addEventListener('click',function(){
	window.location="registration.html"
})
login.addEventListener('click',function loggingIn(ev){
	ev.preventDefault();
	if((email.value!="") &&(password.value!=""))
	{
	  if((email.value==realdata.email)&&(password.value==realdata.password))
		window.location="dashboard.html";
	  else
	    alert("please check Credentials");
    }
    else
    	alert("please enter your Credentials")
}
);


