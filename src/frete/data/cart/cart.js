class Cart {
  constructor(cartItems = [], user) {
    this.cartItems = cartItems;
    this.user = user;
  }

  addCartItem(cartItem) {
    const cartIndex = this.cartItems.findIndex(
      (cItem) => cItem.id === cartItem.id
    );

    if (cartIndex !== -1) {
      this.cartItems[cartIndex].quantity += cartItem.quantity;
    } else {
      this.cartItems.push(cartItem);
    }
  }

  removeCartItem(cartItem) {
    this.cartItems = this.cartItems.filter((c) => c.id !== cartItem.id);
  }

  decreaseCartItemQuantity(cartItem, quantity) {
    const cartIndex = this.cartItems.findIndex(
      (cItem) => cItem.id === cartItem.id
    );

    if (cartIndex !== -1) {
      if (this.cartItems[cartIndex].quantity === quantity)
        this.removeCartItem(cartItem);
      else if (this.cartItems[cartIndex].quantity > quantity)
        this.cartItems[cartIndex].quantity -= quantity;
    }
  }

  removeAll() {
    this.cartItems = [];
  }

  getTotalCartValue() {
    if (this.cartItems.length === 0) return 0;

    return this.cartItems.reduce((acc, next) => {
      return acc + next.product.value * next.quantity;
    }, 0);
  }

  getTotalCartProductsCount() {
    if (this.cartItems.length === 0) return 0;

    return this.cartItems.reduce((acc, next) => {
      return acc + next.quantity;
    }, 0);
  }
}

module.exports = Cart;
