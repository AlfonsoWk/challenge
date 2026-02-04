class CartElements {
  cartButton() {
    return '#shopping-cart-badge';
  }

  itemInCart() {
    return '#cart_item';
  }

  checkoutButton() {
    return '#checkout';
  }

  emptyCart(){
    return '#shopping-cart-link';
  }

  verifyBuys(){
    return '#inventory-item-name';
  }
}

export default new CartElements();