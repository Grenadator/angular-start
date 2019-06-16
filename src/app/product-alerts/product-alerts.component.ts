import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  // The @Input decorator indicates that the property value will be passed in from the component's parent
  @Input() product;
  @Output() notify = new EventEmitter();

}
