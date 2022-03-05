/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Place } from './place.model';
import { take, map, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([
    new Place(
      'p1',
      'Manhatten Mansion',
      'In the heart of New York City.',
      'https://media.timeout.com/images/105375857/image.jpg',
      149.99,
      new Date('2019-01-01'),
      new Date('2023-12-31'),
      'abc'
    ),
    new Place(
      'p2',
      'Roman Romance',
      'Let Ancient Rome sweep you off your feet!',
      'https://static.euronews.com/articles/stories/06/30/62/22/1440x810_cmsv2_5849e688-8914-5cef-bff5-2feae8cab76e-6306222.jpg',
      189.99,
      new Date('2019-01-01'),
      new Date('2023-12-31'),
      'abc'
    ),
    new Place(
      'p3',
      'Paris After Dark',
      'A darker side of this magical city.',
      'https://grittytravel.com/img/sliders/France-Paris-Notre-Dame-Cathedral-Dragon-Gargoyle.jpg',
      99.99,
      new Date('2019-01-01'),
      new Date('2023-12-31'),
      'abc'
    ),
  ]);

  constructor(private authService: AuthService) { }

  getPlaces() {
    return this._places.asObservable();
  }

  getPlace(placeId: string) {
    return this._places.pipe(
      take(1),
      map(places => {
        const pl = places.find(p => p.id === placeId);
        return pl;
      })
    );
  }

  getOffers() {
    return this._places.asObservable();
  }

  addPlace(title: string, description: string, price: number, dateFrom: Date, dateTo: Date) {
    const newPlace = new Place(
      Math.random.toString(),
      title,
      description,
      'https://media.timeout.com/images/105375857/image.jpg',
      price,
      dateFrom,
      dateTo,
      this.authService.userId
    );
    return this._places.pipe(take(1), delay(1000), tap(places => {
      this._places.next(places.concat(newPlace));
    }));
  }

  updatePlace(placeId: string, title: string, description: string) {
    return this._places.pipe(take(1), delay(1000), tap(places => {
      const updatedPlaceIndex = places.findIndex(pl => pl.id === placeId);
      const updatedPlaces = [...places];
      const oldPlace = updatedPlaces[updatedPlaceIndex];
      updatedPlaces[updatedPlaceIndex] = new Place(
        oldPlace.id,
        title,
        description,
        oldPlace.imageUrl,
        oldPlace.price,
        oldPlace.availableFrom,
        oldPlace.availableTo,
        oldPlace.userId
      );
      this._places.next(updatedPlaces);
    }));
  }
}
