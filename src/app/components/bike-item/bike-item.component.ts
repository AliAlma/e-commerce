import { Component, OnInit, Input } from '@angular/core';
import { Bike } from 'src/app/models/bike';
import { BikesService } from '../../services/bikes.service';


@Component({
  selector: 'app-bike-item',
  templateUrl: './bike-item.component.html',
  styleUrls: ['./bike-item.component.scss']
})
export class BikeItemComponent implements OnInit {

  @Input() bike: Bike;
  constructor(private bikesService: BikesService) { }

  ngOnInit() {
  }



  // setting style classes

  setClasses() {
    let classes = {
      bike: true,
      'is-selected': this.bike.selected,
    }
    return classes;
  }


  //toggle checkbox
  onToggle(bike) {
    
    bike.selected = !bike.selected;
    console.log('toggle');
    console.log('bike is ::::', bike);

    this.bikesService.toggleBike(bike)
    .subscribe(bikes =>
      console.log(bikes),
    );
  }

}
