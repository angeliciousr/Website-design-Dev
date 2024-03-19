

//First name and Last name in alphabets only
function allLetter(inputtxt)
      { 
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      alert('Your name have accepted : you can try another');
      return true;
      }
      else
      {
      alert('Please input alphabet characters only');
      return false;
      }
      }
      
     
    
      
//email validation 

function ValidateEmail(input) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {

    alert("Valid email address!");

    document.form1.email.focus();

    return true;

  } else {

    alert("Invalid email address!");

    document.form1.email.focus();

    return false;

  }
}


//DOB validation  
function checkAge(event) {
    const dob = new Date(document.getElementById("dob").value);
    const age = (Date.now() - dob.getTime()) / (1000 * 60 * 60 * 24 * 365);
    if (age < 18) {
      event.preventDefault();
      alert("You must be 18 years or older to submit this form.");
    }
  }


 //phone number starts with 5
 var x = document.getElementById("phone").defaultValue = "5-";
  //passport starts with P
  var y = document.getElementById("Passport").defaultValue = "P";