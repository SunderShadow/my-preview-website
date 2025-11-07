<script>
  import Post from "$components/post/Post.svelte"
</script>

<svelte:head>
  <title>Посты</title>
</svelte:head>

<h1>Посты</h1>

<div class="posts">
  {#each Array(5) as _}
    <Post href="/article/some-article/"
          title="Очень длинный заголовок для прикольного поста"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, pariatur?"
    />
    <hr>
  {/each}
</div>

<aside>
  Всё, посты кончились :/
</aside>

<style lang="scss">
  @use "$scss/env/global" as env;
  h1 {
    width: fit-content;

    font-size: 3rem;
    font-weight: 700;
    font-family: env.$headings-font-family;
    margin: 12px auto 16px;
  }

  hr {
    height: 2px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    background-color: #000;
  }

  .posts {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
    padding-left: 4px;
    padding-right: 4px;
  }

  aside {
    width: fit-content;
    margin: 20px auto;
  }
</style>