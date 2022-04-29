// const grabinputname = document.querySelectorAll('input')
// const grabbutton = document.querySelector('button')
// const grabdisplay = document.querySelector('.display')
// const graberroricon = document.querySelector('.error_icon')

// grabbutton.addEventListener('click', submit)



// function submit() {
//   let grabbutton = document.forms["myform"]["firstname"].value;
//   if (grabbutton == "") {
//     grabdisplay.innerHTML =   "First Name cannot be blank";
//   }
//   else{
//     grabdisplay.innerHTML = "Approved"
//   }

//   let grabbutton1 = document.forms["myform"]["lastname"].value;
//   if (grabbutton1 == "") {
//     grabdisplay.innerHTML =   "First Name cannot be blank";
//   }
//   else{
//     grabdisplay.innerHTML = "Approved"
//   }




 function validation() {
     const grabusername = document.getElementById('firstname').value;
     const grablastname = document.getElementById('lastname').value;
     const grabemail = document.getElementById('email').value;
     const grabpassword = document.getElementById('password').value;
     const grabborder = document.getElementsByTagName('input').value


     if (grabusername == "") {
         document.querySelector('.error_icon').style.display = "block";
         document.getElementById('fname').innerHTML = "First Name cannot be empty";
         document.querySelector('#firstname').style.borderColor = "hsl(0, 100%, 74%)"
        //  return false;
     }

      
 
        if (grablastname == "") {
            document.querySelector('.error_icon1').style.display = "block";
            document.getElementById('lname').innerHTML = "Last Name cannot be empty";
            document.querySelector('#lastname').style.borderColor = "hsl(0, 100%, 74%)";
            // return false;
        }

        if (grabemail == "") {
            document.querySelector('.error_icon2').style.display = "block";
            document.getElementById('eaddress').innerHTML = "Email Address cannot be empty";
            document.querySelector('#email').style.borderColor = "hsl(0, 100%, 74%)";
            // return false;
        }

        if ((grabemail.charAt(grabemail.length-4) !='.') && (grabemail.charAt(grabemail.length-3)!='.')) {
            document.getElementById('eaddress').innerHTML = "Looks like this is not an email";
            // return false; 
        }


        if (grabpassword == "") {
            document.querySelector('.error_icon3').style.display = "block";
            document.getElementById('pword').innerHTML = "Password cannot be empty";
            document.querySelector('#password').style.borderColor = "hsl(0, 100%, 74%)"
            return false;
        }

        // if (grabborder = "") {
        //    grabborder.classList.add('error');
        //    return false;
        // }
     }    
     






//   alert("name must not be empty");
    //     return false