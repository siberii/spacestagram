import { Component, OnInit } from '@angular/core';
import { SubscriberComponent } from 'src/app/helpers/subscriber';
import { NASAImage } from 'src/app/models/nasa-image.model';
import { LikeService } from 'src/app/services/like.service';

@Component({
  selector: 'app-liked-image-list',
  templateUrl: './liked-image-list.component.html',
  styleUrls: ['./liked-image-list.component.scss']
})
export class LikedImageListComponent extends SubscriberComponent implements OnInit {

  likedImages: NASAImage[];

  constructor(private likeService: LikeService) {
    super();
    this.likedImages = [];
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.likeService.likedImagesChanged.subscribe(() => {
        this.likedImages = this.likeService.likedImages;
      })
    );
  }

}
