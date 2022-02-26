# nuxt-di

Something nobody asked for and don't need!

Was messing around with the idea of [JS proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) while working on a big frontend Nuxt 3 project at work and thought "surely this is a pretty good entrypoint for dependency injection" (I know, I know, this repo uses Nuxt 2 but I just wanted to fire something up quick so it can be pushed to my personal GitHub).

It's probably completely unnecessary and not very useful, since Nuxt already provides things like context injection through plugins anyway... but if anything it taught me a little bit more about Nuxt plugins and recent ES[whatever-the-year-is] features.

Hopefully someone finds it enlightening? Could be extracted into a JS backend too, as at the end of the day it's just making use of JS proxies. 

The meat can be found in `/plugins/services.ts` and usage can be found at `/pages/index.vue`.

Thanks for stopping by!

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```