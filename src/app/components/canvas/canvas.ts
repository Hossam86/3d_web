import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { RenderingService } from '../../services/rendering.service';
import * as THREE from 'three';

@Component({
  selector: 'app-canvas',
  imports: [],
  templateUrl: './canvas.html',
  styleUrl: './canvas.css'
})
export class Canvas implements AfterViewInit {
  @ViewChild('canvasContainer', { static: true }) containerRef!: ElementRef;

  constructor(private renderService:RenderingService) { }

  ngAfterViewInit(): void {
    // This method is called after the view has been initialized
    
    // Initialize the rendering service
    const container = this.containerRef.nativeElement;
    // const { width, height } = container.getBoundingClientRect();
    const width = container.clientWidth;
    const h = container.clientHeight;
    const height = 900;
    this.renderService.init(container, width, height);
  }
}
