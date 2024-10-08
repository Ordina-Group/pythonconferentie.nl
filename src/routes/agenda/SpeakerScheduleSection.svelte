<script lang="ts">
	import TagBlock from '$lib/components/TagBlock.svelte';
	import { fade } from 'svelte/transition';
	import SpeakerBio from '../SpeakerBio.svelte';
	import { scheduleItems } from './scheduleData';

	let focussedSpeaker: number | null = null;

	function clearFocussedSpeaker() {
			focussedSpeaker = null;
	}
</script>

{#if focussedSpeaker !== null}
	<div class="relative w-full px-2 py-10 text-black" id="speakers">
			<SpeakerBio on:goBack={clearFocussedSpeaker} speaker={scheduleItems[focussedSpeaker].speaker}></SpeakerBio>
	</div>
{:else}
	<div 
			in:fade={{ duration: 250, delay: 250 }} 
			out:fade={{ duration: 250 }} 
			class="flex-center w-full flex-col text-white" 
			id="schedule"
	>
			{#each scheduleItems as item, i}
					<TagBlock 
							class="mt-2" 
							direction={item.direction} 
							extend={true} 
							backgroundColor={item.backgroundColor}
					>
							<div class="flex w-screen max-w-xl gap-5 items-center">
									<!-- Time Column -->
									<div class="pl-5 sm:pl-0 text-2xl flex-shrink-0 w-40 text-left whitespace-nowrap">{item.time}</div>
									
									<!-- Text Column -->
									<div class="inline-flex grow flex-col pr-2 text-left">
											<div class="text-xl font-bold">{item.title}</div>
											{#if item.speaker}
													<div class="text-lg text-ordina">{item.speaker.name}</div>
											{/if}
											{#if item.partialText}
													<div class="text-sm">
															{item.partialText}
															<button on:click={() => (focussedSpeaker = i)}>[Read more...]</button>
													</div>
											{/if}
									</div>
							</div>
					</TagBlock>
			{/each}
	</div>
{/if}
