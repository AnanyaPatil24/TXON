const Name = document.querySelector(".contact_form input[type='text']")
const email = document.querySelector(".contact_form input[type='email']")
const message = document.querySelector(".contact_form textarea")

const validateInput = ()=> {
    if(Name.value==="") {
        return alert("Enter some name..")
    }
    if(message.value.trim()==="") {
        return alert("Enter some message")
    }
    alert("Message sent")
}