let search = document.querySelector(".popup-search")
let select = document.querySelector(".header-language-box")
let toggle = document.getElementById("toggle")

function openSearch(){
    search.classList.toggle("visibleSearch")
}

function hideSearch(){
    search.classList.remove("visibleSearch")
}


function showLanguages(){
    select.classList.toggle("showLanguages")
    toggle.classList.toggle("rotateToggle")
}

window.onclick = function(event){
    if(event.target == select){
        select.classList.remove("showLanguages")
        toggle.classList.remove("rotateToggle")
    }
    if (event.target == search) {
        search.classList.remove("visibleSearch")
    }
}

//opennav
function openNav(){
    var nav = document.querySelector(".responsive-nav-fullwidth")
    nav.classList.toggle("responsiveNav-visible")
}

function closeNav(){
    var nav = document.querySelector(".responsive-nav-fullwidth")
    nav.classList.remove("responsiveNav-visible")
}

//vide popup
let video = document.querySelector(".popupVide")
function openPopup(){
    video.classList.add("popupvisible")
    window.onclick = function(event){
        if(event.target == video){
            video.classList.remove("popupvisible")
        }
    }
}