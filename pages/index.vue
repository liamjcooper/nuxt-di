<template>
  <div>
    <Tutorial />
    <a v-for="product in products" :key="product.id" :href="product.url">
      <p>{{ product.title }}</p>
      <p>&pound;{{ (product.price / 100).toFixed(2) }}</p>
      <img v-if="product.image" :src="product.image" />
    </a>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types';

export default {
  name: 'IndexPage',

  async asyncData(context: Context) {
    const products = await context.app.$services.products.all();

    products.forEach(async (product) => {
      const image = await context.app.$services.images.get(`${product.id}.jpg`);
      product.image = image.url;
    });

    return { products };
  },
};
</script>
