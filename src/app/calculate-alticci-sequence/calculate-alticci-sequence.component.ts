import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CalculateAlticciSequenceService } from './calculate-alticci-sequence.service';

@Component({
  selector: 'app-calculate-alticci-sequence',
  templateUrl: './calculate-alticci-sequence.component.html',
  styleUrls: ['./calculate-alticci-sequence.component.css']
})
export class CalculateAlticciSequenceComponent implements OnInit {
  sequence = "";
  form: FormGroup = new FormGroup({})

  constructor(
    private formBuilder: FormBuilder,
    private calculateAlticciSequenceService: CalculateAlticciSequenceService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      index : new FormControl()
    });
  }

  onCalulateSequence() {
    const index = this.form.value.index
    this.calculateAlticciSequenceService.calculateSequence(index).subscribe(
      sequence => this.sequence = `${sequence}`
      ,(error: {error: { message: string; }}) => {
        this.sequence =  error.error.message
      }
    )
  }
}
