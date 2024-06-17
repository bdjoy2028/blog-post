let form = document.getElementById("form")
form.addEventListener("submit",handlesubmit)
function handlesubmit(event){
    event.preventDefault()
    let title = document.getElementById("Title")
    let content = document.getElementById("Content")
    console.log(title.value)
    console.log(content.value)
    document.location.replace("index2.html")
} 