
const icon = document.getElementsByClassName("icon");

icon[0].onclick = function () {
    for (i = 0; i < 3; i++) {
        icon[i].classList.remove("icon-active");
    }
    this.classList.add("icon-active");
}
icon[1].onclick = function () {
    for (i = 0; i < 3; i++) {
        icon[i].classList.remove("icon-active");
    }
    this.classList.add("icon-active");
}
icon[2].onclick = function () {
    for (i = 0; i < 3; i++) {
        icon[i].classList.remove("icon-active");
    }
    this.classList.add("icon-active");
}

const toggleBtn = document.querySelector(".toggle-btn"),
    toggleBackground = document.querySelector(".toggle");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("toggle-btn-active");
    toggleBackground.classList.toggle("toggle-active");

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
});

if (localStorage.getItem("theme") == "light") {
    toggleBtn.classList.remove("toggle-btn-active");
    toggleBackground.classList.remove("toggle-active");
}

else if (localStorage.getItem("theme") == "dark") {
    toggleBtn.classList.add("toggle-btn-active");
    toggleBackground.classList.add("toggle-active");
}

else {
    localStorage.setItem("theme", "light");
}


const deleteToggle = document.querySelector(".toggle-delete"),
    deleteToggleBtn = document.querySelector(".toggle-delete-btn");

deleteToggleBtn.addEventListener("click", () => {
    deleteToggleBtn.classList.toggle("toggle-btn-active");
    deleteToggle.classList.toggle("toggle-active");
})

