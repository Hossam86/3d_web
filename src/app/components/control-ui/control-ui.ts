import { Component } from '@angular/core';
import { RenderingService } from '../../services/rendering.service';

@Component({
  selector: 'app-control-ui',
  imports: [],
  templateUrl: './control-ui.html',
  styleUrl: './control-ui.css'
})
export class ControlUi {

  boxWidth: number = 1.0;
  boxHeight: number = 1.0;
  boxDepth: number = 1.0;

  constructor(private renderingService: RenderingService) { }
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
}
