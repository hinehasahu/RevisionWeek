const products = [
  ['Electronics', 'Laptop', 999],
  ['Clothing', 'Shirt', 29],
  ['Electronics', 'Mouse', 25],
  ['Clothing', 'Pants', 49],
  ['Electronics', 'Keyboard', 75],
  ['Clothing', 'Jacket', 89]
];

let res = {};

// loop through products
for(let i=0; i<products.length; i++){
  // if the product doesn't exist, add them with empty array and push the name and price for one
  if(res[products[i][0]]===undefined){
    res[products[i][0]] = []
    res[products[i][0]].push({name: products[i][1], price: products[i][2]})

  }
  // if present then only push the product details
  else{
    res[products[i][0]].push({name: products[i][1], price: products[i][2]})
  }
}

// Print the result
console.log(res)