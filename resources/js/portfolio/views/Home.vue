<template>
  <navbar />

  <div
    class="mx-6 my-4 sm:mx-10 md:mx-20 lg:mx-48 mt-40 dark:text-gray-300 select-none"
  >
    <div class="flex items-center flex-wrap gap-3">
      <div class="m-3">
        <img
          :src="asset('assets/syafiq2.jpg')"
          width="140"
          class="rounded-full"
          alt=""
        />
      </div>

      <div>
        <p
          class="text-[3rem] md:text-[3.4rem] lg:text-[4rem] font-bold dark:text-gray-300"
          id="hi"
          :class="{ intro__text: !hideSocial }"
          data-text="I'm Syafiq Afifuddin"
        ></p>

        <p :class="{ 'opacity-[0]': hideSocial }" class="mb-2 mt-3 dark:text-gray-300">
          PT. Kreasi Putra Hotama's
          <span class="font-bold text-sm">Back-end Developer</span>
        </p>
      </div>
    </div>
    <hr class="mt-3 mb-5 border-gray dark:border-gray-600"/>

    <p
      class="transition-all duration-300 text-justify dark:text-gray-300"
      id="about"
      :class="{ 'opacity-[0]': hideSocial }"
    >
      a skilled professional with extensive experience in developing backend
      applications using various programming languages such as PHP, Javascript,
      and Vuejs. My expertise lies in working with Laravel and Lumen frameworks,
      where I have developed and maintained several projects, including
      <a
        class="underline"
        href="https://github.com/tb12as/batch-link"
        target="blank"
        >Batch Link</a
      >,
      <a
        href="https://github.com/tb12as/linkers"
        class="underline"
        target="blank"
        >Linker</a
      >, and more. With my strong background in backend development, I have
      acquired the ability to design and develop scalable, secure, and reliable
      applications.
    </p>

    <div
      class="transition-all duration-300  flex my-4 mt-20 flex flex-wrap"
      :class="{ 'opacity-[0]': hideSocial }"
    >
      <a
        class="outline-none p-2 mx-2 flex items-center transition hover:text-gray-300 hover:bg-[#111] dark:hover:text-gray-900 dark:hover:bg-gray-300 hover:scale-110 rounded-full duration-200"
        href="https://github.com/tb12as"
        target="blank"
      >
        <vue-feather type="github"></vue-feather>
      </a>

      <a
        class="outline-none p-2 mx-2 flex items-center transition hover:text-gray-300 hover:bg-[#111] dark:hover:text-gray-900 dark:hover:bg-gray-300 hover:scale-110 rounded-full duration-200"
        href="https://gitlab.com/tb12as"
        target="blank"
      >
        <vue-feather type="gitlab"></vue-feather>
      </a>

      <a
        class="outline-none p-2 mx-2 flex items-center transition hover:text-gray-300 hover:bg-[#111] dark:hover:text-gray-900 dark:hover:bg-gray-300 hover:scale-110 rounded-full duration-200"
        href="https://www.facebook.com/tsys12"
        target="blank"
      >
        <vue-feather type="facebook"></vue-feather>
      </a>

      <a
        href="https://www.linkedin.com/in/syafiq-afifuddin-98362322a/"
        class="outline-none p-2 mx-2 flex items-center transition hover:text-gray-300 hover:bg-[#111] dark:hover:text-gray-900 dark:hover:bg-gray-300 hover:scale-110 rounded-full duration-200"
        target="blank"
      >
        <vue-feather type="linkedin"></vue-feather>
      </a>
      <a
        href="https://www.instagram.com/syfqaffddn/"
        class="outline-none p-2 mx-2 flex items-center transition hover:text-gray-300 hover:bg-[#111] dark:hover:text-gray-900 dark:hover:bg-gray-300 hover:scale-110 rounded-full duration-200"
        target="blank"
      >
        <vue-feather type="instagram"></vue-feather>
      </a>
    </div>
  </div>
</template>

<style>
.intro__text {
  /* margin: 2rem 0rem 1.5rem; */
  position: relative;
  /* letter-spacing: -1.1px; */
}
.intro__text::before,
.intro__text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 101%;
  height: 105%;
}
.intro__text::before {
  left: 2px;
  text-shadow: -1px 0 blue;
  animation: noise-anim-2 15s infinite linear alternate-reverse;
}
.intro__text::after {
  left: -2px;
  text-shadow: 3px 0 rgb(255, 71, 71);
  animation: noise-anim 2s infinite linear alternate-reverse;
}
@keyframes noise-anim {
  0% {
    clip-path: inset(29% 0 25% 0);
  }
  5% {
    clip-path: inset(9% 0 38% 0);
  }
  10% {
    clip-path: inset(96% 0 1% 0);
  }
  15% {
    clip-path: inset(75% 0 23% 0);
  }
  20% {
    clip-path: inset(46% 0 50% 0);
  }
  25% {
    clip-path: inset(3% 0 46% 0);
  }
  30% {
    clip-path: inset(82% 0 2% 0);
  }
  35% {
    clip-path: inset(88% 0 1% 0);
  }
  40% {
    clip-path: inset(91% 0 8% 0);
  }
  45% {
    clip-path: inset(96% 0 2% 0);
  }
  50% {
    clip-path: inset(59% 0 38% 0);
  }
  55% {
    clip-path: inset(41% 0 53% 0);
  }
  60% {
    clip-path: inset(21% 0 47% 0);
  }
  65% {
    clip-path: inset(89% 0 4% 0);
  }
  70% {
    clip-path: inset(1% 0 95% 0);
  }
  75% {
    clip-path: inset(86% 0 4% 0);
  }
  80% {
    clip-path: inset(95% 0 5% 0);
  }
  85% {
    clip-path: inset(54% 0 36% 0);
  }
  90% {
    clip-path: inset(70% 0 27% 0);
  }
  95% {
    clip-path: inset(6% 0 16% 0);
  }
  100% {
    clip-path: inset(95% 0 2% 0);
  }
}
@keyframes noise-anim-2 {
  0% {
    clip-path: inset(76% 0 21% 0);
  }
  5% {
    clip-path: inset(54% 0 7% 0);
  }
  10% {
    clip-path: inset(55% 0 29% 0);
  }
  15% {
    clip-path: inset(89% 0 3% 0);
  }
  20% {
    clip-path: inset(33% 0 40% 0);
  }
  25% {
    clip-path: inset(17% 0 56% 0);
  }
  30% {
    clip-path: inset(37% 0 51% 0);
  }
  35% {
    clip-path: inset(38% 0 19% 0);
  }
  40% {
    clip-path: inset(93% 0 4% 0);
  }
  45% {
    clip-path: inset(44% 0 14% 0);
  }
  50% {
    clip-path: inset(53% 0 26% 0);
  }
  55% {
    clip-path: inset(67% 0 11% 0);
  }
  60% {
    clip-path: inset(85% 0 13% 0);
  }
  65% {
    clip-path: inset(27% 0 37% 0);
  }
  70% {
    clip-path: inset(87% 0 4% 0);
  }
  75% {
    clip-path: inset(10% 0 8% 0);
  }
  80% {
    clip-path: inset(51% 0 27% 0);
  }
  85% {
    clip-path: inset(10% 0 60% 0);
  }
  90% {
    clip-path: inset(83% 0 3% 0);
  }
  95% {
    clip-path: inset(23% 0 55% 0);
  }
  100% {
    clip-path: inset(1% 0 81% 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .intro__text {
    animation: none;
  }
  .intro__text::before,
  .intro__text::after {
    content: none;
  }
}
</style>

<script>
import Typed from "typed.js";
import Navbar from "../components/Navbar.vue";

export default {
  data() {
    return {
      hideSocial: true,
    };
  },
  components: { Navbar },
  mounted() {
    new Typed("#hi", {
      showCursor: false,
      strings: ["Hello There!", "I'm Syafiq Afifuddin"],
      typeSpeed: 15,
    });

    setTimeout(() => {
      this.hideSocial = false;
    }, 2000);
  },
};
</script>
