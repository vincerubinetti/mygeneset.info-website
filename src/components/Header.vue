<template>
  <header v-bind:big="big">
    <button @click="toggle">
      <i v-if="expanded" class="fas fa-angle-double-up"></i>
      <i v-else class="fas fa-bars"></i>
      <span v-if="expanded">Collapse</span>
      <span v-else>Menu</span>
    </button>
    <Nav v-bind:expanded="expanded" />
    <Logo v-bind:big="big" />
    <Profile v-bind:expanded="expanded" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "@/components/Nav.vue";
import Logo from "@/components/Logo.vue";
import Profile from "@/components/Profile.vue";

export default defineComponent({
  props: ["big"],
  components: {
    Nav,
    Logo,
    Profile
  },
  data() {
    return { expanded: false };
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded;
    }
  }
});
</script>

<style scoped lang="scss">
header {
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

button {
  display: none;
  padding: 10px;
  flex-basis: 100%;

  @media (max-width: $phone) {
    & {
      display: flex;
    }
  }
}
</style>
