import {Component, OnInit} from '@angular/core';
import opt from '../../../assets/data/cardOptions.json';
import {OptionsModel} from "../../models/options.model";
import html2canvas from "html2canvas";
import {saveAs} from 'file-saver';
import * as moment from 'moment';

@Component({
  selector: 'app-screen-shoot-types',
  templateUrl: './screen-shoot-types.component.html',
  styleUrls: ['./screen-shoot-types.component.css']
})
export class ScreenShootTypesComponent implements OnInit {

  options: OptionsModel = opt;
  value: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  setValue(val: string) {
    this.value = val;
  }

  generateImg() {
    const input = document.getElementById('screen');
    html2canvas(input, {scrollY: -window.scrollY}).then(canvas => {
      canvas.toBlob(function (blob) {
        saveAs(blob, `Reporte_${moment().format('DDMMYYYY')}.png`);
      });
    }, reason => {
      console.log(reason)
    });
  }


}
