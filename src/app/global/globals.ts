import {Injectable, Inject} from '@angular/core';

@Injectable()
export class Globals{
    UsuarioLogueado: boolean = false;
    public static API_ENDPOINT = 'https://api-meli-covid.rj.r.appspot.com/'; // server

    //public static API_ENDPOINT = 'http://localhost:7080/'; //local server
    
    public static GET_POST_STUDY = 'covid/checks';

    public static GET_SEARCH_STUDY = 'covid/checks/search?key=#key&values=#values';
    public static GET_STATS = 'covid/stats';


}
