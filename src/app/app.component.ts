import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Dymatize Amazon.com Customer Reviews';
  
  /*
    Sample Review Data: Dymatize Amazon.com customer reviews
  */
  customerReviews: any = [
    {
      "asin": "B0015QSZMI",
      "overall_rating": 4,
      "rating": 1,
      "comment_count": 0,
      "brand": "Dymatize",
      "region": "USA",
      "month": "Oct",
      "year": 2018,
      "review_url": "https://www.amazon.com/gp/customer-reviews/R1HR6FR9QVGFI6?ie=UTF8&ASIN=B0015QSZMI",
      "body": "When I got the product it was damage and half the protein was out the bag and in the box that it was in. then when I Tried it for the first time it had clumps of gooey stuff and the taste was not the same from when I order form bodybuilding.com in my opinion it was fake stuff to me hope this helps"
    },
    {
      "asin": "B0015QSZMI",
      "overall_rating": 4,
      "rating": 5,
      "comment_count": 0,
      "brand": "Dymatize",
      "region": "USA",
      "month": "Oct",
      "year": 2018,
      "review_url": "https://www.amazon.com/gp/customer-reviews/R1HRWV1K6UGDEC?ie=UTF8&ASIN=B0015QSZMI",
      "body": "AWESOME PRODUCT"
    },
    {
      "asin": "B0014O0E7U",
      "overall_rating": 4.3,
      "rating": 5,
      "comment_count": 0,
      "brand": "Dymatize",
      "region": "USA",
      "month": "Oct",
      "year": 2018,
      "review_url": "https://www.amazon.com/gp/customer-reviews/R3FUOL8VW0A9R1?ie=UTF8&ASIN=B0014O0E7U",
      "body": "Sin sabor para el precio esta bien"
    },
    {
      "asin": "B002GCW026",
      "overall_rating": 3.9,
      "rating": 5,
      "comment_count": 0,
      "brand": "Dymatize",
      "region": "USA",
      "month": "Oct",
      "year": 2018,
      "review_url": "https://www.amazon.com/gp/customer-reviews/R25G7F0S5J8E3P?ie=UTF8&ASIN=B002GCW026",
      "body": "Boy oh boy did I gain weight with this bad boy. I went from 175 to 205 in one month!! Now I have diabetes and hypertension!!! Jk I donâ€™t but Yea good product."
    },
    {
      "asin": "B002N6F2UW",
      "overall_rating": 4.4,
      "rating": 1,
      "comment_count": 0,
      "brand": "Dymatize",
      "region": "USA",
      "month": "Oct",
      "year": 2018,
      "review_url": "https://www.amazon.com/gp/customer-reviews/R1VMLKHPKNKRRJ?ie=UTF8&ASIN=B002N6F2UW",
      "body": "Bad experience"
    },
    {
      "asin": "B002N6F2UW",
      "overall_rating": 4.4,
      "rating": 3,
      "comment_count": 0,
      "brand": "Dymatize",
      "region": "USA",
      "month": "Oct",
      "year": 2018,
      "review_url": "https://www.amazon.com/gp/customer-reviews/R3ONVKJ1IZHG1U?ie=UTF8&ASIN=B002N6F2UW",
      "body": "Overall this is a great brand and a good product. Iâ€™ve typically purchased it through bodybuilding.com but due to a better price picked amazon. However, one of the features I most enjoy about this protein (how well the protein powder dissolves into water or almond milk) is completely different this time around. Either a bad batch or bad handling of the product."
    },
    {
      "asin": "B002N6F2UW",
      "overall_rating": 4.4,
      "rating": 5,
      "comment_count": 0,
      "brand": "Dymatize",
      "region": "USA",
      "month": "Oct",
      "year": 2018,
      "review_url": "https://www.amazon.com/gp/customer-reviews/RKZBFBGG8KISM?ie=UTF8&ASIN=B002N6F2UW",
      "body": "Itâ€™s one of the good product"
    },
    {
      "asin": "B002N6F2UW",
      "overall_rating": 4.4,
      "rating": 5,
      "comment_count": 0,
      "brand": "Dymatize",
      "region": "USA",
      "month": "Oct",
      "year": 2018,
      "review_url": "https://www.amazon.com/gp/customer-reviews/R239Q3ITCQA8SR?ie=UTF8&ASIN=B002N6F2UW",
      "body": "This is my go to protein for years now I subscribed and get it every two months without thinking about it. Oh and it was cheaper than health store around me. Very happy!"
    },
    {
      "asin": "B002N6F2UW",
      "overall_rating": 4.4,
      "rating": 5,
      "comment_count": 0,
      "brand": "Dymatize",
      "region": "USA",
      "month": "Oct",
      "year": 2018,
      "review_url": "https://www.amazon.com/gp/customer-reviews/R2AQBG5Q5C09VZ?ie=UTF8&ASIN=B002N6F2UW",
      "body": "So far, this has been my favorite protein powder. It tastes great, and I like that it is high protein but low carb and calorie. I drink one mixed with water after my morning workout, and it keeps me satisfied until lunch. Mixing a scoop of peanut powder in is a bonus treat."
    },
    {
      "asin": "B002N6F2UW",
      "overall_rating": 4.4,
      "rating": 5,
      "comment_count": 0,
      "brand": "Dymatize",
      "region": "USA",
      "month": "Oct",
      "year": 2018,
      "review_url": "https://www.amazon.com/gp/customer-reviews/RSDVV04KJND2L?ie=UTF8&ASIN=B002N6F2UW",
      "body": "Love this stuff, been using it for years. Great taste, low carbs, high protein, simply amazing."
    },
    {
      "asin": "B007OLDAIC",
      "overall_rating": 4.5,
      "rating": 5,
      "comment_count": 0,
      "brand": "Dymatize",
      "region": "USA",
      "month": "Oct",
      "year": 2018,
      "review_url": "https://www.amazon.com/gp/customer-reviews/R17NZ9CWAI3D3?ie=UTF8&ASIN=B007OLDAIC",
      "body": "Cinnamon bun flavor is really good! After trying another brands casein Dymatize is in a class by itself"
    } 

  ];
}
