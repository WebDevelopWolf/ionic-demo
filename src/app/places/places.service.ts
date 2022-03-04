/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { PlaceDetailPageModule } from './search/place-detail/place-detail.module';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhatten Mansion',
      'In the heart of New York City.',
      'https://media.timeout.com/images/105375857/image.jpg',
      149.99,
      new Date('2019-01-01'),
      new Date('2023-12-31')
    ),
    new Place(
      'p2',
      'Roman Romance',
      'Let Ancient Rome sweep you off your feet!',
      'https://static.euronews.com/articles/stories/06/30/62/22/1440x810_cmsv2_5849e688-8914-5cef-bff5-2feae8cab76e-6306222.jpg',
      189.99,
      new Date('2019-01-01'),
      new Date('2023-12-31')
    ),
    new Place(
      'p3',
      'Paris After Dark',
      'A darker side of this magical city.',
      'https://grittytravel.com/img/sliders/France-Paris-Notre-Dame-Cathedral-Dragon-Gargoyle.jpg',
      99.99,
      new Date('2019-01-01'),
      new Date('2023-12-31')
    ),
  ];

  constructor() { }

  getPlaces() {
    return [...this._places];
  }

  getPlace(placeId: string) {
    const place = this._places.find(p => p.id === placeId);
    return place;
  }

  getOffers() {
    return [...this._places];
  }
}
