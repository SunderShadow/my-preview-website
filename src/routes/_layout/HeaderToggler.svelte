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
</button>

<style lang="scss">
  @use "sass:map";
  @use "$scss/env/global" as env;

  button {
    display: flex;

    width: 60px;
    height: 60px;
    position: relative;

    background-color: map.get(env.$color, action);

    transition: background-color var(--header-open-transition-duration);

    mask-image: url("/header_open_mask.svg");
    mask-repeat: no-repeat;
    mask-size: 100%;
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
    margin: 10% 10% auto auto;
    transition: transform var(--header-open-transition-duration);

    width: 50%;
    height: 50%;

    :global {
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  button > svg {
    width: 100%;
    height: 100%;
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

    background: map.get(env.$color, action-active);
  }
</style>