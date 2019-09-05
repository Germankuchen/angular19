import { Component, OnInit, Input } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input()
  labels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  @Input()
  data: SingleDataSet = [350, 450, 100];

  @Input()
  leyenda: string;

  doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
