import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livre } from '../models/livre';

@Injectable()
export class LivreService {

 constructor(private http: HttpClient) { }

 get() : Observable<Livre[]>{
   return this.http.get<Livre[]>(environment.iutApiBaseUrl+"/livres");
 }

 delete(id: number): Observable<string>{
  return this.http.delete<string>(environment.iutApiBaseUrl+"/livres/"+id);
}


update(livre: Livre): Observable<string>{
  return this.http.put<string>(environment.iutApiBaseUrl+"/livres/"+livre.id, livre);
}

create(livre: Livre): Observable<string>{
  return this.http.post<string>(environment.iutApiBaseUrl+"/livres", livre);
}

getById(id: number): Observable<Livre>{
  return this.http.get<Livre>(environment.iutApiBaseUrl+"/livres/"+id);

}


}
