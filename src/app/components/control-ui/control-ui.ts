import { Component } from '@angular/core';
import { RenderingService } from '../../services/rendering.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-control-ui',
  imports: [CommonModule],
  templateUrl: './control-ui.html',
  styleUrl: './control-ui.css'
})
export class ControlUi {

  boxWidth: number = 1.0;
  boxHeight: number = 1.0;
  boxDepth: number = 1.0;
  faces = ['Right (+X)', 'Left (-X)', 'Top (+Y)', 'Bottom (-Y)', 'Front (+Z)', 'Back (-Z)'];


  constructor(private renderingService: RenderingService) { }

  // box dimensions change handlers
  onBoxWidthChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = parseFloat(input.value);
    if (!isNaN(value) && value > 0) {
      this.boxWidth = value;
      this.renderingService.updateBoxDimensions(this.boxWidth, this.boxHeight, this.boxDepth);
    }
  }

  onBoxHeightChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = parseFloat(input.value);
    if (!isNaN(value) && value > 0) {
      this.boxHeight = value;
      this.renderingService.updateBoxDimensions(this.boxWidth, this.boxHeight, this.boxDepth);
    }
  }
  onBoxDepthChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = parseFloat(input.value);
    if (!isNaN(value) && value > 0) {
      this.boxDepth = value;
      this.renderingService.updateBoxDimensions(this.boxWidth, this.boxHeight, this.boxDepth);
    }
  }

  // image upload handler
  onFileSelected(event: Event, faceIndex: number): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const imageUrl = e.target?.result as string;
        this.renderingService.updateBoxFaceTexture('Box', faceIndex, imageUrl);
      };
      reader.readAsDataURL(file);
    }
  }



}
