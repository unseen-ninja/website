<script setup lang="ts">
import type { Accent } from '../lib/types';

  const {
    title,
    url,
    target,
    colour,
    icon
  } = withDefaults(defineProps<{
    title: string
    url: string
    target?: string
    colour: Accent
    icon?: string
  }>(), {
    colour: 'raspberry'
  })

</script>





<template>

  <a
    :href="url"
    class="social-card"
    :style="
      '--accent-colour: var(--' + colour + ');' +
      '--accent-gradient: var(--' + colour + '-gradient);'
    ">

    <div class="icon" role="img">
      <i :class="icon"></i>
    </div>
    <div class="context">
      <h3>{{ title }}</h3>
      <span class="target">{{ target || url }}</span>
    </div>

  </a>

</template>





<style scoped lang="scss">

  .social-card {

    border-radius: var(--spacing-md);
    background-color: var(--surface);

    text-decoration: none;

  }



  .context {

    padding: var(--spacing-md);

    color: var(--text-muted);


    h3, span { margin: 0; padding: 0; }
    span { font-size: var(--font-size-small); }


    h3 {

      font-size: var(--font-size-regular);

      transition: color 200ms ease-in-out;

    }

  }



  .icon {

    position: relative;

    display: grid;
    place-items: center;

    height: clamp(5vh, 350px, 25vh);

    border-radius: var(--spacing-md);
    background-color: var(--accent-colour);
    background-image: var(--accent-gradient);

    font-size: var(--font-size-3x);
    color: var(--black);


    &::before,
    &::after {

      content: '';

      position: absolute;
      inset: 0;
      z-index: 3;

      border-radius: var(--spacing-md);

      pointer-events: none;

    }


    &::before {

      opacity: 25%;

      background-image: url('/assets/images/noise.png');
      background-repeat: repeat;
      mix-blend-mode: overlay;

    }


    &::after {

      opacity: 0;

      background-image: url('/assets/images/vhs.gif');
      background-repeat: no-repeat; background-size: cover;
      mix-blend-mode: screen;

      transition: opacity .3s;


      @media (prefers-reduced-motion) {
        background-image: none; transition: none;
      }

    }

  }



  .social-card:hover {

    .context h3 { color: var(--accent-colour); }
    .icon::after { opacity: 100%; }

  }

</style>