const UserModel = require('./models/user');
const ProductModel = require('./models/product');
const CartItemModel = require('./models/cart-item');
const Cart = require('./data/cart/cart');
const PostalService = require('./data/postal-service/postal-service');
const CalculateService = require('./data/postal-service/calculate-service');

const app = (user, cartItems) => {
  const cart = new Cart(cartItems, user);

  // create the service
  const postalService = new PostalService();
  const calculateService = new CalculateService(postalService);

  const bill = calculateService.getTotalServiceBill(cart);

  return {
    userName: user.name,
    totalBill: bill,
    cart: cart.getTotalCartValue(),
    shippingFee: bill - cart.getTotalCartValue(),
  };
};

// (() => {
//   const user = new UserModel('jose', 'esdfer23423');
//   const product = new ProductModel('mx master 3 mouse', 40);
//   const cartItem = new CartItemModel(1, product, 2);

//   const userExpenses = app(user, [cartItem]);

//   console.log(
//     `${userExpenses.userName} you are going to pay a total of $${userExpenses.totalBill}`
//   );
//   console.log(`Cart Total Price = $${userExpenses.cart}`);
//   console.log(`Shipping fee = $${userExpenses.shippingFee}`);
// })();

module.exports = { app };
