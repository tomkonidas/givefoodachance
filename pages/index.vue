<template>
  <div class="container landing">
    <div>
      <h1 class="title">Give Food a Chance</h1>
      <TypeWritter />
      <Logo width="160" />
      <Socials />
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import TypeWritter from "~/components/TypeWritter.vue";
import Socials from "~/components/Socials.vue";

export default {
  components: {
    Logo,
    TypeWritter,
    Socials,
  },
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
      ],
    };
  },
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
  font-weight: 600;
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
  background: black url(/img/landing.jpg) no-repeat center center/cover;
}
@media (max-width: 768px) {
  .landing {
    background: black url(/img/landing_mobile.jpg) no-repeat center center/cover;
  }
  .title {
    font-size: 32px;
  }
  .subtitle {
    font-size: 26px;
  }
}
</style>
