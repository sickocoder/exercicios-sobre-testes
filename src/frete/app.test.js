const UserModel = require('./models/user');
const ProductModel = require('./models/product');
const CartItemModel = require('./models/cart-item');
const { app } = require('./index');

describe('Shipping App', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.01); // will always return 10
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  const user = new UserModel('jose', 'esdfer23423');

  test('should not charge shipping fee if cart total cost is above $100', () => {
    const product = new ProductModel('mx master 3 mouse', 100);
    const cartItem = new CartItemModel(1, product, 5);

    const result = app(user, [cartItem]);

    expect(result).toEqual({
      userName: 'jose',
      totalBill: 500, // 5 * 100
      cart: 500,
      shippingFee: 0,
    });
  });

  test('should charge shipping fee if cart total cost is below or equal $100', () => {
    const product = new ProductModel('mx master 3 mouse', 10);
    const cartItem = new CartItemModel(1, product, 5);

    const result = app(user, [cartItem]);

    expect(result).toEqual({
      userName: 'jose',
      totalBill: 60, // 5 * 10 + 10
      cart: 50,
      shippingFee: 10, // mocked shipping fee
    });
  });
});
