import { Component, Input, OnInit } from '@angular/core';
import { NASAImage } from 'src/app/models/nasa-image.model';
import { LikeService } from 'src/app/services/like.service';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent implements OnInit {

  @Input() image: NASAImage;
  isLiked: boolean;

  constructor(private likeService: LikeService) {
    this.image = { id: '', title: '', explanation: '', url: '', date: '' }
    this.isLiked = false;
  }

  ngOnInit(): void {
  }

  like(isLiked: boolean): void {
    this.isLiked = isLiked;
    if (this.isLiked) {
      this.likeService.likeImage(this.image);
    } else {
      this.likeService.dislikeImage(this.image.id);
    }
  }

}
