<script lang="ts">
  import Navigation from "$components/icons/Navigation.svelte";

  type Props = {
      icon: string
  }

  const icons = {
      "navigation": Navigation
  }

  let {
      icon
  }: Props = $props()
</script>

{@render icons[icon]?.()}