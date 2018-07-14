
var companyInfo ={
  title: 'Prime Steak RESTAURANT',
  phone: '(718) - 219 - 8652',
  location: 'Los, Angeles',
}

var specialMenuData = [
  {
      picture: ''
      title: 'Sirloin Steak',
      description:' Sirloin steak is one of the most flavorful cuts of beef.',
      price: '$25'
  },
  {
      title: 'T-bone Steak',
      description:'T-bone are steaks of beef cut from the short loin.',
      price: '$15'
  },
  {
      title: 'Flank Steak',
      description:'This grilled Marinated Flank Steak melts in your mouth !',
      price: '$35'
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
