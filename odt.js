/* loading function
--------------------------------------------------------------
Description: */
window.addEventListener("load", () => { 
    if(window.location.pathname === "/odt/odt.html"){
        document.querySelector(".mapButton").addEventListener("click", () => {
            document.querySelector("#home-page").classList.add("hidden")
            document.querySelector("#map-page").classList.remove("hidden")
        })
    }

    document.querySelectorAll(".station").forEach(station => {
        station.addEventListener("click", switchHtml);
    })
});

/* switchHtml
--------------------------------------------------------------
Description: */
const switchHtml = (event) => {
    console.log(event.currentTarget.classList[1])
    window.location.pathname = `/odt/${event.currentTarget.classList[1]}.html`
};