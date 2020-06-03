import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SoftService } from '../soft.service';
import { Software } from '../software';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  softForm: FormGroup;

  constructor(private router: Router, private softService: SoftService) {}

  ngOnInit(): void {
    this.softForm = new FormGroup({
      title: new FormControl(null),
      content: new FormControl(null),
      excerpt: new FormControl(null),
    });
  }
  // create a new software data
  create() {
    console.log(this.softForm.value);
    this.softService.create(this.softForm.value).subscribe(
      (data: any) => {
        this.router.navigateByUrl('/soft');
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
}
