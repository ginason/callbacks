var transactions = [
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'CJ Cherryh',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XS Doodad', price: -0.50 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Basic Gadget', price: -2.00 },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Frederik Pohl',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Clarke Computing',
    items: [
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Neal Stephenson',
    items: [
      { name: 'kilobyte', price: 1024.00 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
    ]
  }
];


// --------------------------------------------------
// EXAMPLE QUESTION
// --------------------------------------------------
/*
  Calculate the total number of transactions.
*/
var totalTransactions = transactions.length;

console.log( 'The total number of transactions is:', totalTransactions );


// --------------------------------------------------
// QUESTION 01
// --------------------------------------------------
/*
  Calculate the total number of 'sales'.

  HINT(S):
  - Not all transactions are 'sales'.
*/

// var numSales;
// var i = 0;
var numSales = 0;
transactions.forEach(function(sale){
  if (sale["type"] === "sale") {
    numSales += 1;
  }
});

/*
transactions.each do |sale|
  if sale["type"] == "sale"
    numSales += 1
    end
end
*/

/*
  Hey, welcome to the first question!

  Here's a breakdown of the question, and some pointers on how to get started!
    - A variable has been declared a few lines above (`numSales`).
    - Just below, the contents of the `numSales` variable are logged to the console.
    - Your job is to assign the variable to the correct value (in this case: the total number of sales) *BEFORE* it is logged out.
    - You can do this by:
      - Adding an `=` sign (we are *assigning* something after all)
      - Starting with the `transactions` variable (see the example question);
      - Adding one or more methods to transform/extract the value we're looking for.
      - If your solution is correct, `numSales` should be equal to 5.

  You can solve the remaining questions in the same way!

  P.S.
  The breakdown above takes up a lot of space, feel free to move it to the top or bottom of the file!
*/

console.log( 'The total number of sales is:', numSales );


// --------------------------------------------------
// QUESTION 02
// --------------------------------------------------
/*
  Calculate the total number of 'purchases'.
*/
// var numPurchases;
// var i = 0;
// var numPurchases = function(){ transactions.map(function(purchase){
//   if (purchase["type"] === "purchase") {
//       i += 1;
//   }
// })
// return i;
// };

var numPurchases = function(){
  return totalTransactions - numSales;
}
//
console.log( 'The total number of purchases is:', numPurchases());
//

// --------------------------------------------------
// QUESTION 03
// --------------------------------------------------
/*
  Calculate the total number of 'cash' 'sales'.

  HINT(S):
  - Don't forget that 'purchases' can also be made in 'cash'!
*/
// var numCashSales;
var numCashSales = 0;
transactions.forEach(function(cashSale) {
  if (cashSale.type === "sale" && cashSale.paymentMethod === "cash") {
    numCashSales += 1;
  }
});


console.log( 'The total number of cash sales is:', numCashSales );


// --------------------------------------------------
// QUESTION 04
// --------------------------------------------------
/*
  Calculate the total number of 'credit' 'purchases'.

  HINT(S):
  - Make sure to exclude any 'sales' made by 'credit'!
*/
// var numCreditPurchases;
var numCreditPurchases = 0;
transactions.forEach(function(creditPurchase){
  if (creditPurchase.type === "purchase" && creditPurchase.paymentMethod === "credit") { numCreditPurchases += 1 }
});

console.log( 'The total number of credit purchases is:', numCreditPurchases );


// --------------------------------------------------
// QUESTION 05
// --------------------------------------------------
/*
  Create an array that includes all of vendors which appear in the transactions data set.
  eg. `[ 'vendor one', 'vendor two', ... ]

  HINT(S):
  - Not all transactions have a 'vendor'!
  - The assembled array should be made up of strings, not full `transaction` objects.
  - This array is allowed to contain duplicate values.
*/
// var uniqueVendors;
var uniqueVendors = [];

transactions.forEach(function(vendors){
  if (vendors.vendor) {
    uniqueVendors.push(vendors.vendor);
  }
});

console.log( 'The unique vendors are:', uniqueVendors );


// --------------------------------------------------
// QUESTION 06
// --------------------------------------------------
/*
  Create an array that includes all of *unique* customers which appear in the transactions data set.
  eg. `[ 'customer one', 'customer two', ... ]

  HINT(S):
  - Not all transactions have a 'customer'!
  - The assembled array should be made up of strings, not full `transaction` objects.
  - Make sure that the resulting array *does not* include any duplicates.
*/
// var uniqueCustomers;

var uniqueCustomers = [];

transactions.forEach(function(transaction){
  // console.log(transaction.customer, uniqueCustomers.indexOf(transaction.customer));
  if (transaction.customer && uniqueCustomers.indexOf(transaction.customer) == -1) {  // if (transaction.customer) {
    uniqueCustomers.push(transaction.customer);
  }
})

console.log( 'The unique customers are:', uniqueCustomers );


// --------------------------------------------------
// QUESTION 07
// --------------------------------------------------
/*
  Create an array of information about the 'sale' transactions which include 5 or more items.

  The array should resemble the following:
  [ { name: 'Customer Name', numItems: 5 }, ... ]

  HINT(S):
  - There may be more than 1 'sale' that includes 5 or more items.
  - Individual transactions do not have either `name` or `numItems` properties, we'll have to add them to the output.
*/
var bigSpenders = [];

transactions.forEach(function(transaction){
  if (transaction.type === "sale" && transaction.items.length >= 5) {
    var nameItem = {};
    nameItem.name = transaction.customer;
    nameItem.numItems = transaction.items.length;
    bigSpenders.push(nameItem);
  }
});
//
// transactions.forEach(function(transaction){
//   if (transaction.type === "sale" && transaction.items.length >= 5) {
//
//     bigSpenders.push(
//     {
//       name: transaction.customer,
//       numItems: transaction.items.length
//     });
//   }
// });

console.log( 'The "big spenders" are:', bigSpenders );


// --------------------------------------------------
// QUESTION 08
// --------------------------------------------------
/*
  Calculate the sum of the *first* 'sale' transaction.

  HINT(S):
  - Transactions don't have 'prices', but their 'items' do!
*/

var sumSales = transactions.filter(function(transaction){
  if (transaction.type === "sale") {
    return true
  }
  else {
    return false;
  }
}
)[0].items.map(function(item){
  return item.price;
}).reduce(function(sum, value) {return sum + value});


console.log( 'The sum of the first sale is:', sumSales );


// --------------------------------------------------
// QUESTION 09
// --------------------------------------------------
/*
  Calculate the sum of *all* 'purchase' transactions.

  HINT(S):
  - Your solution to 'QUESTION 08' is a good starting point!
  - Make sure to include 'price' information from *all* purchases.
*/

var sumPurchases = 0;
transactions.forEach(function(transaction){
  if (transaction.type === "purchase") {
    for(var i = 0; i < transaction.items.length; i++){
      sumPurchases += (-1 * transaction.items[i].price);
    }
  }
})
console.log( 'The sum of all purhcases is:', sumPurchases );


// --------------------------------------------------
// QUESTION 10
// --------------------------------------------------
/*
  Calculate the company's net profit.

  This number will be positive if the sum of the sales is greater than the amount spent on purchases.

  Otherwise, this number will be negative.

  HINT(S):
  - Unlike 'QUESTION 08' and 'QUESTION 09', here we're interested in both 'sale' and 'purchase' transactions.
*/
var totalSales = 0;
transactions.forEach(function(transaction){
  if (transaction.type === "sale") {
    for(var i = 0; i < transaction.items.length; i++){
      totalSales += transaction.items[i].price;
    }
  }
})
var netProfit = 0;
if (totalSales > sumPurchases) {
  netProfit = totalSales - sumPurchases;
}
else if (totalSales < sumPurchases) {
  netProfit = sumPurchases - totalSales;
}
else {
  netProfit = 0;
}


console.log( 'The net profit is:', netProfit);


// --------------------------------------------------
// QUESTION 11
// --------------------------------------------------
/*
  Calculate the most items sold as part of single transaction.

  HINTS:
  - The result of this calculation should be a number (not an array, object, or other data type).
*/
var mostItems = transactions.map(function(transaction){
  return transaction.items.length ;
}).sort(function(a ,b){ return a-b}).reverse()[0];
console.log( 'The most items sold in a single transaction is:', mostItems );


// --------------------------------------------------
// QUESTION 12
// --------------------------------------------------
/*
  Calculate the sum of the 'purchase' with the fewest items.
*/
// var sumOfSmallestPurchase = 0;
// var purchaseItems = transactions.map(function(transaction){
//   if (transaction.type === "purchase") {
//     return transaction.items.length
//   }
// }).sort(function(a ,b){ return a-b});

// transactions.map(function(transaction){
//   if (purchaseItems[0] === transaction.items.length && transaction.type === "purchase") {
//     console.log(transaction.items.length)
//     for (var i = 0; i < transaction.items.length; i++) {
//       sumOfSmallestPurchase += transaction.items[i].price;
//     }
//   }
// })

// [ [2.36, 2.54], [3.12, 1.56, 2,54] ]

var purchaseItems = [];
var sumOfSmallestPurchase = transactions.filter(function(transaction){
    return transaction.type === "purchase";
}).map(function(transaction){
  return transaction.items.map(function(item){
      return item.price;
  })
}).sort(function(a, b){
  return a.length - b.length;
})[0].reduce(function(sum, value){
  return sum + value;
})

console.log( 'The sum of the smallest purchase is:', sumOfSmallestPurchase);
