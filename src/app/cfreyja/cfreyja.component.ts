import { Component, OnInit } from '@angular/core';
import { SfreyjaService } from '../sfreyja.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import * as CanvasJS from './canvasjs.min.js';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import exportFromJSON from 'export-from-json'


@Component({
  selector: 'app-cfreyja',
  templateUrl: './cfreyja.component.html',
  styleUrls: ['./cfreyja.component.css'],
})


export class CfreyjaComponent implements OnInit {
  //var CanvasJS = require('./canvasjs.min');
  web = "http://freyja.test/api/votacion";
  FREYJA : any = 'DEFAULT';
  labelsC : any[] = ['DEFAULT'];
  dataC : any[] = [0];
  chart: any;
  totalHabilitados : number = 7332926;


  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] =
  [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Votación %' }
  ];


  constructor(
    public http : HttpClient,
    public sfrey: SfreyjaService,
    ) {  }

  ngOnInit() { }

  /**
   * Evento para llamar a la API.
   * @param geo Parametro para acceder a la api (0:pais|1:departamento)
   */
  apiVotacion (geo: number){
    const votoTotal:number = 0;
    console.log(this.web);
    this.sfrey.getVotacion(geo).subscribe(
      (res:any) => {
        this.barChartLabels = [];
        this.barChartData[0].data = [];
        this.labelsC = [];
        this.dataC = [];
        this.FREYJA = res;
        res.forEach( (element:any) => {
          this.labelsC.push(element.nombres);
          this.barChartLabels.push(element.nombres);

          //this.dataC.push(element.votoT);
          this.barChartData[0].data.push(
            ((element.votoT/this.totalHabilitados)*100)
            ).toFixed(2);
        });
      }
    );
    console.log(this.barChartData[0].data.length);// 7
    this.FREYJA = geo;
  }

  toXLS(){
    const data = this.FREYJA
    const fileName = 'download'
    const exportType = 'csv'
    exportFromJSON({ data, fileName, exportType })
  }
}
