import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  /**
   * Get the menu items of the desktop section
   * @returns array of menuitems
   */
  getDesktopMenu(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>('../../assets/data/desktop-menu-items.json');
  }
}
