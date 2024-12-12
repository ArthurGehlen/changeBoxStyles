const user_border_radius = document.getElementById("border_radius_input");
const user_bg_color = document.getElementById("background_color_input");
const box = document.getElementById("box");

function change_border_radius() {
    box.style.borderRadius = user_border_radius.value;
}

function change_background_color() {
    box.style.backgroundColor = user_bg_color.value;
}

user_border_radius.addEventListener("input", change_border_radius);
user_bg_color.addEventListener("input", change_background_color);