const init_all = () => {
  // Renderers
  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#header-canvas"),
  });

  renderer_earth = new THREE.WebGLRenderer({
    canvas: document.querySelector("#earth"),
    alpha: true,
  });

  // Cameras
  camera = new THREE.PerspectiveCamera(50, 1, 1, 100);
  camera.position.set(0, 0, 10);
  camera.lookAt(0, 0, 0);

  camera_earth = new THREE.PerspectiveCamera(50, 1, 1, 100);
  camera_earth.position.set(0, 10, 25);
  camera_earth.lookAt(0, 0, 0);

  // Scenes
  scene = new THREE.Scene();

  scene_earth = new THREE.Scene();

  // Geometries
  const geometry = new THREE.PlaneGeometry(30, 15);
  const material = new THREE.MeshPhongMaterial();
  const plane = new THREE.Mesh(geometry, material);
  plane.rotation.z = 0.3;
  scene.add(plane);

  const geometry_earth = new THREE.SphereGeometry(10, 100, 100);
  const material_earth = new THREE.MeshPhongMaterial();
  mesh = new THREE.Mesh(geometry_earth, material_earth);
  mesh.rotation.y -= 0.143;
  scene_earth.add(mesh);

  const geometry_marker = new THREE.SphereGeometry(0.3, 10, 10);
  geometry_marker.translate(6.225, 7.826, 0);
  const material_marker = new THREE.MeshPhongMaterial({ color: 0xed4545 });
  mesh_marker = new THREE.Mesh(geometry_marker, material_marker);
  scene_earth.add(mesh_marker);

  // Textures
  THREE.ImageUtils.crossOrigin = "";
  material.map = THREE.ImageUtils.loadTexture("../static/assets/bg-try.png");

  material_earth.map = THREE.ImageUtils.loadTexture(
    "../static/assets/blue-planet.png"
  );

  // Lightings
  const color = 0xffffff;
  const intensity = 0.9;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-0.15, 0.15, 10);
  scene.add(light);

  const light1 = new THREE.AmbientLight(0xffffff);
  light1.position.set(100, 50, 100);
  scene_earth.add(light1);

  // Callbacks
  const canvas = document.querySelector("#header-canvas");
  document.querySelector("body").addEventListener("mousemove", (e) => {
    x =
      (2 * (e.clientX - canvas.getBoundingClientRect().x)) /
        canvas.getBoundingClientRect().width -
      1;
    if (x < 0.2) {
      x = 0.2;
    }
    if (x > 0.8) {
      x = 0.8;
    }
    y =
      (2 * (e.clientY - canvas.getBoundingClientRect().y)) /
        canvas.getBoundingClientRect().height -
      1;

    plane.rotation.x = y / 30;
    plane.rotation.y = x / 15;
  });

  // Local time
  const localTime = document.querySelector("#local-time");
  date = new Date();
  localTime.innerText = date.toLocaleTimeString(
    [],
    (options = {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Berlin",
    })
  );
};

const resize = (renderer, camera) => {
  const width = renderer.domElement.clientWidth;
  const height = renderer.domElement.clientHeight;
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};

const animate = (renderer, scene, camera) => {
  resize(renderer, camera);
  renderer.render(scene, camera);
};

const animate_all = () => {
  mesh.rotation.y += 0.002;
  mesh_marker.rotation.y += 0.002;
  animate(renderer, scene, camera);
  animate(renderer_earth, scene_earth, camera_earth);
  requestAnimationFrame(animate_all);
};

init_all();
animate_all();
