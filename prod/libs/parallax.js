document.addEventListener('mousemove', parallax);

function parallax(e) {
	this.querySelectorAll('[data-parallax-speed]').forEach(layer => {
		let speed = layer.getAttribute('data-parallax-speed');
		let x = (window.innerWidth - e.clientX * speed) / 100;
		let y = (window.innerWidth - e.clientY * speed) / 100;
		layer.style.transform = `translate(${x}px, ${y}px)`;
	});
}

document.querySelectorAll('.tab-logos-container img').forEach((el) => {
  el.addEventListener('mousemove', (e) => {
    // if(!e.currentTarget.dataset.parallaxSpeed || e.currentTarget.dataset.parallaxSpeed == 0) {
    //   e.currentTarget.dataset.parallaxSpeed = 10;
    // }
    //console.log(e.currentTarget.getBoundingClientRect())
  });
  el.addEventListener('mouseout', (e) => {
    // e.currentTarget.dataset.parallaxSpeed = 0;
  });
  
})



const globalMousePosText = document.getElementById('global-mouse-pos');
const localMousePosText = document.getElementById('local-mouse-pos');

let localMousePos = { x: undefined, y: undefined };
let globalMousePos = { x: undefined, y: undefined };
let targetOffset = { x: undefined, y: undefined };

/* window.addEventListener('mousemove', (event) => {
  const localX = event.clientX - event.target.offsetLeft;
  const localY = event.clientY - event.target.offsetTop;

  targetOffset = { x: event.target.offsetLeft, y: event.target.offsetTop };
  localMousePos = { x: localX, y: localY };
  globalMousePos = { x: event.clientX, y: event.clientY };
 
  globalMousePosText.textContent = `(${globalMousePos.x}, ${globalMousePos.y})`;
  localMousePosText.textContent = `(${localMousePos.x}, ${localMousePos.y})`; 
  console.log(globalMousePos.x, globalMousePos.y);
  console.log(localMousePos.x, localMousePos.y);
}); */