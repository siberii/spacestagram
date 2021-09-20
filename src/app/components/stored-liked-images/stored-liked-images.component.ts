import { Component, OnInit } from '@angular/core';
import { SubscriberComponent } from 'src/app/helpers/subscriber';
import { NASAImage } from 'src/app/models/nasa-image.model';
import { LikeService } from 'src/app/services/like.service';

@Component({
  selector: 'app-stored-liked-images',
  templateUrl: './stored-liked-images.component.html',
  styleUrls: ['./stored-liked-images.component.scss']
})
export class StoredLikedImagesComponent extends SubscriberComponent implements OnInit {
  images: NASAImage[];
  constructor(private likedService: LikeService) {
    super();
    this.images = this.likedService.likedImages;
    this.subscribeStoredImages();
  }

  private subscribeStoredImages() {
    this.subscriptions.push(
      this.likedService.likedImagesChanged.subscribe(
        () => {
          this.images = this.likedService.likedImages;
        }
      )
    );
  }

  ngOnInit(): void {
  }

}
