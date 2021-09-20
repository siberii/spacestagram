import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { NASAImage } from '../models/nasa-image.model';
import * as uuid from 'uuid';
import { ResponseImage } from '../models/response-image.model copy';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private readonly URL = 'https://api.nasa.gov/planetary/apod'

  constructor(private http: HttpClient) { }

  public getImages(count: number): Observable<NASAImage[]> {
    const options = { params: new HttpParams().set('count', count) };
    const URL = `${this.URL}?api_key=${environment.API_KEY}`;

    return this.http
      .get<ResponseImage[]>(URL, options)
      .pipe(
        map((images) => images.map(image => {
          const nasaImage: NASAImage = {
            id: uuid.v4(),
            title: image.title,
            explanation: image.explanation,
            url: image.url,
            date: image.date,
            media_type: image.media_type,
          };
          return nasaImage
        }))
      );
  }
}
