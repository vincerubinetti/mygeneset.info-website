<template>
  <Link
    class="header_link"
    v-bind:to="to"
    v-bind:text="text"
    v-bind:icon="icon"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Link from "@/components/Link.vue";

export default defineComponent({
  props: ["to", "text", "icon"],
  components: { Link }
});
</script>

<style scope lang="scss">
.header_link {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: $black !important;
  text-decoration: none;

  span {
    position: relative;
  }

  span:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 2px;
    background: $black;
    opacity: 0;
    transition: opacity $fast;
  }

  &:hover span:after {
    opacity: 1;
  }

  @media (max-width: $tablet) {
    padding: 10px;
  }
}
</style>
