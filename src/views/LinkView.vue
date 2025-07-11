<script setup lang="ts">

  import LinkCard from '../components/LinkCard.vue'

</script>





<template>

  <div class="card-grid">

    <LinkCard
      title="Discord"
      url="https://discord.com/"
      target="@unseen.ninja"
      icon="fa-brands fa-discord"
      colour="grape"
    />

    <LinkCard
      title="Mastodon"
      url="https://social.catppuccin.com/@unseen_ninja"
      target="@unseen_ninja"
      icon="fa-brands fa-mastodon"
      colour="peach"
    />

    <LinkCard
      title="GitHub"
      url="https://github.com/unseen-ninja"
      target="unseen;ninja"
      icon="fa-brands fa-github"
      colour="lemon"
    />

    <LinkCard
      title="Catppuccin"
      url="https://catppuccin.com"
      target="catppuccin.com"
      icon="fa-solid fa-palette"
      colour="raspberry"
    />

  </div>

</template>





<style scoped lang="scss">

  .card-grid {

    display: grid; gap: var(--spacing-md);


    @media (min-width: 800px) {

      gap: var(--spacing-lg);
      grid-template: auto / repeat(auto-fit, minmax(340px, 1fr));

    }
  }

</style>
