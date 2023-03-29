// Add your code here
document.addEventListener("DOMContentLoaded", submitData)

const userData = {
    name: "Steve",
    email: "steve@steve.com",
}

function submitData(){
    fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(userData)

    })

    .then(res => res.json())
    .then(users => createElements(users))
    .catch(function (error){

        const errorElement = document.createElement("p")
        
        errorElement.innerText = "Unauthorized Access"
        document.querySelector("p").appendChild(errorElement)
        return(error.message);
    })
    
}


function createElements(users){
    const newElement = document.createElement("p")
    newElement.id = users.id
    newElement.innerText = users.name

    document.querySelector("body").appendChild(newElement)
}