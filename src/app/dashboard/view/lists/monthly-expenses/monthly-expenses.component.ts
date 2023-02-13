import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-monthly-expenses',
  templateUrl: './monthly-expenses.component.html',
  styleUrls: ['./monthly-expenses.component.scss']
})
export class MonthlyExpensesComponent implements OnInit {

  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    this.chart = new Chart("monthly", {
      type: 'doughnut',
      data: {
        labels: ['Alimentación', 'Cuentas y pagos', 'Transporte', 'Ropa', 'Diversión', 'Salud e higiene', 'Otros'],
        datasets: [{
          label: 'Monto',
          data: [1200, 1900, 3000, 5000, 2000, 3000, 1500],
          borderWidth: 1
        }]
      },
      options: {
        radius: '80%'
      }
    });
  }

}
