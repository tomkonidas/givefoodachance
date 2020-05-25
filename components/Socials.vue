<template>
  <section>
    <div class="social" v-for="(social, index) in socials" :key="index">
      <a :href="social.url"
        ><img :src="social.iconSrc" :alt="social.name" width="32"
      /></a>
    </div>
  </section>
</template>

<script>
import instagram from "~/assets/instagram.svg";
import twitter from "~/assets/twitter.svg";
import linkedin from "~/assets/linkedin.svg";

export default {
  data() {
    return {
      socials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/golfo-siozios-rd-dt-p-643191128/",
          iconSrc: linkedin,
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/givefoodachance/",
          iconSrc: instagram,
        },
        {
          name: "Twitter",
          url: "https://twitter.com/givefoodachance",
          iconSrc: twitter,
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}
.social {
  padding: 0.5rem;
  animation: 2s appear;
}
.social:hover {
  filter: brightness(90%);
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
