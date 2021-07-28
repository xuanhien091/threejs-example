let scene, camera, renderer, object;

scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const light = new THREE.AmbientLight(0xFFFFFF);
scene.add(light);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
	color: 0x00FFFF
});
object = new THREE.Mesh(geometry, material);
scene.add(object);

// Camera
var width = 460;
var height = 640;
camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 5;

renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector("#myCanvas")
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(460, 640);

// animation

const animate = function(){
	requestAnimationFrame(animate);

	object.rotation.x += 0.01;
	object.rotation.y += 0.01;

	renderer.render(scene, camera);
}

// controls

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();

animate();
