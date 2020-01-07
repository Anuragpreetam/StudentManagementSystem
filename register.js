let users=[];
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function register(ev) {
	ev.preventDefault();//to stop form from submitting
    let user={
    	firstname: document.querySelector('#fname').value,
    	Middlename: document.querySelector('#mname').value,
    	Lastname: document.querySelector('#lname').value,
    	Email: document.querySelector('#email').value,
    	Mobile: document.querySelector('#mob-num').value,
    	Password: document.querySelector('#passwd').value,
    	ConfirmPassword: document.querySelector('#con-passwd').value
    }
    if(document.querySelector('#fname').value && document.querySelector('#lname').value && document.querySelector('#email').value && document.querySelector('#mob-num').value && document.querySelector('#passwd').value && document.querySelector('#con-passwd').value){

            if(!(document.querySelector('#email').value.match(mailformat)))
            {
                alert("You have entered an invalid email address!");
                return false;
            }
        if(document.querySelector('#passwd').value.length >= 8 && document.querySelector('#con-passwd').value.length >= 8) {
                if(document.querySelector('#passwd').value !=  document.querySelector('#con-passwd').value){
                    alert("password and confirm password must be same");
                    return false;
                }
        }else {
            alert("password must be minimum 8 characters long");
            return false;
        }
        if(document.querySelector('#mob-num').value.length < 10 || document.querySelector('#mob-num').value.length > 10) {
            alert("Phone number must be 10 digits");
            return false;
        }
        users.push(user);
        document.querySelector('#form').reset();
        localStorage.setItem('Registered_users', JSON.stringify(users, '\t', 2));
        alert("Added to localStorage and successfully registered");
        location.href = "homepage.html";
    }else{
        alert("fields can't be empty, except middlename");
        return false;
    }
}

document.querySelector("#registerbtn").addEventListener('click',register);
