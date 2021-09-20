import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageListComponent } from './components/image-list/image-list.component';
import { PageComponent } from './components/page/page.component';
import { ImageItemComponent } from './components/image-list/image-item/image-item.component';
import { FormsModule } from '@angular/forms';
import { LikedImageListComponent } from './components/liked-image-list/liked-image-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    PageComponent,
    ImageItemComponent,
    LikedImageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
