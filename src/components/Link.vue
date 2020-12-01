<template>
  <a v-if="isExternalLink(to)" v-bind:href="to" class="link">
    <i v-if="icon" v-bind:class="icon" />
    <span v-if="text">
      {{ text }}
    </span>
  </a>
  <router-link v-else v-bind:to="to" class="link">
    <i v-if="icon" v-bind:class="icon" />
    <span v-if="text">
      {{ text }}
    </span>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { isExternalLink } from "@/util/string";

const props = ["to", "text", "icon"];
const methods = { isExternalLink };

export default defineComponent({ props, methods });
</script>

<style scope lang="scss">
.link {
  color: $accent-dark;
  transition: color $fast;
}

.link:hover {
  color: $black;
}
</style>
