import { Injectable, Inject }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/toPromise';

declare let app;

@Injectable()
export class CRUDService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };
  public url:string;  // URL to web api

  private cookies = ['XSRF-TOKEN', 'laravel_session'];

  constructor(private http:HttpClient) { }

  getObjs (): Observable<any[]> {
    // this.appStore._token = this.getCookie('_token');
    // console.log(document.Set-Cookie);
    this.http.request
    return this.http.get<any[]>(this.url).pipe(
      tap(res => this.log('fetched res')),
      catchError(this.handleError('getObjs', []))
    );
  }

  getObj (): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap(res => this.log('fetched res id=${id}')),
      catchError(this.handleError<any>('res id=${id}'))
    );
  }

  addObj (obj:any): Observable<any> {
    return this.http.post<any>(this.url, JSON.stringify(obj)).pipe(
      tap((res) => this.log('added new w/ id=${res.id}')),
      catchError(this.handleError<any>('addObj'))
    );
  }

  updateObj (obj:any): Observable<any> {
    return this.http.put(this.url, JSON.stringify(obj)).pipe(
      tap(_ => this.log('updated hero id=${id}')),
      catchError(this.handleError<any>('updateObj'))
    );
  }

  deleteObj (): Observable<any> {
    return this.http.delete<any>(this.url).pipe(
      tap(_ => this.log('deleted hero id=${id}')),
      catchError(this.handleError<any>('deleteObj'))
    );
  }

  getObjLength(): Observable<number> {
    return this.http.get<number>(this.url).pipe(
      tap(res => this.log('res length is obtained')),
      catchError(this.handleError<number>('length error'))
    );
  }

  searchObjs(url: string): Observable<any[]> {
    return this.http.get<any[]>(url).pipe(
      tap(_ => this.log('found heroes matching "${term}"')),
      catchError(this.handleError<any[]>('searchObjs', []))
    );
  }

  uploadFile(file: File) {
    const _formData = new FormData();
    _formData.append('file', file, file.name);   
    return this.http.post<any>(this.url, _formData);
  }

  uploadFiles(files: File[]) {
    const _formData = new FormData();
    for (var i = 0; i < files.length; i++) {
      _formData.append('files[]', files[i]);   
    }
    return this.http.post<any>(this.url, _formData);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // this.appStore.errors = error;
   
      // TODO: better job of transforming error for user consumption
      this.log('${operation} failed: ${error.message}');
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    // this.messageService.add('HeroService: ' + message);
  }

}
