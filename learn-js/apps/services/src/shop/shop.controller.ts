import { Controller, Get, Param, Put, Render  } from '@nestjs/common';

@Controller('shop')
export class ShopController {
  count = 0;
  constructor() {}

  async getProductList() {
    let items = [];
    await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json => items = json);
      return { items, randomItems: this.makeRandomItems(items) }
  }

  makeRandomItems(items) {
    const shuffledArray = items.slice();

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray.slice(0, 10);
  }

  @Get()
  @Render('shop')
  async getAllProducts() {
    return this.getProductList();
  }

  @Get('/cart')
  @Render('cart')
  async getCart() {
    let cart: any = {};
    await fetch('https://fakestoreapi.com/carts/1')
            .then(res=>res.json())
            .then(json=>cart = json);
    this.count = cart.products.length;
    return { count: cart.products.length, layout: false };
  }

  @Get('/show-cart')
  @Render('show-cart')
  async showCart() {
    let cart: any = {};
    await fetch('https://fakestoreapi.com/carts/1')
            .then(res=>res.json())
            .then(json=>cart = json);
    return { cart };
  }


  @Put('/add-to-cart')
  @Render('cart')
  async updateCart() {
    return { count: ++ this.count, added: true,  layout: false };
  }

  @Get('/show-list')
  @Render('partials/itemsList')
  async showList() {
    return { ... await this.getProductList() , layout: false};
  }

  @Get('/show-grid')
  @Render('partials/itemsGrid')
  async showGrid() {
    return { ... await this.getProductList() , layout: false};
  }

  @Get('/carousel')
  @Render('partials/carousel')
  async carousel() {
    const products = await this.getProductList();
    return { items: products.randomItems,  layout: false };
  }
}
