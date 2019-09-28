import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {
  displayedColumns: string[] = ['intervention_date', 'anomaly'];

  dataSource = [
    { intervention_date: '1569521130', anomaly: 16257 },
    { intervention_date: '1569434730', anomaly: 12332 },
    { intervention_date: '1566842730', anomaly: 13221 }
  ];

  constructor() {}

  ngOnInit() {}
}
