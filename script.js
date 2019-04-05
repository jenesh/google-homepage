let drop_btn = document.querySelector("#drop-btn");

let myDropdown = document.querySelector(".drop-content");

drop_btn.addEventListener("click",
    function () {
        if (myDropdown.style.display === "flex") {
            myDropdown.style.display = "none";
        } else {
            myDropdown.style.display = "flex";
        }
    })

if (mydropDown.style.display === "flex") {
    document.addEventListener("click",
        function () {
            myDropdown.style.display = "none";

        })
}


