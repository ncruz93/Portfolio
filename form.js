// This function takes in the input from the user, and checks it making sure that it is valid on each submission.
function validateForm() { 
    //each case represents if an input is valid or not.
    let case1, case2;
    //this part of the function focuses on the user's first name, ensuring it is valid.
    let fnameInput = document.forms["myForm"]["fname"].value;
    if ((fnameInput == "") || (fnameInput.length < 2) || (!/^[A-Za-z]*$/.test(fnameInput))) {
        errorMessage(1); 
        case1 = false;
    } else {
        errorMessage(4);
        case1 = true;
    }
    //here we check to ensure last name validity
    let lnameInput = document.forms["myForm"]["lname"].value;
    if ((lnameInput == "") || (lnameInput.length < 2) || (!/^[A-Za-z]*$/.test(lnameInput))) {
        errorMessage(2);
        case1 = false;
    } else {
        errorMessage(5);
        case2 = true;        
    }
    if ((case1==true) && (case2==true)){
        return true;
    } else {
        return false;
    }
}
//this function determines whether or not the user sees the appropriate error message for what they need to enter, based on the checks of the other function
function errorMessage(num) {
    if (num == 1){
        document.getElementById("e1").style.visibility = "visible";
    } else if(num == 2){
        document.getElementById("e2").style.visibility = "visible";
    }  else if (num == 4){
        document.getElementById("e1").style.visibility = "hidden";
    } else if (num == 5){
        document.getElementById("e2").style.visibility = "hidden";
    } 
}
