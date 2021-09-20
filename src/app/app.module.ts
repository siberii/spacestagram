import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageListComponent } from './components/image-list/image-list.component';
import { PageComponent } from './components/page/page.component';
import { ImageItemComponent } from './components/image-list/image-item/image-item.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app.material.module';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { TitleComponent } from './components/title/title.component';
import { StoredLikedImagesComponent } from './components/stored-liked-images/stored-liked-images.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    PageComponent,
    ImageItemComponent,
    TitleComponent,
    StoredLikedImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ClipboardModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
