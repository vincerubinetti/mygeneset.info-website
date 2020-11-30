<template>
  <footer>
    <FooterLeft />
    <FooterCenter />
    <FooterRight />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterLeft from "@/components/FooterLeft.vue";
import FooterCenter from "@/components/FooterCenter.vue";
import FooterRight from "@/components/FooterRight.vue";

export default defineComponent({
  props: ["big"],
  components: {
    FooterLeft,
    FooterCenter,
    FooterRight
  }
});
</script>

<style scoped lang="scss">
footer {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  background: $accent-light;

  & > * {
    flex-basis: 0;
    flex-grow: 1;
  }
}
</style>
