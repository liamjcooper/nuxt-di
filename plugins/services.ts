import type { NuxtConfig } from '@nuxt/types';
import type { Inject } from '@nuxt/types/app';

import ProductsService from 'services/ProductsService';
import ImagesService from 'services/ImagesService';

// what your keys in the container should eventually resolve to
type Dependencies = {
  products: ProductsService;
  images: ImagesService;
};

declare module '@nuxt/types' {
  interface Context {
    $services: Dependencies;
  }
  interface NuxtAppOptions {
    $services: Dependencies;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $services: Dependencies;
  }
}

export default ({ $config }: { $config: NuxtConfig }, inject: Inject) => {
  const container = {
    dependencies: new Proxy(
      {} as Record<keyof Dependencies, object | Function>,
      {
        get(target, prop: keyof Dependencies) {
          const dependency = target[prop];

          if (typeof dependency === 'function') {
            return dependency($config);
          }

          // we already resolved (singleton)
          return dependency;
        },
      }
    ),
    bind(name: keyof Dependencies, cb: Function) {
      this.dependencies[name] = cb;
    },
    singleton(name: keyof Dependencies, cb: Function) {
      this.dependencies[name] = cb($config);
    },
    make(name: keyof Dependencies) {
      return this.dependencies[name];
    },
  };

  container.singleton('products', (config: NuxtConfig) => {
    return new ProductsService(config.products.baseURL);
  });

  container.bind('images', (config: NuxtConfig) => {
    return new ImagesService(config.images.baseURL);
  });

  inject('services', container.dependencies);
};
