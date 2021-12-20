var camera, scene, renderer;
var mesh;

init();
animate();

function init() {
  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#earth"),
    alpha: true,
  });

  camera = new THREE.PerspectiveCamera(50, 1, 1, 100);
  camera.position.z = 25;

  scene = new THREE.Scene();

  var geometry = new THREE.SphereGeometry(10, 100, 100);
  var material = new THREE.MeshPhongMaterial();

  THREE.ImageUtils.crossOrigin = "";
  material.map = THREE.ImageUtils.loadTexture(
    "../static/assets/earth-shader-marked.png"
  );

  mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x += 0.5;
  scene.add(mesh);

  var light1 = new THREE.AmbientLight(0xffffff);
  light1.position.set(100, 50, 100);
  scene.add(light1);
}

function resize() {
  var width = renderer.domElement.clientWidth;
  var height = renderer.domElement.clientHeight;
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

function animate() {
  resize();
  mesh.rotation.y += 0.002;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
