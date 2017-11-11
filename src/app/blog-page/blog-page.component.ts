import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';

import { JsonpModule, Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

import { ScriptService } from '../script-loader.service';

// TODO - Refactor into blog page with integration with multiple
// social media pages etc.

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
  providers: [ScriptService],
  animations: [slideInDownAnimation]
})
export class BlogPageComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  instagramRootUrl = 'https://api.instagram.com/oembed/?url=http://instagr.am/p/';
  omitScript = '?OMITSCRIPT=true';
  callbackFlag = '&callback=JSONP_CALLBACK';

  blogUris = [
    'Ba4x9gRnDEm', // Halloween
    'BapDLwmnhLy', // Autumn
    'BbSpoeAHGms' // Luisa
  ];

  gallery = [];
  tempGallery = [];
  completeImageFetches = 0;

  constructor(private jsonp: Jsonp, private scriptService: ScriptService) {
    scriptService.loadScript('instagram');
  }

  ngOnInit() {
    this.getInstagramImages();
  }

  getInstagramImages() {
    for (const imageUri of this.blogUris) {
      this.getGalleryImage(imageUri).subscribe(data => {
        this.addImageToGallery(data);
      });
    }
  }

  addImageToGallery(imageData: any) {
    this.tempGallery.push(imageData);
    this.triggerIfAllComplete();
  }

  triggerIfAllComplete() {
    this.completeImageFetches++;

    if (this.completeImageFetches === this.blogUris.length) {
      this.gallery = this.tempGallery;
      this.completeImageFetches = 0;
      this.tempGallery = [];

      this.triggerInstagramApi();
    }
  }

  triggerInstagramApi() {
    if (window['instgrm'] && window['instgrm'].Embeds) {
      window['instgrm'].Embeds.process();
    } else {
      console.log('Tried to start Instagram embedded script but was not found.');
    }
  }

  // TODO - Load in order
  getGalleryImage(imageUri: string): Observable<any> {
    const imageUrl = this.createImageUrl(imageUri);

    return this.jsonp.get(imageUrl).pipe(
      map(res => res.json() || {} ),
      catchError(error => Observable.throw(error))
    );
  }

  createImageUrl(imageUri: string) {
    return this.instagramRootUrl + imageUri + this.omitScript + this.callbackFlag;
  }
}
