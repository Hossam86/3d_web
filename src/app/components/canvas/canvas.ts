import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { RenderingService } from '../../services/rendering.service';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-canvas',
  imports: [],
  templateUrl: './canvas.html',
  styleUrl: './canvas.css'
})
export class Canvas implements AfterViewInit {
  @ViewChild('canvasContainer', { static: true }) containerRef!: ElementRef;

  constructor(private renderService: RenderingService) { }

  ngAfterViewInit(): void {
    // Initialize the rendering service
    const container = this.containerRef.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;
    this.renderService.init(container, width, height);
  }

  @HostListener('window:resize')
  onResize() {
    this.resizeRenderer();
  }

  private resizeRenderer() {
    const width = this.containerRef.nativeElement.clientWidth;
    const height = this.containerRef.nativeElement.clientHeight;
    this.renderService.setSize(width, height);
  }
}
