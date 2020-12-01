<template>
  <div class="quick_links">
    <Link to="https://github.com/" icon="fab fa-github fa-fw" />
    <Link to="https://twitter.com/" icon="fab fa-twitter fa-fw" />
    <Link to="https://google.com/" icon="fab fa-google fa-fw" />
    <Link to="about#contact" icon="far fa-envelope fa-fw" />
    <Link to="about" icon="far fa-question-circle fa-fw" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Link from "@/components/Link.vue";

export default defineComponent({ components: { Link } });
</script>

<style scoped lang="scss">
.quick_links {
  text-align: left;

  & > * {
    display: inline-block;
    padding: 5px;
    color: $black;

    &:hover {
      color: $accent-dark;
    }
  }
}
</style>
