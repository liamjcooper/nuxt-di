import { Image } from 'types/image';

export default class {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get(filename: string): Promise<Image> {
    const response = await Promise.resolve({
      url: `${this.baseURL}/assets/images/${filename}`,
      filename,
      alt: `What a beautiful ${filename}`,
    });

    return response;
  }
}
