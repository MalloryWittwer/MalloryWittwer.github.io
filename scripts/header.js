var camera, scene, renderer;
var mesh;

const init = () => {
  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#header-canvas"),
  });

  camera = new THREE.PerspectiveCamera(50, 1, 1, 100);
  camera.position.set(0, 0, 10);
  camera.lookAt(0, 0, 0);

  scene = new THREE.Scene();

  const geometry = new THREE.PlaneGeometry(30, 30);
  const texture = new THREE.TextureLoader().load("../static/assets/bg-rotated.png");
  const material = new THREE.MeshPhongMaterial( { map: texture } );
  const plane = new THREE.Mesh(geometry, material);
  scene.add(plane);

  const color = 0xffffff;
  const intensity = 0.9;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-0.15, 0.15, 10);
  scene.add(light);

  const canvas = document.querySelector("#header-canvas");
  document.querySelector("body").addEventListener("mousemove", (e) => {
    x =
      (2 * (e.clientX - canvas.getBoundingClientRect().x)) /
        canvas.getBoundingClientRect().width -
      1;
    if (x < 0.2) { x = 0.2 }
    if (x > 0.8) { x = 0.8 }
    y =
      (2 * (e.clientY - canvas.getBoundingClientRect().y)) /
        canvas.getBoundingClientRect().height -
      1;

    plane.rotation.x = y / 30;
    plane.rotation.y = x / 15;
  });
};

const resize = () => {
  const width = renderer.domElement.clientWidth;
  const height = renderer.domElement.clientHeight;
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};

const animate = () => {
  resize();
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

init();
animate();
