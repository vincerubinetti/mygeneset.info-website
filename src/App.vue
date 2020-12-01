<template>
  <router-view />
</template>

<style lang="scss">
* {
  font-family: $sans;
  box-sizing: border-box;
}
html,
body,
#app {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;
}
button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
}
i + span {
  margin-left: 10px;
}
</style>
