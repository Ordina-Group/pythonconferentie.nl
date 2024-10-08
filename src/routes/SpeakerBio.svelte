<script context="module" lang="ts">

  export type Speaker = {
      name: string;
      letters: string;
      title: string;
      employer: string;
      image?: string;
      bio?: string;
  };
</script>

<script lang="ts">
    import TagBlock from "$lib/components/TagBlock.svelte";
    import { createEventDispatcher, onMount } from "svelte";
    import { fade } from "svelte/transition";
    export let speaker: Speaker | undefined;

    // Create event dispatcher
    const dispatch = createEventDispatcher();

    // Scroll to the top of the page when the component is mounted
    onMount(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Function to notify the parent to clear focussedSpeaker
    function goBack() {
        dispatch('goBack'); // Emit a 'goBack' event
    }
</script>

<div
    in:fade={{ duration: 250, delay: 250 }}
    out:fade={{ duration: 250 }}
    class="mx-auto flex w-full flex-col items-center rounded-2xl bg-fountain p-5 text-center shadow-xl md:w-2/3"
>
    {#if speaker?.image}
        <img
            class="-mt-16 aspect-square h-32 w-32 rounded-full"
            src={speaker.image}
            alt={speaker.name}
        />
    {:else}
        <div
            class="relative -mt-16 inline-flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-fountain-600"
        >
            <span class="text-6xl font-medium text-fountain-800"
                >{speaker?.letters}</span
            >
        </div>
    {/if}
    <div class="text-xl">{speaker?.name}</div>
    <div class="text-lg">{speaker?.title}</div>
    <div class="text-md">{speaker?.employer}</div>
    <div class="whitespace-pre-line text-left">
        {#if speaker?.bio}
            {speaker.bio}
        {:else}
            AttributeError: 'dict' object has no attribute 'speakerInfo' - this speakers bio is coming
            soon.
        {/if}
    </div>
    <button on:click={goBack} class="mt-2 cursor-pointer select-none">
        <TagBlock small backgroundColor="ordina">Back</TagBlock>
    </button>
</div>
