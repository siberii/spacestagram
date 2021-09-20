import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { NASAImage } from '../models/nasa-image.model';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  private _likedImages: Map<string, NASAImage>;
  private _likedImagesChanged: Subject<void>;
  private readonly LOCAL_STORAGE_KEY = "likedImages";

  constructor() {
    this._likedImages = new Map();
    this._likedImagesChanged = new Subject<void>();
    this.fetchStoredLikedImages();
  }

  public get likedImages(): NASAImage[] {
    return Array.from(this._likedImages.values());
  }

  public get likedImagesChanged(): Observable<void> {
    return this._likedImagesChanged.asObservable();
  }

  public likeImage(image: NASAImage): void {
    this._likedImages.set(image.id, image);
    this.updateLocalStorage();
  }

  public dislikeImage(id: string): void {
    this._likedImages.delete(id);
    this.updateLocalStorage();
  }

  private fetchStoredLikedImages() {
    const items = localStorage.getItem(this.LOCAL_STORAGE_KEY);
    if (items) {
      const images = JSON.parse(items as string) as NASAImage[];
      for (const image of images) {
        this._likedImages.set(image.id, image);
      }
      this._likedImagesChanged.next();
    }
  }

  private updateLocalStorage(): void {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.likedImages));
    this._likedImagesChanged.next();
  }

}
