const orders = [
  {
    orderId: 'A1',
    customer: { name: 'John', location: { city: 'NYC', country: 'USA' } },
    items: [
      { product: 'Laptop', quantity: 1, price: 999 },
      { product: 'Mouse', quantity: 2, price: 25 }
    ]
  },
  {
    orderId: 'A2',
    customer: { name: 'Jane', location: { city: 'LA', country: 'USA' } },
    items: [
      { product: 'Keyboard', quantity: 1, price: 75 }
    ]
  }
];

let result = orders.map(o => ({
  orderId: o.orderId,
  customerName: o.customer.name,
  city: o.customer.location.city,
  totalAmount: o.items.reduce((acc, curr)=> acc + curr.quantity * curr.price, 0)
}));

console.log(result)




// [
//   { orderId: 'A1', customerName: 'John', city: 'NYC', totalAmount: 1049 },
//   { orderId: 'A2', customerName: 'Jane', city: 'LA', totalAmount: 75 }
// ]
