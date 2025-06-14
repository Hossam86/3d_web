import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { initSplineTexture } from 'three/examples/jsm/Addons.js';

@Injectable({
  providedIn: 'root'
})
export class RenderingService {
  // This service is responsible for managing the rendering context and operations
  scene: THREE.Scene = new THREE.Scene();
  camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
  renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({ antialias: true });
  canvas: HTMLElement | null = null;
  meshes: {[key:string]:THREE.Mesh} = {};

  constructor() { }

  init(canvasElement: HTMLElement, width: number, height: number): void {
    this.canvas = canvasElement;
    this.camera.position.z = 1;

    this.renderer.setSize(width, height);
    this.canvas.appendChild(this.renderer.domElement);
    const mesh = this.createMesh();
    this.meshes['Box'] = mesh;
    this.scene.add(mesh);
    this.startRenderingLoop();
  }

  private createMesh(): THREE.Mesh { 
    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const material = new THREE.MeshNormalMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
  }

  startRenderingLoop(): void {
    const animate = (time: number) => {
      if (this.meshes['Box']) {
        this.meshes['Box'].rotation.x = time / 2000;
        this.meshes['Box'].rotation.y = time / 1000;
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
  
}
