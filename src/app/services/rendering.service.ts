import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { initSplineTexture } from 'three/examples/jsm/Addons.js';

@Injectable({
  providedIn: 'root'
})
export class RenderingService {
  // This service is responsible for managing the rendering context and operations
  scene: THREE.Scene = new THREE.Scene();
  camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({ antialias: true });
  canvas: HTMLElement | null = null;
  meshes: { [key: string]: THREE.Mesh } = {};
  ambientLightColor: THREE.Color = new THREE.Color(255, 255, 255); // White light
  directionalLightColor: THREE.Color = new THREE.Color(255, 255, 255); // White light
  meshColor: THREE.Color = new THREE.Color(255, 255, 0); // Green color

  constructor() { }

  init(canvasElement: HTMLElement, width: number, height: number): void {
    this.canvas = canvasElement;
    this.camera.position.z = 3;

    this.renderer.setSize(width, height);
    this.canvas.appendChild(this.renderer.domElement);
    //lights 
    const ambientLight = new THREE.AmbientLight(this.ambientLightColor);
    const directionalLight = new THREE.DirectionalLight(this.directionalLightColor, 0.5);
    this.scene.add(ambientLight);
    this.scene.add(directionalLight);

    //mesh
    const mesh = this.createMesh();
    this.meshes['Box'] = mesh;
    this.scene.add(mesh);
    this.startRenderingLoop();
  }

  private createMesh(): THREE.Mesh {
    const geometry = new THREE.BoxGeometry(1.0, 1.0, 1.0);

    //material
    const defaultMaterials = Array(6).fill(null).map(() => new THREE.MeshBasicMaterial({ color: 0xffffff }));
    const mesh = new THREE.Mesh(geometry, defaultMaterials);
    return mesh;
  }

  startRenderingLoop(): void {
    const animate = (time: number) => {
      if (this.meshes['Box']) {
        this.meshes['Box'].rotation.y = time / 2000;
      }
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }

  dispose(): void {
    if (this.canvas && this.renderer) {
      this.canvas.removeChild(this.renderer.domElement);
      this.renderer.dispose();
      this.scene.clear();
      this.meshes = {};
    }
  }


  updateBoxDimensions(width: number, height: number, depth: number): void {
    if (this.meshes['Box']) {
      const geometry = new THREE.BoxGeometry(width, height, depth);
      this.meshes['Box'].geometry.dispose(); // Dispose of the old geometry
      this.meshes['Box'].geometry = geometry; // Update the mesh with the new geometry
    }
  }

  // texture update method
  updateBoxFaceTexture(meshName: string, faceIndex: number, imageUrl: string): void {
    if (this.meshes[meshName]) {
      const mesh = this.meshes[meshName];
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(imageUrl, (texture) => {
        // Create a new material for the specific face
        const materials = mesh.material as THREE.MeshBasicMaterial[];
        if (!materials) {
          console.error(`Mesh ${meshName} does not have a valid material.`);
          return;
        }
        materials[faceIndex] = new THREE.MeshBasicMaterial({ map: texture });
        mesh.material = materials; // Update the mesh with the new materials
      });
    } else {
      console.error(`Mesh ${meshName} not found.`);
    }
  }
}
