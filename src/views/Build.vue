<template>
  <Header />
  <Main title="Build" icon="fas fa-cube">
    <YourGenesets />
    <BuildNew />
  </Main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";
import YourGenesets from "./build/YourGenesets.vue";
import BuildNew from "./build/BuildNew.vue";

export default defineComponent({
  components: {
    Header,
    Main,
    Footer,
    YourGenesets,
    BuildNew
  }
});
</script>
