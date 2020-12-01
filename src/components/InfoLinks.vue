<template>
  <div class="info_links">
    <Link to="about#terms" text="Terms of Use" /> |
    <Link to="about#cite" text="How to Cite" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Link from "@/components/Link.vue";

export default defineComponent({ components: { Link } });
</script>

<style scoped lang="scss">
.info_links {
  text-align: center;
}
</style>
