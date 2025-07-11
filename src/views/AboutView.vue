<script setup lang="ts">

  import Wave from '../components/WavingHand.vue'

</script>





<template>

  <article id="about">

    <p class="pre-heading">About Me</p>
    <h1>Hi! My name's <span class="text-lemonade">lemon</span>. <Wave :size=32 /></h1>

    <p>By day, I work in communications, social media, and press relations, helping organizations shape their voice and stay connected in a fast-moving digital world.</p>
    <p>By night (and on weekends), I still get my hands dirty with design, code, and open source projects like <a href="https://github.com/catppuccin" target="_blank" rel="noopener noreferrer">Catppuccin</a> – a passion that stuck with me for over 15 years.</p>
    <p>I’ve always been drawn to the overlap between tech and creativity, from crafting clean frontends with HTML/CSS/JS to tweaking automation setups, managing servers, or exploring cybersecurity. I’m also a long-time Linux user (<em>yes, I use Arch btw</em>) and a firm believer in the power of open systems.</p>
    <p>Outside of tech, I recharge by diving into a good book, wandering through nature, or queueing up for another round of <em>League of Legends</em> (<em>top 1% support main – according to League of Graphs</em>).</p>
    <p>
      Whether I’m writing code or crafting copy, I love finding clarity in complexity. <br>
      If you’re into that too, let’s connect.
    </p>

  </article>

</template>





<style scoped lang="scss">


  #about {

    position: relative;

    height: 100%;
    padding: 2em;

    border-radius: var(--spacing-md);
    background-color: var(--lychee-tint);
    box-shadow: 0 .6rem 1.2rem 0 var(--shadow);


    @media (prefers-color-scheme: dark) {
      background-color: var(--blackberry-tint);
    }


    &::before {

      content: '';

      position: absolute;
      inset: 0;
      z-index: 3;

      border-radius: var(--spacing-md);

      pointer-events: none;

    }


    &::before {

      opacity: 50%;

      background-image: url('/assets/images/noise.png');
      background-repeat: repeat;
      mix-blend-mode: overlay;

    }

  }



  .image {

    position: relative;
    float: right;
    isolation: isolate;

    display: grid;
    place-items: center;

    width: 300px; aspect-ratio: 1/1;
    overflow: clip;

    border-radius: var(--spacing-sm);
    background-color: var(--blackberry);
    background-image: url('/assets/images/noise.png');
    background-position: center;
    background-blend-mode: overlay;

    font-size: 200%; font-weight: 900;
    color: var(--lychee-tint);


    img {

      position: absolute;
      z-index: -3;

      opacity: .5;

      width: 100%; height: 100%;
      object-fit: cover;

      background-color: var(--blackberry);
      background-image: url('/assets/images/noise.png');
      background-position: center;
      background-blend-mode: overlay;

    }


    &::before,
    &::after {

      content: '';

      position: absolute;
      inset: 0;

    }


    &::before {

      z-index: -1;

      background-color: var(--lemon);
      background-image: var(--lemon-gradient);
      mix-blend-mode: multiply;

    }


    &::after {

      z-index: -2;

      background-color: var(--grape);
      background-image: var(--grape-gradient);
      mix-blend-mode: screen;

    }



  }

</style>
