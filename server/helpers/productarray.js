



const id=1;
const product = [
  { id: id,name: 'mens jeans',size: 'medium',category:' jeans',price: '3000',image: '/images/api.jpg',Quantity: '1'}
];

const Order = [{
  id:id,
  products_id: '1',
  attendantId: '1',
  total: '2000',
},
];

const category = [
  {
    id:id,
    category:'jeans'
  },
];


export { product, Order , category };
