import { Component, OnInit } from '@angular/core';
import { BikesService } from '../../services/bikes.service';
import { Bike } from '../../models/bike'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  bikes: Bike[];

  constructor(private bikesService: BikesService) { }

  ngOnInit() {

    this.bikes = [
      {
        id: 1,
        title: "Mongoose Pro",
        price: 400,
        selected: false
      },
      {
        id: 2,
        title: "PK Ripper",
        price: 800,
        selected: false
      },
      {
        id: 3,
        title: "Rickman Freestyler",
        price: 500,
        selected: false
      },
      {
        id: 4,
        title: "Dimond Back Viper",
        price: 600,
        selected: false
      },
    ]
  }




  addBike() {
    this.bikesService.storeBikes(this.bikes).subscribe((response) => console.log(response));
  }

}
