const CalculateService = require('./calculate-service');
const PostalService = require('./postal-service');
const ProductModel = require('../../models/product');
const CartItemModel = require('../../models/cart-item');
const Cart = require('../cart/cart');
const UserModel = require('../../models/user');

describe('Calculate Service', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.01); // will always return 10
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  test('should return the price of service', () => {
    const user = new UserModel('jose', 'esdfer23423');
    const product = new ProductModel('samsung galaxy s22', 35);
    const cartItem = new CartItemModel(1, product, 2);
    const userCart = new Cart([cartItem], user);

    const postalService = new PostalService();
    const shippingService = new CalculateService(postalService);

    const totalUserBill = shippingService.getTotalServiceBill(userCart);

    expect(totalUserBill).toBe(80); // 35*2 + 10
  });
});
