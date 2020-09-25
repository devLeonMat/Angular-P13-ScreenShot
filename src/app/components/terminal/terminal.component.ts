import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  @Input() switchValue: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
