const FakeOrder = function() {
  return {
    id: 'TEST',
    ip: '24.18.4.121',
    email: 'test@test.com',
    items: [
      { sku: 'red-turban', quantity: 1 },
      { sku: 'face-value-1', quantity: 1 }
    ]
  };
};
exports.init = () => new FakeOrder();
