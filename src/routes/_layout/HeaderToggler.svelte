<script lang="ts">
  import Icon from "$components/Icon.svelte"

  let {
      headerOpen = $bindable(false),
      loading = $bindable(false),
    ...restProps
  } = $props()
</script>

<button class:header_open={headerOpen} class:loading {...restProps}>
  <span class="compass">
    <Icon icon="navigation" />
  </span>

  <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M46 0H0L18 29L46 46V0Z" fill="black"/>
  </svg>
</button>

<style lang="scss">
  button {
    width: fit-content;
    position: relative;
  }

  button.header_open {
    .compass {
      transform: rotate(90deg);
    }
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

    transition: transform 500ms;
    transform-origin: 10px 10px;
  }

  button.loading {
    .compass {
      animation: loading 1s linear infinite;
    }
  }
</style>