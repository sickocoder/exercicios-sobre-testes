const Cart = require('./cart');
const CartItemModel = require('../../models/cart-item');
const ProductModel = require('../../models/product');
const UserModel = require('../../models/user');

const user = new UserModel('jose', 'esdfer23423');

describe('Cart Class', () => {
  test('total cart value should be zero if it has no item', () => {
    const cart = new Cart([], user);

    expect(cart.cartItems.length).toBe(0);
    expect(cart.getTotalCartValue()).toBe(0);
  });

  test('should add new product to cart', () => {
    const product = new ProductModel('ps5', 10);
    const cartItem = new CartItemModel(1, product, 2);
    const cart = new Cart([], user);

    cart.addCartItem(cartItem);

    expect(cart.cartItems.length).toBe(1);
    expect(cart.cartItems).toContain(cartItem);
    expect(cart.getTotalCartValue()).toBe(20);
  });

  test('should only increase the quantity and value of cart if user adds an existing item', () => {
    const product = new ProductModel('macbook pro', 50);
    const cartItem = new CartItemModel(1, product, 1);
    const cart = new Cart([cartItem], user); // cart already has a macbook pro

    const twoMoreMacbooks = new CartItemModel(1, product, 2);
    cart.addCartItem(twoMoreMacbooks); // adding 2 more macbooks pro

    expect(cart.cartItems.length).toBe(1);
    expect(cart.getTotalCartValue()).toBe(150);
  });

  test('should decrease the quantity of a product', () => {
    const product = new ProductModel('macbook pro', 50);
    const cartItem = new CartItemModel(1, product, 5);
    const cart = new Cart([cartItem], user); // cart already has a macbook pro

    cart.decreaseCartItemQuantity(cartItem, 3);

    expect(cart.getTotalCartProductsCount()).toBe(2);
  });

  test('should remove prodcut from cart if user removes the total quantity of a product', () => {
    const product = new ProductModel('macbook pro', 50);
    const cartItem = new CartItemModel(1, product, 5);
    const cart = new Cart([cartItem], user); // cart already has a macbook pro

    cart.decreaseCartItemQuantity(cartItem, 5);

    expect(cart.cartItems).not.toContain(cartItem);
  });
});
