const navBar = document.querySelector("#navBar")
const subForm = document.querySelector("#subForm")
const pageUp = document.querySelector("#pageUp")
const filterButtons = document.querySelectorAll(".prod-filter-btns")
const filterCards = document.querySelectorAll(".all-products-card")
const contactForm = document.querySelector("#contactForm")

window.addEventListener("scroll", ()=>{
    if ((window.scrollY) > 40) {
        navBar.classList.add("shadow-sm")
    }
    else navBar.classList.remove("shadow-sm")

})

if(subForm){
    subForm.addEventListener("submit", (e)=>{
        e.preventDefault()
        if(!subForm.mail.value){
            subForm.mail.nextSibling.nextSibling.innerHTML = `<p class="m-danger-color mt-2"> E-mail is required </p>`
            return false
        }
        else if (!((subForm.mail.value).includes("@") && (subForm.mail.value).includes(".com"))){
            subForm.mail.nextSibling.nextSibling.innerHTML = `<p class="m-danger-color mt-2"> mail should be like example@mail.com </p>`
            return false
        }
        else{
            subscibeForm.mail.nextSibling.nextSibling.innerHTML = " "
            return true
        }
    })
}

if(pageUp){
    window.addEventListener("scroll", ()=>{
        if((window.scrollY) >= (window.innerHeight)){
            pageUp.classList.remove("d-none")
        }
        else pageUp.classList.add("d-none")
    })

    pageUp.addEventListener("click", () =>{
        window.scrollTo({
            top: 0 ,
            behavior: "smooth"
        })
    })
}


if(filterButtons){
    filterButtons.forEach( (btn) => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(button=>{
                button.classList.remove("active-btn")
            })
            btn.classList.add("active-btn")
    
            filterCards.forEach( card => {
                if((card.dataset.name === btn.dataset.name) || btn.dataset.name == "all"){
                    card.classList.remove("d-none")
                }
                else {
                    card.classList.add("d-none")
                }
            })
        })
    })
    
}

if(contactForm){
    
}