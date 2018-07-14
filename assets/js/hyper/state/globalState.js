
var companyInfo ={
  title: 'Prime Steak RESTAURANT',
  phone: '(718) - 219 - 8652',
  location: 'Los, Angeles',
}

var specialMenuData = [
  {
    picture:'https://assets.epicurious.com/photos/57bde9fc354f42d45822ea9f/master/pass/top-sirloin-steak-with-bell-pepper-and-onion-saute.jpg',

      title: 'Sirloin Steak',
      description:' Sirloin steak is one of the most flavorful cuts of beef.',
      price: '$25'
  },
  {
    picture:'https://res.cloudinary.com/quintet/image/private/c_fill,g_south,h_1536,w_1536,cs_no_cmyk/ymdu3kgqwnrbvjli8u8v.jpg',

      title: 'T-bone Steak',
      description:'T-bone are steaks of beef cut from the short loin.',
      price: '$15'
  },
  {
    picture:'https://www.slenderkitchen.com/sites/default/files/recipe_images/broiled-flank-steak.jpg',

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
    review: 'Go time for the final four cooks in the 2017 Daily Herald Cook of the Week Challenge. See them battle it out in the live cook-off Nov. 13 at Itascas Westin Chicago Northwest.'
  },
  {
    company:'HBO',
    author: 'Joe Bastiachi',
    authorInfo:'Winner Of The Chef Masters',
    highlight: 'Best Restarunt in the L.A area!',
    review: 'Ben Blakes Roasted Kabocha Squash and Kale toasted Ravioli with a spicy lemon sardine cream sauce and toasted parmesan bread crumbs'
  },
  {
    company:'CW',
    author: 'Joe Bastiachi',
    authorInfo:'Winner Of The Chef Masters',
    highlight: 'Best Restarunt in the L.A area!',
    review: 'Elizabeth Schuttlers Spicy Sardine and Kale Meatballs on Top of Homemade Wheat Bread Pasta with a Creamy Kabocha Squash Sauce and Garnish of Crispy Kale and Breadcrum'
  },
  {
    company:'The Food Network',
    author: 'Joe Bastiachi',
    authorInfo:'Winner Of The Chef Masters',
    highlight: 'Best Restarunt in the L.A area!',
    review: 'Ben Blakes Roasted Kabocha Squash and Kale toasted Ravioli with a spicy lemon sardine cream sauce and toasted parmesan bread crumbs'
},
  {
    company:'The NewYork Times',
    author: 'Joe Bastiachi',
    authorInfo:'Winner Of The Chef Masters',
    highlight: 'Best Restarunt in the L.A area!',
    review: 'Elizabeth Schuttlers Spicy Sardine and Kale Meatballs on Top of Homemade Wheat Bread Pasta with a Creamy Kabocha Squash Sauce and Garnish of Crispy Kale and Breadcrum'
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
