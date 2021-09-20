import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private likeService: LikeService, private _snackBar: MatSnackBar) {
    this.image = { id: '', title: '', explanation: '', url: '', date: '', media_type: '' }
    this.isLiked = false;
  }

  ngOnInit(): void {
  }

  like(): void {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.likeService.likeImage(this.image);
    } else {
      this.likeService.dislikeImage(this.image.id);
    }
  }

  alertLinkCopied() {
    this._snackBar.open('Copied image link to clipboard', 'Dismiss', {
      duration: 3000,
    });
  }

}
