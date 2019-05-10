import { Component, OnInit } from '@angular/core';
import { Bike } from '../../models/bike';
import { BikesService } from '../../services/bikes.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss']
})
export class BikesComponent implements OnInit {

  bikes: Bike[];

  constructor(private bikesService : BikesService) { }

  ngOnInit() {

     this.bikesService.getBikes()
     .subscribe(data =>
      {
      console.log('data is ::::', data);
        // use this with the token in square brakets when posting only
        this.bikes = data['-LeXJcDG-sJ5vOwa15gr'];   
        // this.bikes = data;
         console.log(JSON.stringify(data));
         console.log ('bikes are ::: ', this.bikes);
      });

    

  }

}
