<script lang="ts">
  import type {Content} from "./type"
  import {El} from "./type"
  import SelfComponent from "./ArticleRenderer.svelte"

  type Props = {
      content: Array<Content>
  }
  let {
      content
  }: Props = $props()
</script>

{#each content as it}
  {#if it.el === El.Link}
    <a href={it.href}>{it.content}</a>
  {:else if it.el === El.Text}
    {it.content}
  {:else if it.el === El.Paragraph}
    <p>
      {#if it.children}
        <SelfComponent content={it.children} />
      {:else}
        {it.content}
      {/if}
    </p>
  {/if}
{/each}