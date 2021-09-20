import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NASAImage } from 'src/app/models/nasa-image.model';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  private readonly COUNT = 10;
  images: Observable<NASAImage[]>;

  constructor(private imageService: ImageService) {
    this.images = this.imageService.getImages(this.COUNT);
  }

  ngOnInit(): void { }

}
