<script lang="ts">
  import {slide} from "svelte/transition"
  let {
      slideDurationMs = 500
  } = $props()
</script>

<header transition:slide={{duration: slideDurationMs}}>

</header>

<style lang="scss">
  header {
    height: 42px;
    background-color: blue;
  }
</style>