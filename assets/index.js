document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("theme-toggle");
    const body = document.body;
    const logo = document.getElementById("logo");

    const logoDark = "assets/imgs/dark.png";
    const logoLight = "assets/imgs/light.png";

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        toggleSwitch.checked = true;
        logo.classList.add("light"); 
        setTimeout(() => { logo.src = logoLight; }, 300);
    } else {
        logo.src = logoDark;
    }

    toggleSwitch.addEventListener("change", function () {
        body.classList.add("transition-effect"); 

        if (this.checked) {
            body.classList.add("light-mode");
            logo.classList.remove("light"); 
            setTimeout(() => { 
                logo.src = logoLight; 
                logo.classList.add("light");
            }, 300);
            localStorage.setItem("theme", "light");
        } else {
            body.classList.remove("light-mode");
            logo.classList.remove("light");
            setTimeout(() => { 
                logo.src = logoDark; 
                logo.classList.add("light"); 
            }, 300);
            localStorage.setItem("theme", "dark");
        }

        setTimeout(() => {
            body.classList.remove("transition-effect");
        }, 600);
    });
});
