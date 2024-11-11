<script setup lang="ts">

  import { ref } from 'vue'


  let audio = new (AudioContext)(),
      src: string = '/assets/music/neon-arcadia.mp3',
      trackName: string = 'lemon — neon arcadia',
      pausedText: string = 'Click to play Music',
      trackInfo = ref(pausedText),
      audioData: any, playerNode: any

  const createAudio = (audioBuffer: any) => {
    if (!audioData) audioData = audioBuffer
  }

  const decode = (buffer: any) => audio.decodeAudioData(buffer, createAudio)

  fetch(src, {mode: "cors"})
    .then((response) => response.arrayBuffer())
    .then(decode)

  const volume = audio.createGain()
        volume.gain.value = 0.25
        volume.connect(audio.destination)

  function playLoop(audioBuffer: any) {
    playerNode = audio.createBufferSource()
    playerNode.buffer = audioBuffer
    playerNode.connect(volume)
    playerNode.loop = true
    playerNode.start()
  }

  function toggleMusic() {

    const animationPlay  = document.getElementById('animate-play'),
          animationPause = document.getElementById('animate-pause')

    if (playerNode) {
      // @ts-ignore
      animationPause.beginElement()
      trackInfo.value = pausedText
      playerNode.stop()
      playerNode = null
    }

    else {
      // @ts-ignore
      animationPlay.beginElement()
      trackInfo.value = trackName
      playLoop(audioData)
    }

  }

</script>





<template>
  <div id="player">

    <small id="track-info">{{ trackInfo }}</small>

    <button @click="toggleMusic();" id="play-button" aria-live="assertive" tabindex="1" aria-label="Play/Pause">
      <svg width="100%" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <path id="ytp-12" d="M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28">
              <animate id="animate-play" begin="indefinite" attributeName="d" dur="200ms" fill="freeze" keySplines=".4 0 1 1" from="M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28" to="M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26"></animate>
              <animate id="animate-pause" begin="indefinite" attributeName="d" dur="200ms" fill="freeze" keySplines=".4 0 1 1" from="M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26" to="M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28"></animate>
            </path>
          </defs>
          <use xlink:href="#ytp-12" class="ytp-svg-fill"></use>
      </svg>
    </button>

  </div>
</template>





<style scoped lang="scss">

  #player {

    display: flex;
    align-items: center;
    font-size: var(--font-size-small);

  }


  #player #play-button {

    transform: translate(-.5px, 4px);

    margin: 0; padding: 0;

    border: none;
    background-color: transparent;


    svg * { transition: fill .1s; }

  }


  a:has(#track-info) { color: var(--text-muted); }
  #player #track-info { padding-inline-start: var(--spacing-sm); }


  #play-button svg { height: 3.2rem; }
  #play-button svg > * { fill: var(--text-highlight); }
  #play-button:hover svg > * { fill: var(--peach); }

</style>