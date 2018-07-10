
var companyInfo ={
  title: 'Prime Steak RESTAURANT',
  phone: '(718) - 219 - 8652',
  location: 'Los, Angeles',
}

var specialMenuData = [
  {
      title: 'Super BBQ Grill No Smoke',
      description:'Fried eeggs, Steak, Baked potato or french fries',
      price: '$25'
  },
  {
      title: 'Chicken Fingers',
      description:'Fried eeggs, Steak, Baked potato or french fries',
      price: '$15'
  },
  {
      title: 'All American Hamburger',
      description:'Fried eeggs, Steak, Baked potato or french fries',
      price: '$30'
  }
]

var reviewsData = [
  {
    company:'NBC',
    author: 'Joe Bastiachi',
    authorInfo:'Winner Of The Chef Masters',
    highlight: 'Best Restarunt in the L.A area!',
    review: 'Lorem ipsum dolor amet synth adaptogen fingerstache, iPhone typewriter yr williamsburg affogato small batch kogi artisan ethical intelligentsia beard.'
  },
  {
    company:'HBO',
    author: 'Joe Bastiachi',
    authorInfo:'Winner Of The Chef Masters',
    highlight: 'Best Restarunt in the L.A area!',
    review: 'Lorem ipsum dolor amet synth adaptogen fingerstache, iPhone typewriter yr williamsburg affogato small batch kogi artisan ethical intelligentsia beard.'
  },
  {
    company:'CW',
    author: 'Joe Bastiachi',
    authorInfo:'Winner Of The Chef Masters',
    highlight: 'Best Restarunt in the L.A area!',
    review: 'Lorem ipsum dolor amet synth adaptogen fingerstache, iPhone typewriter yr williamsburg affogato small batch kogi artisan ethical intelligentsia beard. Banjo iceland shaman lumbersexual dreamcatcher Lorem ipsum dolor amet synth adaptogen fingerstache, iPhone typewriter yr williamsburg affogato small batch kogi artisan ethical intelligentsia beard.'
  },
  {
    company:'The Food Network',
    author: 'Joe Bastiachi',
    authorInfo:'Winner Of The Chef Masters',
    highlight: 'Best Restarunt in the L.A area!',
    review: 'Lorem ipsum dolor amet synth adaptogen fingerstache, iPhone typewriter yr williamsburg affogato small batch kogi artisan ethical intelligentsia beard. Banjo iceland shaman lumbersexual, dreamcatcher Lorem ipsum dolor amet synth adaptogen fingerstache, iPhone typewriter yr williamsburg affogato small batch kogi artisan ethical intelligentsia beard. Banjo iceland shaman lumbersexual, dreamcatcher Lorem ipsum dolor amet synth adaptogen fingerstache, iPhone typewriter yr williamsburg affogato small batch kogi artisan ethical intelligentsia beard.'
  },
  {
    company:'The NewYork Times',
    author: 'Joe Bastiachi',
    authorInfo:'Winner Of The Chef Masters',
    highlight: 'Best Restarunt in the L.A area!',
    review: 'Lorem ipsum dolor amet synth adaptogen fingerstache, iPhone typewriter yr williamsburg affogato small batch kogi artisan ethical intelligentsia beard.'
  }
]

var randomQuoteData = [
  {
    author: 'Johny',
    quote: 'Good Painting Is Great'
  },
  {
    author: 'Roman',
    quote: 'Good Painting Is Great'
  },
  {
    author: 'Lewis',
    quote: 'Good Painting Is Great'
  }
]

export const globalState = {
  count: 0,
  companyInfo,
  specialMenuData,
  reviewsData,
  randomQuoteData,
  reviewStatus: {
    currentReview: 0,
  }

}
