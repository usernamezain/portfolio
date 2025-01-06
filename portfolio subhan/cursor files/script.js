const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".c-circle");

const colors = [
"#6a0dad", "#8b00ff", "#9b4df4", "#a758f0", 
            "#b261e3", "#bb6bd7", "#c475c2", "#cd7fb0", 
            "#d68b9f", "#e1978e", "#e8a57d", "#f1b26c", 
            "#f9c55a", "#ffcc48", "#ff3333"
];

// background: linear-gradient(90deg, #760e6a, #90006a, #a90066, #c0005e, #d50053, #e70044, #f50030, #ff1313);

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
