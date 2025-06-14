import { Component } from '@angular/core';
import * as THREE from 'three';
import { Canvas } from './components/canvas/canvas';
import { ControlUi } from './components/control-ui/control-ui';

@Component({
  selector: 'app-root',
  imports: [Canvas, ControlUi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
