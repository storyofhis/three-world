// import * as THREE from 'three';

var scene = new THREE.Scene()
var cam = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 1000)
var renderer = new THREE.WebGLRenderer()

// BoxGeometry
var box = new THREE.BoxGeometry(1,1,1)
const grass_texture = new THREE.TextureLoader().load('./image/grass.jpeg')
const brick_texture = new THREE.TextureLoader().load('./image/brick.jpeg')

// MeshBasicMaterial
var boxMat = new THREE.MeshBasicMaterial({
    map : grass_texture,
    // color: 0x00ff00
})
var boxMesh = new THREE.Mesh(box, boxMat)

// Lighting 
let light = new THREE.PointLight(0xffffff, 1)
light.position.set(0,3,2)

// var light2 = new THREE.PointLight(0xffffff, 1)
// light2.position.set(0,0,-2)

// let lightPhong = new THREE.PointLight(0xffffff, 1)
// lightPhong.position.set(0,3,2)

// MeshLambertMaterial
var MatLambert = new THREE.MeshLambertMaterial({
    map: grass_texture,
    // emissive: 0xff00ff,
    emissiveIntensity: 0.2,
    transparent: true,
    side: THREE.DoubleSide,
})
var MeshLambert = new THREE.Mesh(box, MatLambert)
MeshLambert.position.set(2,0,0)

// MeshPhongMaterial
var MatPhong = new THREE.MeshPhongMaterial({
    // map: grass_texture,
    map: brick_texture,
    // emissiveIntensity: 0.2,
    // transparent: true,
    // side: THREE.DoubleSide,
    shininess: 100,
    // bumpMap: brick_texture,
    bumpScale: 0.01,
})
var MeshPhong = new THREE.Mesh(box, MatPhong)
MeshPhong.position.set(-2, 0,0)


// BufferGeometry
const geometric = new THREE.BufferGeometry();
const vertices = new Float32Array([
    -1.0, -1.0, 1.0,
    1.0, 1.0, 1.0,
    -1.0, 1.0, 1.0,
    // 1.5, 1.5, 0.5,
    // -1.5, -1.5, 0.5,
    1.0, -1.0, 1.0,

    -1.0, -1.0, -1.0,
    1.0, 1.0, -1.0, 
    -1.0, 1.0, -1.0,
    1.0, -1.0, -1.0,
])
let colors = new Float32Array([
    1.0, 0.0, 0.0,
    1.0, 0.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    0.0, 1.0, 0.0,
    0.0, 1.0, 0.0,
    0.0, 0.0, 1.0,
    0.0, 0.0, 1.0,
])
geometric.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
geometric.setAttribute('color', new THREE.BufferAttribute(colors, 3))
geometric.setIndex([
    // front
    0,3,1,
    1,2,0,

    // back
    4,6,5,
    5,7,4,

    // left
    4,0,2,
    2,6,4,

    // right
    3,7,5,
    5,1,3,

    // top
    1,5,6,
    6,2,1,

    // down
    0,4,7,
    7,3,0,
])
let material = new THREE.MeshBasicMaterial({vertexColors: THREE.VertexColors, wireframe: true})
    // opacity: .2
    // side: THREE.DoubleSide
// });
let mesh = new THREE.Mesh(geometric, material)

scene.add(boxMesh)
scene.add(mesh)
scene.add(MeshLambert)
scene.add(light)
// scene.add(light2)
scene.add(MeshPhong)
// scene.add(lightPhong)

cam.position.z = 5;


renderer.setSize(innerWidth, innerHeight)
document.body.appendChild(renderer.domElement)

window.addEventListener("resize", function () {
    var width = this.window.innerWidth;
    var height = this.window.innerHeight;
    renderer.setSize(width, height)
    cam.aspect = width / height
    cam.updateProjectionMatrix()
})

function draw() {
    requestAnimationFrame(draw)
    boxMesh.rotation.y += 0.01;
    boxMesh.rotation.x += 0.01;

    mesh.rotation.y += 0.01
    mesh.rotation.x += 0.01

    MeshLambert.rotation.y += 0.01
    MeshLambert.rotation.x += 0.01

    MeshPhong.rotation.y += 0.01
    MeshPhong.rotation.x += 0.01

    renderer.render(scene, cam)
}

draw()