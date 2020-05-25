<template>
  <img src="~/assets/logo.svg" class="Logo" alt="Give Food a Chance Logo" />
</template>

<style scoped>
.Logo {
  animation: 2s appear;
  margin: auto;
  width: 160px;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .Logo {
    width: 89px;
  }
}
</style>
