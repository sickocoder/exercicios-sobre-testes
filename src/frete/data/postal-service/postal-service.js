class PostalService {
  getShippingPrice(_cep) {
    return Math.floor(Math.random() * 1000);
  }
}

module.exports = PostalService;
