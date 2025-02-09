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

$(document).ready(function () {
    $(".toggle-menu").click(function () {
        $("nav").slideToggle();
        
        const menuIcon = $(this).find(".menu-icon");
        if (menuIcon.text() === "☰") {
            menuIcon.text("✕");
            menuIcon.addClass("close");
        } else {
            menuIcon.text("☰");
            menuIcon.removeClass("close");
        }
    });
});

$(document).ready(function(){
    let currentIndex = 0;
    const posts = $(".blog-post");
    const totalPosts = posts.length;
    const postsToShow = 4;

    function showPosts(startIndex) {
        posts.hide(); // Esconde todos os posts
        for (let i = 0; i < postsToShow; i++) {
            const index = (startIndex + i) % totalPosts; // Calcula o índice do post
            posts.eq(index).fadeIn(); // Exibe o post
        }
    }

    $(".next-btn").click(function(){
        currentIndex = (currentIndex + postsToShow) % totalPosts;
        showPosts(currentIndex);
    });

    $(".prev-btn").click(function(){
        currentIndex = (currentIndex - postsToShow + totalPosts) % totalPosts;
        showPosts(currentIndex);
    });

    // Exibir os primeiros posts no início
    showPosts(currentIndex);
});