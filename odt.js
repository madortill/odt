var Arr_Location = [
    // the locations in the array are by order
    {
        name: `מיקום 1`, // name of the location
        text: `הסבר על מיקום 1`, 
        extra_text: `עוד הרבה הסבר`,
        video: `קישור`,
        safety: `pdf` 
    },
]

$(function() {
    for (let i = 1; i <= Arr_Location.length; i++) {
        $("body").prepend(
            `<div id="location-${i}" class="page">
                <div class="container">
                    <div class="title">${Arr_Location[i-1].name}</div>
                    <div class="text">${Arr_Location[i-1].text}</div>
                    <center>
                        <video width="320" height="240" controls>
                            <source src="movie.mp4" type="${Arr_Location[i-1].video}/mp4">
                            <source src="movie.ogg" type="${Arr_Location[i-1].video}/ogg">
                        </video>
                    </center>
                </div>
            </div>`);
        // locations in the menu
        $(`#menu`).append(`<div class="menu-item location-${i} button">${Arr_Location[i-1].name}</div>`);
        // locations on the map
        $(`#map`).append(`<div class="location location-${i} button"></div>`);
        // למחוק! זה בשביל שהנקודות על המפה יהיו מפוזרות בנקודות שונות, לא רלוונטי כאשר יש גרפיקות
        $(`.location-${i}`).css({"top": `${2*i}vh`, "left": `${Math.random() * 60 + 20}vw`});
    }
    $(`#menu-button`).on("click", function() {
        $(`#menu`).css("display", "flex");
    });
    [$(`.menu-item`), $(`#x`)].forEach(item => {
        item.on("click", function() {
            $(`#menu`).css("display", "none");
        });
    });
    [$(`#map-button`), $(`#home-button`)].forEach(item => {
        item.on("click", function() {
            $(".page").css("display", "none");
            $(`#${item.attr("id").slice(0, -7)}-page`).css("display", "block");
            $(`#buttons .button`).css("display", "block");
            item.css("display", "none");
        });
    });
    // $(`#map-button`).on("click", function() {
    //     $(".page").css("display", "none");
    //     $(`#map-page`).css("display", "block");
    // });
    // show location page
    [$(".location"), $(".menu-item")].forEach(item => {
        item.on("click", function() {
            $(".page").css("display", "none");
            $(`#location-${item.attr("class").split(/\s+/)[1].slice(-1)}.page`).css("display", "block");
            $(`#buttons .button`).css("display", "block");
        });
    });
});

//element.attr('class').match(/my_widget-(\d+)/)[1]