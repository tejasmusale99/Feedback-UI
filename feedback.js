const ratingE1s=document.querySelectorAll(".rating");
const btnE1=document.getElementById("btn");
const container=document.getElementById("container");

ratingE1s.forEach((ratingElement)=>{
    ratingElement.addEventListener("click",(event)=>{
        // console.log(event.target.innerText || event.target.parentNode.innerText)
        removeActive()
        selectRating=event.target.innertext || event.target.parentNode.innerText
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active")
    })
})

function removeActive(){
    ratingE1s.forEach((ratingElement) => {
        ratingElement.classList.remove("active") 
    });
}

btnE1.addEventListener("click",()=>{
    if(selectRating!==""){
        container.innerHTML= `<strong>Thank You</strong>
        <br>
        <br>
        <strong>Feedback:${selectRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>`
    }
} )
