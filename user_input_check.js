function myFunction(){
	let fname = document.getElementById("fname");
	let ans1 = document.getElementById("first_alert");
	ans1.innerHTML = "";
	fname.style.border = "1px solid #c1c0c0";
	//lastname
	let lname = document.getElementById("lname");
	let ans2 = document.getElementById("last_alert");
	lname.style.border = "1px solid #c1c0c0";
	ans2.innerHTML = "";
    //email
    let email = document.getElementById("email_address");
	let ans3 = document.getElementById("email_alert");
	email.style.border = "1px solid #c1c0c0";
	ans3.innerHTML = "";
	//password
	let password = document.getElementById("user_password");
	let ans4 = document.getElementById("password_alert");
	password.style.border = "1px solid #c1c0c0";
	ans4.innerHTML = "";
	//telephone
	let tel = document.getElementById("mobile_no");
	let ans5 = document.getElementById("telephone_alert");
	tel.style.border = "1px solid #c1c0c0";
	ans5.innerHTML = "";
	//bio
	let bio = document.getElementById("bio_data");
	let ans6 = document.getElementById("bio_alert");
	bio.style.border = "1px solid #c1c0c0";
	ans6.innerHTML = "";

	
}
function first_name_check(){
	  var fname = document.getElementById("fname");
			if(fname.value==="" || fname.value.length<3 ||fname.value.length>17 || /^[a-zA-Z\-]+$/.test(fname.value)==false){
				document.getElementById("fname").style.border="2px solid red";
				let ans1 = document.getElementById("first_alert");
				ans1.style.color="red";
				ans1.innerText="First name must be alphanumeric and contain 3-16 characters";   
               return false;
			}
			else{
				let ans1 = document.getElementById("first_alert");
				ans1.innerHTML = "";
				document.getElementById("fname").style.border="2px solid green";
				return true;
			}
  }


function last_name_check(){
	  let lname = document.getElementById("lname");
	  if(lname.value==="" || lname.value.length<3 ||lname.value.length>17 || /^[a-zA-Z\-]+$/.test(lname.value)==false){
		document.getElementById("lname").style.border="2px solid red";
		let ans2 = document.getElementById("last_alert");
		ans2.style.color = "red";
		ans2.innerText="First name must be alphanumeric and contain 3-16 characters";   
	    return false;
	}
	else{
		let ans2 = document.getElementById("last_alert");
		ans2.innerHTML = "";
		document.getElementById("lname").style.border="2px solid green";
		return true;
	}
}

function email_check(){
	let email = document.getElementById("email_address");
	if(email.value==="" ||  /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/.test(email.value)==false){
		document.getElementById("email_address").style.border="2px solid red";
		let ans3 = document.getElementById("email_alert");
		ans3.style.color = "red";
		ans3.innerText="Email must be a valid address, e.g. example@example.com";   
	    return false;
	}
	else{
		let ans3 = document.getElementById("email_alert");
		ans3.innerHTML = "";
		document.getElementById("email_address").style.border="2px solid green";
		return true;
	}
}

 function password_check(){
	let password = document.getElementById("user_password");
	if(password.value==="" || password.value.length<6 || password.value.length>20 || [/[a-z]/,/[A-Z]/,/\d/,/\W/].filter(function(t){ return t.test(password.value); }).length > 2==false){
		document.getElementById("user_password").style.border="2px solid red";
		let ans3 = document.getElementById("password_alert");
		ans3.style.color = "red";
		ans3.innerText="Password must be alphanumeric (@,_and - are also allowed) and between 6-20 characters";   
	    return false;
	}
	else{
		let ans3 = document.getElementById("password_alert");
		ans3.innerHTML = "";
		document.getElementById("user_password").style.border="2px solid green";
		return true;
	}
}

//telephone
function telephone_check(){
	let tel = document.getElementById("mobile_no");
	if(tel.value==="" ||  /^(0|[+91]{3})?[6-9][0-9]{9}$/.test(tel.value)==false){
		document.getElementById("mobile_no").style.border="2px solid red";
		let ans3 = document.getElementById("telephone_alert");
		ans3.style.color = "red";
		ans3.innerText="A valid Telephone number(11 digits and 333-333-3334)";   
	    return false;
	}
	else{
		let ans3 = document.getElementById("telephone_alert");
		ans3.innerHTML = "";
		document.getElementById("mobile_no").style.border="2px solid green";
		return true;
	}
}

//Your Bio
function yourbio_check(){
	let bio = document.getElementById("bio_data");
	if(bio.value==="" ||  /^[a-z0-9\_]+$/.test(bio.value)==false){
		document.getElementById("bio_data").style.border="2px solid red";
		let ans3 = document.getElementById("bio_alert");
		ans3.style.color = "red";
		ans3.innerText="Bio must contain only lowercase letters, underscores, hyphens and be 8-50 characters";   
	    return false;
	}
	else{
		let ans3 = document.getElementById("bio_alert");
		ans3.innerHTML = "";
		document.getElementById("bio_data").style.border="2px solid green";
		return true;
	}
}
function himanshu() { 
	if(first_name_check() && last_name_check() && email_check() && password_check() && telephone_check() && yourbio_check())alert("Your form is submitted");
}

