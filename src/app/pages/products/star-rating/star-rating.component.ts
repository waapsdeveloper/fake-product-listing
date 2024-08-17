import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
  @Input() rating: number = 0; // Rating out of 5
  @Input() totalRatings: number = 0; // Number of people who rated

  getStars() {
    return Array.from({ length: 5 }, (_, index) => index < this.rating);
  }
}
