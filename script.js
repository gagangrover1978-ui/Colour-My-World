const body = document.querySelector('body');
const heading = document.querySelector('h1');
const color_dropdown = document.querySelector('select');

color_dropdown.onchange = event => {
    event.preventDefault();
    body.style.backgroundColor = color_dropdown.value;
}


document.addEventListener('transitionend', () => {
    const body_computed_style = window.getComputedStyle(body);
    const background_color_string = body_computed_style.backgroundColor;
    const background_color_rgb_list = background_color_string.match(/\d+/g);
    const red = parseInt(background_color_rgb_list[0]);
    const green = parseInt(background_color_rgb_list[1]);
    const blue = parseInt(background_color_rgb_list[2]);
    if ((red*0.2126) + (green*0.7152) + (blue*0.0722) < 128) {
        heading.style.color = "white";
    }else {
        heading.style.color = "black";
    }
})