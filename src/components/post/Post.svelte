<script lang="ts">
  let {
      thumbnail,
      title,
      href,
      excerpt
  } = $props()
</script>
<article>
  <img src={thumbnail} alt="">

  <div class="body">
    <h1><a {href}>{title}</a></h1>
    <p>{excerpt}</p>
  </div>
</article>

<style lang="scss">
  @use "sass:map";
  @use "$scss/env/global" as env;

  img {
    position: relative;
    aspect-ratio: 16 / 9;
    object-fit: fill;
    width: 100%;
  }

  article {
    position: relative;
  }

  h1 {
    font-family: env.$headings-font-family;
    font-size: 1.5rem;
    text-decoration: underline;
  }

  p {
    font-weight: 300;
  }
  .body {
    padding: 4px;
  }

  a::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
  }
</style>