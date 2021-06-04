import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { estudioInterface } from '../modelos/estudio.interface';
import { statsInterface } from '../modelos/stats.interface';

import { CustomHttpClient } from './http-client.service';
import { map } from 'rxjs/operators';

import { Globals } from '../global/globals';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  public static detailStudy: any;

  constructor(        
        private http: CustomHttpClient,
        private servicioHttp: HttpClient
  ) {
   }

   insertStudy(study): Observable<estudioInterface>{

    let body = study;
    return this.http.post(Globals.API_ENDPOINT + Globals.GET_POST_STUDY,body,null).pipe(
                map(data => {
                    if (data) {
                        let anyData = data as estudioInterface;
                        return anyData;
                    }
                    })

            );
    
   }
   getStudies(): Observable<estudioInterface[]>{
    return this.http.get(Globals.API_ENDPOINT + Globals.GET_POST_STUDY,false,null).pipe(
                map(data => {
                    if (data) {
                        let studies = data["results"] as estudioInterface[];
                        return studies;
                    }
                    })

            );
    
   }
   getFilteredStudies(key,values): Observable<estudioInterface[]>{

    var url = Globals.API_ENDPOINT + Globals.GET_SEARCH_STUDY.replace("#key",key).replace("#values",values);
    return this.http.get(url,false,null).pipe(
                map(data => {
                    if (data) {
                        let studies = data["results"] as estudioInterface[];
                        return studies;
                    }
                    })

            );
    
   }
   getStats(): Observable<statsInterface>{
    return this.http.get(Globals.API_ENDPOINT + Globals.GET_STATS,false,null).pipe(
                map(data => {
                    if (data) {
                        let stats = data as statsInterface;
                        return stats;
                    }
                    })

            );
    
   }

   

}
