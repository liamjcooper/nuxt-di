import { Product } from 'types/product';

export default class {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async all(): Promise<Product[]> {
    const response = await Promise.resolve([
      {
        id: 1,
        title: 'An awesome product',
        price: 950,
        url: `${this.baseURL}/1`,
      },
      {
        id: 2,
        title: 'And another one',
        price: 1000,
        url: `${this.baseURL}/2`,
      },
      {
        id: 3,
        title: 'DJ KHALED',
        price: 230,
        url: `${this.baseURL}/3`,
      },
    ]);

    return response;
  }
}
