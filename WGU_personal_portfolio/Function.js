function showDates(){
    let hiddenDates = document.querySelectorAll(".dates0");
    hiddenDates.forEach(item =>{
        item.classList.toggle("show")
        console.log("Dates are now visible");
    })
}