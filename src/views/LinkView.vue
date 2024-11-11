<script setup lang="ts">

  import LinkCard from '../components/LinkCard.vue'

</script>





<template>

  <div class="card-grid">

    <LinkCard
      title="Mastodon"
      url="https://social.catppuccin.com/@unseen_ninja"
      target="@unseen_ninja@social.catppuccin.com"
      icon="fa-brands fa-mastodon"
      colour="peach"
    />

    <LinkCard
      title="League of Legends"
      url="https://www.leagueofgraphs.com/summoner/euw/probably%20inting-fqm"
      target="probably inting#FQM"
      icon="fa-solid fa-gamepad"
      colour="grape"
    />

    <LinkCard
      title="Catppuccin"
      url="https://catppuccin.com"
      target="catppuccin.com"
      icon="fa-solid fa-palette"
      colour="raspberry"
    />

    <LinkCard
      title="GitHub"
      url="https://github.com/unseen-ninja"
      target="unseen;ninja"
      icon="fa-brands fa-github"
      colour="lemon"
    />

    <LinkCard
      title="Discord"
      url="https://discord.com/"
      target="@unseen.ninja"
      icon="fa-brands fa-discord"
      colour="peach"
    />

  </div>

</template>





<style scoped lang="scss">

  .card-grid {

    display: grid; gap: var(--spacing-lg);
    grid-template: auto / repeat(auto-fit, minmax(360px, 1fr));

  }

</style>