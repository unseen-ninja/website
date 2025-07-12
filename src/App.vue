<script setup lang="ts">

  import { RouterLink, RouterView } from 'vue-router'

  import Logo from './components/LogoSemicolon.vue'
  import MusicPlayer from './components/MusicPlayer.vue'

</script>





<template>

  <header>
    <RouterLink to="/" title="Home"><Logo /></RouterLink>
  </header>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <a href="https://dnd.unseen.ninja">DnD</a>
    <RouterLink to="/linktree">Linktree</RouterLink>
  </nav>

  <main>
    <router-view v-slot="{ Component }">
      <component :is="Component" :key="$route.path" />
    </router-view>
  </main>

  <footer>
    <a href="https://ctp-webr.ing/unseen-ninja/previous"><i class="fa-solid fa-arrow-left"></i></a>
    <a href="https://ctp-webr.ing/">Webring</a>
    <a href="https://ctp-webr.ing/unseen-ninja/next"><i class="fa-solid fa-arrow-right"></i></a>
  </footer>

</template>





<style lang="scss">

  body {

    padding: var(--spacing-md);

    background: var(--base);
    background-image: url('/assets/images/noise.png');
    background-position: center;
    background-blend-mode: overlay;

  }



  #app {

    --logo-container: var(--spacing-lg);


    display: grid;
    grid-template-columns: var(--logo-container) calc(100vi - var(--logo-container) - (2 * var(--spacing-md)));
    grid-template-rows: var(--logo-container) calc(100vb - (2 * var(--logo-container)) - (2 * var(--spacing-md))) var(--logo-container);
    grid-template-areas:
      "logo footer footer"
      "main  main main"
      "nav nav nav";

    width: 100%; height: 100%;



    @media (min-width: 500px) { --logo-container: var(--spacing-xl); }


    @media (min-width: 800px) {


      grid-template-areas:
        "logo nav nav"
        "footer main main"
        "footer main main";

    }



    header { grid-area: logo; }



    main {

      grid-area: main;

      overflow-y: scroll;

      padding: var(--spacing-sm);


      @media (min-width: 500px) { padding: var(--spacing-md); }
      @media (min-width: 800px) { padding: var(--spacing-lg); }

    }



    nav {

      grid-area: nav;

      display: flex;
      align-items: center; justify-content: center;
      gap: var(--spacing-lg);

      margin-inline: var(--spacing-sm);

      border-radius: var(--spacing-sm);
      background-color: var(--surface);


      @media (min-width: 500px) { margin-inline: var(--spacing-md); }


      @media (min-width: 800px) {

        justify-content: end;

        padding-inline: var(--spacing-lg);

        background-color: transparent;

      }

    }



    footer {

      grid-area: footer;

      display: flex;
      justify-content: end;

      padding-inline: var(--spacing-sm);


      @media (min-width: 500px) { padding: var(--spacing-md); }

      @media (min-width: 800px) {

        justify-content: start;

        padding: var(--spacing-lg);

        transform: rotate(180deg);

        writing-mode: vertical-rl;
        text-orientation: mixed;


        a > i {
          transform-origin: center center;
        }

        a:nth-child(1) > i {
          transform: rotate(90deg);
        }

        a:nth-child(3) > i {
          transform: rotate(90deg);
        }

      }

    }

  }


  nav,
  footer {

    a {

      padding: var(--spacing-sm);

      border-radius: var(--spacing-xs);

      line-height: 1;
      text-decoration: none;
      color: var(--text-muted);

      transition:
      background-color .3s,
      color .3s;


      &:hover {

        background-color: var(--shadow);

        color: var(--text);

      }


      &.router-link-active { color: var(--text-highlight); }

    }

  }

</style>
