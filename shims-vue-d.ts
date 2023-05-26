// @see https://github.com/vuejs/vue-cli/issues/1198
//src/shims-vue.d.ts
declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

/*
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
*/

//if you use env variables c:
declare module "*/envs.ts";
