import { Component, OnInit } from '@angular/core';
import { DataService } from '../share/data-service';
import { Users } from '../share/user.modal';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css']
})
export class DetailsComponentComponent implements OnInit {
  public data: Users;
  constructor(private dataService: DataService) {

  }
  showConfig() {
    this.dataService.getConfig()
      .subscribe((data => this.data = data))
  }


  ngOnInit() {
    this.showConfig();
    console.log(this.data);
  }

}
