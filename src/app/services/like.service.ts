import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NASAImage } from '../models/nasa-image.model';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  private _likedImages: Map<string, NASAImage>;
  private _likedImagesChanged: Subject<void>;

  constructor() {
    this._likedImages = new Map();
    this._likedImagesChanged = new Subject<void>();
  }

  public get likedImages(): NASAImage[] {
    return Array.from(this._likedImages.values());
  }

  public get likedImagesChanged(): Observable<void> {
    return this._likedImagesChanged.asObservable();
  }

  public likeImage(image: NASAImage): void {
    this._likedImages.set(image.id, image);
    this._likedImagesChanged.next();
  }

  public dislikeImage(id: string): void {
    this._likedImages.delete(id);
    this._likedImagesChanged.next();
  }
}
