import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas-card',
  templateUrl: './canvas-card.component.html',
  styleUrls: ['./canvas-card.component.scss']
})
export class CanvasCardComponent implements OnInit {

  @Input() card: any;
  constructor() { }

  ngOnInit() {
  }

}
