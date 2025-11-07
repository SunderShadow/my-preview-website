<script lang="ts">
  import {SOCIAL_CONTACT_PHONE, SOCIAL_CONTACT_EMAIL, SOCIAL_CONTACT_TELEGRAM} from "$env/static/public"
  import {page} from "$app/state"
  import Icon from "$components/Icon.svelte"

  let {
      height = $bindable()
  } = $props()
</script>

<header bind:clientHeight={height}>
  <nav>
    <div>
      <div class="links_group">
        <a class:active={page.url.pathname === '/'} href="/"><Icon icon="home"/></a>
        <a class:active={page.url.pathname === '/projects'} href="/projects"><Icon icon="pen-and-paper"/></a>
      </div>

      <hr>

      <h2>Навигация</h2>
    </div>

    <div>
      <div class="links_group">
        <a href={'tel:' + SOCIAL_CONTACT_PHONE}><Icon icon="phone"/></a>
        <a href={'mailto:' + SOCIAL_CONTACT_EMAIL}><Icon icon="message"/></a>
        <a href={SOCIAL_CONTACT_TELEGRAM}><Icon icon="telegram"/></a>
      </div>

      <hr>

      <h2>Связатся со мной</h2>
    </div>
  </nav>
</header>

<style lang="scss">
  @use "sass:map";
  @use "$scss/env/global" as env;

  header {
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  }

  .links_group {
    display: flex;
    gap: 4px;
  }

  hr {
    width: 100%;
    height: 1px;
    background-color: #000;
    margin: 2px 0;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 4px 20px 2px 20px;

    > div {
      width: 40%;
      min-width: 100px;
    }

    > div:last-child .links_group {
      justify-content: right;
    }
  }

  h2 {
    width: fit-content;

    margin-left: auto;
    margin-right: auto;

    font-weight: 200;
    font-size: 1.25rem;
  }

  a {
    --size: 3rem;

    width: var(--size);
    height: var(--size);

    border-radius: 100em;

    padding: .5rem;

    background: map.get(env.$color, action);

    &.active {
      background: map.get(env.$color, action-active);
    }

    :global {
      svg {
        width: 100%;
        height: 100%;

        *[stroke] {stroke: #fff}
        *[fill] {fill: #fff}
      }
    }
  }
</style>