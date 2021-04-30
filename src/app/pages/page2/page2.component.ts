import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import List from '../../../assets/data.json';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  public list: { no: number, machine: string, Operation: string, Parts: number, Time: number }[] = List;
  constructor() { }

  ngOnInit(): void {
    this.loadLineChart();
    this.loadBarChart();
  }
  loadBarChart() {
    new Chart(document.getElementById("bar-chart"), {
      type: 'bar',
      data: {
        labels: ["M101", "M102", "M103"],
        datasets: [
          {
            label: "Machine Parts",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
            data: [this.list[0].Parts, this.list[1].Parts, this.list[2].Parts],
          }
        ]
      },
    });
  }

  loadLineChart() {
    var speedCanvas = document.getElementById("speedChart");
    var machineData = [this.list[0].Time, this.list[1].Time, this.list[2].Time];

    var dataFirst = {
      data: machineData,
      fill: false,
      borderColor: '#51CACF',
      backgroundColor: 'transparent',
      pointBorderColor: '#51CACF',
      pointRadius: 4,
      pointHoverRadius: 4,
      pointBorderWidth: 8,
    };

    var speedData = {
      labels: ["M101", "M102", "M103"],
      datasets: [dataFirst]
    };

    var chartOptions = {
      legend: {
        display: false,
        position: 'top'
      }
    };

    var lineChart = new Chart(speedCanvas, {
      type: 'line',
      hover: false,
      data: speedData,
      options: chartOptions
    });
  }

}
