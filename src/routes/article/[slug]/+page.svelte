<script lang="ts">
  import {page} from "$app/state"

  import ArticleRenderer from "$components/ArticleRenderer/ArticleRenderer.svelte"
  let {
      data
  } = $props()

  const {
      title,
      content,
      thumbnail
  } = data

  const currentUrl = page.url.pathname
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<div class="container">
  <div class="breadcrumbs">
    <a href="/">Главная</a>
    <a href="/">Посты</a>
    <a href={currentUrl}>{title}</a>
  </div>

  <h1>{title}</h1>

  <img src={thumbnail} alt="">

  <div class="content">
    <ArticleRenderer {content}/>
  </div>
</div>

<style lang="scss">
  @use "$scss/env/global" as env;

  .container {
    margin-left: 8px;
    margin-right: 8px;
  }

  img {
    width: 100%;
    aspect-ratio: 16 / 9;
  }

  .breadcrumbs {
    margin-top: 8px;

    a {
      display: inline-block;

      &:not(:last-child)::after {
        content: ' / ';
        color: #000;
      }
    }
  }

  h1 {
    width: fit-content;

    margin: 16px auto 8px;

    font-size: 1.5rem;
    font-family: env.$headings-font-family;
  }

  .content :global {
    font-weight: 400;
    a {
      display: inline;
    }

    p {

    }
  }
</style>