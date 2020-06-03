import { Component, OnInit } from '@angular/core';
import { SoftService } from '../soft.service';

import { Software } from '../software';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private software: Software[];
  init = 1;
  last = 25;

  constructor(private softService: SoftService) {}

  ngOnInit(): void {
    this.getSoftwareList(this.init, this.last);
  }
  // get software list with pagination
  getSoftwareList(init, last) {
    this.softService.getList(init, last).subscribe((data: Software[]) => {
      this.software = data.data;
    });
  }
  // pagination function
  go() {
    this.init = this.last;
    this.last = this.last + 25;
    this.getSoftwareList(this.init, this.last);
  }
  // pagination function

  back() {
    this.init = this.last;
    this.last = this.last - 25;
    this.getSoftwareList(this.init, this.last);
  }
}
