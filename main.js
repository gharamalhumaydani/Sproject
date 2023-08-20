const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");
sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});
sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
})



const postUser =async( username, email, password )=>{
    const res =await fetch(
        "https://64e11db550713530432cf5ef.mockapi.io/plan",
        {
            headers: {
                "Content-Type":"application/json"
             },
             method:"POST",
             body: JSON.stringify({
                username:username,
                email:email,
                password:password
            }),
        }
    )
    
        
 const data =await res.json();
 const userInfo= document.getElementById("userInfo")
 userInfo.innerHTML=`<p> ${data.username}</p>``<p> ${data.email}</p>``<p> ${data.password}</p>`
}
 const userInput= document.getElementById("user")
 const emailInput= document.getElementById("email")
 const passInput= document.getElementById("pass")
 const sendBtn = document.getElementById("sendBtn")

 sendBtn.addEventListener("click",()=>{
    postUser(userInput.value , emailInput.value , passInput.value)
});
