let btn_square = document.getElementById('square_shape');
let btn_circle = document.getElementById('circle_shape');
let btn_triangle = document.getElementById('triangle_shape');

btn_square.addEventListener("click", () =>{
    let x = document.getElementById('inputValue-X').value;
    let y = document.getElementById('inputValue-Y').value;
    document.getElementById('Value').innerHTML = "Square = "+ parseFloat(x * y)+" cm<sup>2</sup>";
})
btn_circle.addEventListener("click", () =>{
    let r = document.getElementById('inputValue-R').value;
    document.getElementById('Value').innerHTML = "Circle = "+ parseFloat(3.14 * (r * r))+" cm<sup>2</sup>";
})
btn_triangle.addEventListener("click", () =>{
    let h = document.getElementById('inputValue-H').value;
    let b = document.getElementById('inputValue-B').value;
    document.getElementById('Value').innerHTML = "Triangle = "+ parseFloat(1 / 2 *(h * b))+" cm<sup>2</sup>";
})