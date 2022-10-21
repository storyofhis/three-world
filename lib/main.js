// import * as THREE from 'three';

var scene = new THREE.Scene()
var cam = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 1000)
var renderer = new THREE.WebGLRenderer()

// BoxGeometry
var box = new THREE.BoxGeometry(1,1,1)
var boxMat = new THREE.MeshBasicMaterial({color: 0x00ff00})
var boxMesh = new THREE.Mesh(box, boxMat)

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
let material = new THREE.MeshBasicMaterial({vertexColors: THREE.VertexColors})
    // opacity: .2
    // side: THREE.DoubleSide
// });
let mesh = new THREE.Mesh(geometric, material)

scene.add(boxMesh)
scene.add(mesh)

cam.position.z = 5;


renderer.setSize(innerWidth, innerHeight)
document.body.appendChild(renderer.domElement)

window.addEventListener("resize", function () {
    renderer.setSize(this.window.innerWidth, this.window.innerHeight)
    cam.aspect = this.window.innerWidth / this.window.innerHeight
    cam.updateProjectionMatrix()
})

function draw() {
    requestAnimationFrame(draw)
    boxMesh.rotation.y += 0.01;
    boxMesh.rotation.x += 0.01;

    mesh.rotation.y += 0.01
    mesh.rotation.x += 0.01
    renderer.render(scene, cam)
}

draw()