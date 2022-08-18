/* loading function
--------------------------------------------------------------
Description: */
window.addEventListener("load", () => { 
    document.querySelector(".mapButton").addEventListener("click", () => {
        document.querySelector("#home-page").classList.add("hidden")
        document.querySelector("#map-page").classList.remove("hidden")
    })
});
