import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  mobileQuery: MediaQueryList;

  //fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerNav = [
    {name: "Usuarios", route:"usuarios", icon:"assignment_ind"},
    {name: "Equipos", route: "equipos", icon:"devices_other"}
    //{name: "Inicio", route:"", icon:"home"}
  ]

  private _mobileQueryListener: () => void;
  

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    private routerService: Router
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  shouldRun = true;

}
