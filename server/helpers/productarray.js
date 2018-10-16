import { Prods } from '../models/productsModel';
import { orders } from '../models/productsModel';


const id=0;
const product = [new Prods(
  id,
  'Dear diary today is my fist post',
  'my first post',
  'my first post',
  '2016',
),
];

const Order = [new orders(
  'trusers',
  '1',
  '2000',
),
];

export { product, Order };
