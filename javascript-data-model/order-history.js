// Amazon would ordinarly have these vars in the cloud, ready to go!//
// var jsMasher = '1337 LFZ Dr, Irvine, CA, 92618';

// var bearNoob = new Image();
// bearNoob.src = 'bearNoob.png';

// var timelessWay = new Image();
// timelessWay.src = 'timelessWay.png';

// var gcAdapter = new Image();
// gcAdapter.src = 'gcAdapter.png';

// var gcController = new Image();
// gcController.src = 'gcController.png';

// var sqlBook = new Image();
// sqlBook.src = 'sqlBook.png';

var orderHistory = [
  {
    orderPlaced: 'August 4, 2020',
    total: 34.00,
    address: 'jsMasher',
    orderNumber: 114 - 3941689 - 8772232,
    isDelivered: true,
    deliveryDate: 'Aug 8, 2020',
    multipleItems: false,
    title: 'Javascript for Impatient programmers',
    isAuthor: true,
    author: 'Rauschmayer, Dr. Axel',
    returnClosed: true,
    windowDate: 'Sep 7, 2020',
    price: 31.55,
    writtenReview: false,
    img: 'bearNoob'
  },
  {
    orderPlaced: 'July 19, 2020',
    total: 44.53,
    address: 'jsMasher',
    orderNumber: 113 - 9984268 - 1280257,
    isDelivered: true,
    deliveryDate: 'Jul 20, 2020',
    multipleItems: false,
    title: 'The Timeless Way of Building',
    isAuthor: true,
    author: 'Alexander, Christopher',
    returnClosed: true,
    windowDate: 'August 19, 2020',
    price: 41.33,
    writtenReview: false,
    img: 'timelessWay'
  },
  {
    orderPlaced: 'July 4, 2020',
    total: 17.22,
    address: 'jsMasher',
    orderNumber: 114 - 2875557 - 9059409,
    isDelivered: true,
    deliveryDate: 'Jul 7, 2020',
    multipleItems: false,
    title: 'Gamecube Controller Adapter',
    isAuthor: false,
    author: '',
    returnClosed: true,
    windowDate: 'August 5, 2020',
    price: 15.98,
    writtenReview: false,
    img: 'gcAdapter'
  },
  {
    orderPlaced: 'July 3, 2020',
    total: 138.93,
    address: 'jsMasher',
    orderNumber: 113 - 2883177 - 2648248,
    isDelivered: true,
    deliveryDate: 'Jul 5, 2020',
    multipleItems: true,

    title: 'Gamecube Controller',
    isAuthor: false,
    author: '',
    returnClosed: true,
    windowDate: 'August 4, 2020',
    price: 94.95,
    writtenReview: false,
    img: 'gcAdapter',

    title2: 'The Art if SQL',
    isAuthor2: true,
    author2: 'Faroult, Stephane',
    returnClosed2: true,
    windowDate2: 'August 4, 2020',
    price2: 33.99,
    writtenReview2: false,
    img2: 'sqlBook'
  }
];
console.log(orderHistory[0]);
console.log(orderHistory[1]);
console.log(orderHistory[2]);
console.log(orderHistory[3]);
