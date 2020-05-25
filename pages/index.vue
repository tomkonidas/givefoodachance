<template>
  <div class="container landing" :style="{ backgroundImage: `url(${landingBackgroundUrl})` }">
    <div>
      <logo />
      <h1 class="title">Give Food a Chance</h1>
      <h2 class="subtitle">Golfo Siozios RD</h2>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import landingBackgroundUrl from "~/assets/landing.jpg";
import landingMobileBackgroundUrl from "~/assets/landing_mobile.jpg";

export default {
  components: {
    Logo
  },
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  },
  data() {
    return { landingBackgroundUrl, landingMobileBackgroundUrl };
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.landing {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
