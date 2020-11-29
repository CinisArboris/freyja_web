import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class SfreyjaService {
  // Api principal
  web = 'http://freyja.test/api/votacion/';


  constructor(public http : HttpClient) {
  }

  /**
   * Recurso principal para extraer los datos de votacion.
   * @param geo : Indica el nivel de la api al cual acceder.
   */
  getVotacion (geo:number){
    return this.http.get(this.web+geo)
    .pipe(
      map( result => result)
    );

    //this.http.get(this.web+geo).subscribe( (res:any) => {
      //console.log(res);
      //res.forEach( (element:any) => {
        //console.log(element);
      //});
    //});

    //const observableFab = new Observable(subscriber => {
    //  subscriber.next('Helado 1');
    //  subscriber.complete();
    //});

    //const observerFiltr = {
    //  next(x) { console.log('Salida: ' + x); },
    //  error(err) { console.error('Ops! algo pasó: ' + err); },
    //  complete() { console.log('Completó!'); }
    //};

    //observableFab.subscribe(
    //  observerFiltr
    //);

    //console.log('1111111111');
    //observableFab.pipe(
    //  map(data => (data)+ " modificado :)" )
    //  ).subscribe(observerFiltr);
  }
}


