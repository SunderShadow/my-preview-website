<script lang="ts">
  import "$scss/bootstrap.scss"
  import Header from "./_layout/Header.svelte"
  import HeaderToggler from "./_layout/HeaderToggler.svelte"
  import {afterNavigate, beforeNavigate} from "$app/navigation";

  let isHeaderOpen = $state(false)
  let headerSlideAnimationDurationMs = 500
  let pageLoading = $state(true)

  beforeNavigate(() => { pageLoading = true })
  afterNavigate(() => { pageLoading = false })

  let {children} = $props()
</script>

<div class="layout">
  {#if isHeaderOpen}
    <Header slideDurationMs={headerSlideAnimationDurationMs}/>
  {/if}

  <div class="layout-bottom">
    <div class="header_toggler">
      <HeaderToggler
          loading={pageLoading}
          headerOpen={isHeaderOpen}
          onclick={() => {isHeaderOpen = !isHeaderOpen}} />
    </div>

    <main>
      {@render children()}
    </main>
  </div>
</div>


<style lang="scss">
  .layout {
    display: flex;
    flex-direction: column;
    height: 100%;

    :global {
      & > header {
        flex-grow: 0;
      }

      > .layout-bottom {
        position: relative;
        flex-grow: 1;
      }
    }
  }

  .header_toggler {
    top: 0;
    right: 0;

    position: absolute;
  }
</style>