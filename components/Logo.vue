<template>
  <img src="~/assets/logo.svg" class="Logo" alt="Give Food a Chance Logo" />
</template>

<style scoped>
.Logo {
  animation: 2s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
