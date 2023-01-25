function fetch_data(){

	let fname = document.getElementById("fname").value;
	let lname = document.getElementById("fname").value;
	let email = document.getElementById("email_address").value;
	let upass = document.getElementById("user_password").value;
	let mobileno= document.getElementById("mobile_no").value;
	let bio = document.getElementById("bio_data").value;
	//blank input validation
	if(fname == "" || lname == "" || email == "" || upass == "" || mobileno == "" ){
       document.getElementById("fname").style.border="2px solid red";
       document.getElementById("lname").style.border="2px solid red";
       document.getElementById("email_address").style.border="2px solid red";
       document.getElementById("user_password").style.border="2px solid red";
       document.getElementById("mobile_no").style.border="2px solid red";
       // document.getElementById("bio_data").style.border="2px solid red";
	}


	else{

       //first and last name input validation
	var regName = /^[a-zA-Z]+$/;

	if(!regName.test(fname) || (fname.length < 3  && 16 > fname.length))
	{
      let ans1 = document.getElementById("first_alert");
      ans1.innerHTML="First name must be Alphanumeric"
      ans1.style.color="#ffa500";
      ans1.style.fontsize="18px";
	}
	else{
		let ans1 = document.getElementById("first_alert");
		ans1.innerHTML = "";
		document.getElementById("fname").style.border="2px solid green";
	}

	//last name valiation

       var reglame = /^[a-zA-Z]+$/;

	if(!reglame.test(lname) || (lname.length < 3  && 16 > lname.length))
	{
      let ans2 = document.getElementById("last_alert");
      ans2.innerHTML="Last name must be Alphanumeric"
      ans1.style.color="#ffa500";
      ans1.style.fontsize="18px";
	}
	else{
		let ans2 = document.getElementById("last_alert");
		ans2.innerHTML="";
		document.getElementById("lname").style.border="2px solid green";
	}


	//email validation 

	var regemail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}[a-zA-Z\s])+$/;
    if(!regemail.test(email))
	{
      let ans3 = document.getElementById("email_alert");
      ans3.innerHTML="Email must be valid address e.g example@example.com"
      ans3.style.color="#ffa500";
      ans3.style.fontsize="18px";
	}
	else{
		let ans3 = document.getElementById("email_alert");
		ans3.innerHTML = "";
		document.getElementById("email_address").style.border="2px solid green";
	}


	//password validation 
	
	var regpass = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    if(!regpass.test(upass))
	{
      let ans4 = document.getElementById("password_alert");
      ans4.innerHTML="Password must be Alphanumeric (@, _ and - are also allowed)";
      ans4.style.color="#ffa500";
      ans4.style.fontsize="18px";

	}
	else{
		let ans4 = document.getElementById("password_alert");
		ans4.innerHTML = "";
		document.getElementById("user_password").style.border="2px solid green";
	}

	//telephone validation 

      var regtel = /^(?:\d{2}([-.])\d{3}\1\d{3}\1\d{3}|\d{11})$/;
      if(!regtel.test(mobileno))
	{
      let ans5 = document.getElementById("telephone_alert");
      ans5.innerHTML="A valid Telephone number ( 11 digits and 333-333-3334)";
      ans5.style.color="#ffa500";
      ans5.style.fontsize="18px";
      console.log(ans5);
	}
	else{
		let ans5 = document.getElementById("telephone_alert");
		ans5.innerHTML = "";
		document.getElementById("mobile_no").style.border="2px solid green";
	}

	// bio introduction 
      
      var regtel = /^(?:\d{2}([-.])\d{3}\1\d{3}\1\d{3}|\d{11})$/;
      if(!regtel.test(bio))
	{
      let ans5 = document.getElementById("telephone_alert");
      ans5.innerHTML="A valid Telephone number ( 11 digits and 333-333-3334)";
      ans5.style.color="#ffa500";
      ans5.style.fontsize="18px";
      console.log(ans5);
	}
	else{
		let ans5 = document.getElementById("telephone_alert");
		ans5.innerHTML = "";
		document.getElementById("mobile_no").style.border="2px solid green";
	}


	}
	
}
