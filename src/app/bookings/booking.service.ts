/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings: Booking[] = [
    {
      id: 'b1',
      placeId: 'p1',
      placeTitle: 'Manhatten Mansion',
      userId: 'u1',
      guestNumber: 2

    }
  ];

  constructor() { }

  get bookings() {
    return [...this._bookings];
  }
}
