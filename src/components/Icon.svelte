<script lang="ts">
  import Navigation from "$components/icons/Navigation.svelte"
  import PenAndPaper from "$components/icons/PenAndPaper.svelte"
  import Home from "$components/icons/Home.svelte"

  import type {Component} from "svelte"
  import Phone from "$components/icons/Phone.svelte";
  import Message from "$components/icons/Message.svelte";
  import Telegram from "$components/icons/Telegram.svelte";

  type Props = {
      icon:
          "home" | "navigation" | "pen-and-paper" |
          "phone" | "message" | "telegram"
  }

  const icons: Record<Props["icon"], Component> = {
      "home": Home,
      "navigation": Navigation,
      "pen-and-paper": PenAndPaper,
      "phone": Phone,
      "message": Message,
      "telegram": Telegram
  }

  let {
      icon
  }: Props = $props()
</script>

{@render icons[icon]?.()}