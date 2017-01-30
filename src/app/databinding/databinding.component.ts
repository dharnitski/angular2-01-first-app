import { Component } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  stringInterpolation = 'String Interpolation';

  mumberInterpolation = 2;

  onTest() {
    return true;
  }

}
