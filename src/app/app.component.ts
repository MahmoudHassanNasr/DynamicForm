import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'DynamicForm';

  jsonObj: any;
  myFormGroup: FormGroup;
  showForm: boolean = false;
  jsonList: any;

  constructor() { }

  ngOnInit() {

  }


  getJsonObj() {
      
    this.showForm = true;
    var json = this.jsonObj;    
    this.jsonList = JSON.parse(json);
    let group = {}
    this.jsonList.forEach(input_template => {
      group[input_template.label] = new FormControl('');
    })
    this.myFormGroup = new FormGroup(group);
  }

  save() {
    var values = this.myFormGroup.value;
    console.log("******", values)
  }
}


  export const form_template = [
    {
      "type": "textBox",
      "label": "Name"
    },
    {
      "type": "number",
      "label": "Age"
    },
    {
      "type": "checkbox",
      "label": "check"

    },

    {
      "type": "radio",
      "label": "Gender",
      "options": [{ "label": "Male" }, { "label": "Female" }]
    },
    {
      "type": "select",
      "label": "book",
      "options": ["Ahmed ", "Ali", " Hassan"]
    },
    {
      "type": "Submit-button",
      "label": "Save"

    },
    {
      "type": "Cancel-button",
      "label": "Cancel"

    }
  ]