// Function for the input using the try catch Method with a RegEx to validate the email and for the Subscribe button
function myFunction() {
    const inputs = document.querySelectorAll('input');
    let inputElement = document.querySelector('#demo').value;
    try {
        if(inputElement.trim() === "") throw "Field is empty!";
        let myRegExp = /^([a-z\d\.-]+@([a-z-\d-]+)\.([a-z]{2,6}))?$/i;
        if(!myRegExp.test(inputElement)) throw "Wrong input !"
        if(myRegExp.test(inputElement)) throw "Confirmation message has been sent to your email !"

    } catch(error) {
        alert(error);
    }
    const subBtn2 = document.querySelector('.footerBtn');
    let error = '';
    if (myRegExp.test(inputElement)) {
        subBtn2.innerHTML = 'Subscribed ✔';
    } else {
        subBtn2.innerHTML = 'Subscribe'
    } 
} 


