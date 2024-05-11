<script setup lang="ts">

  import Wave from '../components/WavingHand.vue'

</script>





<template>

  <article id="about">

    <p class="pre-heading">About Me</p>
    <h1>Hi! My name's <span class="text-lemonade">lemon</span>. <Wave :size=24 /></h1>

    <p>and I'm »[…] just a regular everyday normal guy« working on design and code thingies like <a href="https://catppuccin.com">Catppuccin</a> – well, sometimes. <span class="text-lemonade">#opensource</span> advocate and according to League of Graphs: <strong><span class="text-lemonade">a top 1% support player.</span></strong></p>
    <p>Always quite keen on new challenges I spent the past 15-ish years digging into design principles and web technologies – always trying to stay up to date with the latest and greatest design trends and tech stuff the ever-changing digital landscape – we all grew so accustomed to – has to offer.</p>
    <p>Nowadays I don't get to work too much on web stuff as my main job is in communications, social media and press work. But whenever I get the chance I'll dig myself into some nice HTML, CSS and JavaScript.</p>
    <p>Besides web dev I also dabble into Linux <small><em>ackchyually it's GNU/Linux??! I use arch btw.</em></small>, home and process automation, server side stuff, and cyber security.</p>
    <p>Outside the tech space or well… at least partially I enjoy video games, hiking <small><em>really depends on my mood tho</em></small> or just reading a good book.</p>

  </article>

</template>





<style scoped lang="scss">

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