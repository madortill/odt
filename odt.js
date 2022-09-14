/* loading function
--------------------------------------------------------------
Description: */
window.addEventListener("load", () => { 
    document.querySelectorAll(".mapButton").forEach(mapButton => {
        mapButton.addEventListener("click", showMap);
    })
    document.querySelectorAll(".station").forEach(station => {
        station.addEventListener("click", (event) => {
            window.location.pathname = `/${event.currentTarget.classList[1]}.html`
            // window.location.pathname = `/odt/${event.currentTarget.classList[1]}.html`
        });
    })
    document.querySelector(".menuButton").addEventListener("click", () => {
        document.querySelector(".menuPage").classList.remove("hidden");
        document.querySelector(".exitMenuButton").addEventListener("click", () => {
            document.querySelector(".menuPage").classList.add("hidden")
        })
    })
});

/* showMap
--------------------------------------------------------------
Description: */
const showMap = (event) => {
    let page = event.currentTarget.classList[1]
    document.querySelector(`#${page}`).classList.add("hidden")
    document.querySelector(".menuPage").classList.add("hidden")
    document.querySelector("#map-page").classList.remove("hidden")
    document.querySelector(".exitButton").addEventListener("click", () => {
        document.querySelector(`#${page}`).classList.remove("hidden")
        document.querySelector("#map-page").classList.add("hidden")
    })
};