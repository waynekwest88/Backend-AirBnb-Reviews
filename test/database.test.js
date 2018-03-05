const mongoose = require('mongoose');
const Reviews = require('../database/models/index');

mongoose.connect('mongodb://localhost/productDetails');

describe('Tests for database', () => {
  it('should be able to retrieve existing dummy data', () => {
    Reviews.findAllReviews()
      .then(results => {
        expect(results).toBeInstanceOf(Array);
        expect(results.length).toBeGreaterThan(0);
      })
      .catch(e => {
        console.log(e);
      });
  });

  it('should retrieve review given an id', () => {
    Reviews.findReviewById(1)
      .then(product => {
        expect(product).toHaveProperty('id', 1);
      })
      .catch(e => {
        console.log(e);
      });
  });

  it('retrieved data should have correct properties', () => {
    Reviews.findReviewById(1)
      .then(review => {
        expect(review).toHaveProperty('id');
        expect(review).toHaveProperty('gueset_name');
        expect(review).toHaveProperty('communication');
        expect(review).toHaveProperty('cleaniness');
        expect(review).toHaveProperty('location');
        expect(review).toHaveProperty('checkin');
        expect(review).toHaveProperty('message');
        expect(review).toHaveProperty('date');
      })
      .catch(e => {
        console.log(e);
      });
  });
});
