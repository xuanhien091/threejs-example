let scene, camera, renderer, object;
// シーンを作成
scene = new THREE.Scene();
scene.background = new THREE.Color(0xFFFFFF);

//ライトを作成
var ambientLight = new THREE.AmbientLight(0xFFFFFF);
scene.add(ambientLight);

// 3Dを作成
const loader = new THREE.GLTFLoader();
loader.load('models/candy/scene.gltf', function (gltf) {
	gltf.scene.scale.set(2, 2, 2);
	object = gltf.scene;
	scene.add(object);
}, undefined, function (error) {
	console.error(error);

});

//　カメラを作成
camera = new THREE.PerspectiveCamera(75, 460 / 640, 0.1, 1000);
camera.position.z = 5;

//レンダラーを作成
renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#myCanvas')
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(460, 640);

//アニメーション
const animate = function () {
	requestAnimationFrame(animate);
	if(object){
		object.rotation.y += 0.01;
	}
	

	renderer.render(scene, camera);
};


var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();

animate();