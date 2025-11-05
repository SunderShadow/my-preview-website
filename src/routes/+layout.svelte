<script lang="ts">
  import "$scss/bootstrap.scss"
  import Header from "./_layout/Header.svelte"
  import HeaderToggler from "./_layout/HeaderToggler.svelte"
  import {afterNavigate, beforeNavigate} from "$app/navigation"

  let isHeaderOpen = $state(false)
  let headerHeight = $state()
  let pageLoading = $state(true)

  beforeNavigate(() => { pageLoading = true })
  afterNavigate(() => { pageLoading = false })

  let {children} = $props()
</script>

<div class="layout">
  <div id="page_header" class:closed={!isHeaderOpen} style:--height={headerHeight + 'px'}>
    <Header bind:height={headerHeight} />
  </div>

  <div class="layout-bottom">
    <div class="header_toggler">
      <HeaderToggler
          bind:enabled={isHeaderOpen}
          loading={pageLoading}
          headerOpen={isHeaderOpen}
           />
    </div>

    <main>
      {@render children()}
    </main>
  </div>
</div>


<style lang="scss">
  #page_header {
    --height: auto;
    height: var(--height);
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);

    transition-property: height, box-shadow;
    transition-duration: 500ms;
  }

  #page_header.closed {
    height: 0;
    box-shadow: 0 1px 2px transparent;
  }

  .layout {
    --header-open-transition-duration: 500ms;
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