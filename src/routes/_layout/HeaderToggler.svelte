<script lang="ts">
  import Icon from "$components/Icon.svelte"

  let {
    loading = false,
    enabled = $bindable(false),
  } = $props()
</script>

<button
    onclick={() => {enabled = !enabled}}
    class:enabled
    class:loading>
  <span class="compass">
    <Icon icon="navigation" />
  </span>

  <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M46 0H0L18 29L46 46V0Z" fill="black"/>
  </svg>
</button>

<style lang="scss">
  @use "sass:map";
  @use "$scss/env/global" as env;

  button {
    width: fit-content;
    position: relative;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .compass {
    position: absolute;
    top: 13%;
    right: 13%;

    transition: transform var(--header-open-transition-duration);
    transform-origin: 10px 10px;
  }

  svg path {
    transition: fill var(--header-open-transition-duration);
    fill: map.get(env.$color, action);
  }

  button.loading {
    .compass {
      animation: loading 1s linear infinite;
    }
  }

  button.enabled {
    .compass {
      transform: rotate(90deg);
    }

    svg path {
      fill: map.get(env.$color, action-active);
    }
  }
</style>