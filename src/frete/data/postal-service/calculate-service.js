class CalculateService {
  constructor(postalService) {
    this.postalService = postalService;
  }

  getTotalServiceBill(cart) {
    if (cart.getTotalCartValue() > 100) return cart.getTotalCartValue();

    return cart.getTotalCartValue() + this.postalService.getShippingPrice();
  }
}

module.exports = CalculateService;
