<script lang="ts">
	import TagBlock from '$lib/components/TagBlock.svelte';
	import {fade} from 'svelte/transition';

	type Speaker = {
		name: string;
		letters: string;
		title: string;
		employer: string;
		image?: string;
		bio?: string;
	};

	let speakers: Speaker[] = [
		{
			name: 'Marcelo Trylesinski',
			letters: 'MT',
			title: 'Senior Software Engineer',
			employer: 'Pydantic',
			image: '/speakers/mt.png',
			bio: "Marcelo is an open-source developer who has made significant contributions to the FastAPI community. He maintains Starlette, a critical dependency of FastAPI, and Uvicorn, a high-performance web server that powers FastAPI applications. His invaluable contributions led to his hiring as a senior software engineer by Pydantic, a widely used library for data validation and serialization. Apart from software development, Marcelo enjoys fitness, soccer, photography, and dancing. He's a well-rounded individual who's always eager to learn and grow."
		},
		{
			name: 'Jan-Hein Bührman',
			letters: 'JB',
			title: 'Principal Consultant',
			employer: 'Ordina'
		},
		{
			name: 'Marc-André Lemburg',
			letters: 'ML',
			title: 'CEO',
			employer: 'eGenix.com'
		},
		{
			name: 'Laís Carvalho',
			letters: 'LC',
			title: 'Software Engineer',
			employer: 'Workday'
		},
		{
			name: 'Sebastiaan Zeeff',
			letters: 'SZ',
			title: 'Senior Software Engineer',
			employer: 'Ordina',
			image: '/speakers/sz.png',
			bio: 'Sebastiaan is a senior software engineer for the Ordina Pythoneers and a Fellow of the Python Software Foundation. He is also one of the founders of Python Discord and an organiser of EuroPython. Sebastiaan frequently speaks at conferences all around the world, including PyCon US, EuroPython, PyCon APAC, and various regional PyCons.'
		}
	];

	let focussedSpeaker: number | null = null;
</script>

<div class="relative w-full bg-gray-300 py-10 px-2 text-black" id="speakers">
	<div class="mb-24 w-full text-center text-4xl">Speakers</div>

	{#if focussedSpeaker === null}
		<div
			in:fade={{ duration: 250, delay: 250 }}
			out:fade={{ duration: 250 }}
			class="mx-auto grid w-3/4 grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3"
		>
			{#each speakers as speaker, index}
				<div class="mb-16 h-56 w-full">
					<div
						class="flex w-full flex-col items-center rounded-2xl bg-fountain p-5 text-center shadow-xl"
					>
						{#if speaker.image}
							<img
								class="-mt-16 aspect-square h-32 w-32 rounded-full"
								src={speaker.image}
								alt={speaker.name}
							/>
						{:else}
							<div
								class="relative -mt-16 inline-flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-fountain-600"
							>
								<span class="text-6xl font-medium text-fountain-800">{speaker.letters}</span>
							</div>
						{/if}
						<div class="text-xl md:text-2xl">{speaker.name}</div>
						<div class="text-lg">{speaker.title}</div>
						<div class="text-md">{speaker.employer}</div>
						<div class="text-sm line-clamp-2 overflow-ellipsis">
							{#if speaker.bio}
								{speaker.bio}
							{:else}
								AttributeError: 'dict' object has no attribute 'speakerInfo'<br />&nbsp;
							{/if}
						</div>
						{#if speaker.bio}
							<button on:click={() => (focussedSpeaker = index)} class="cursor-pointer select-none mt-2">
								<TagBlock small backgroundColor="ordina">Read more</TagBlock>
							</button>
						{:else}
							<TagBlock class="opacity-75 mt-2" small backgroundColor="ordina"
								>Bio coming soon..</TagBlock
							>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<div
			in:fade={{ duration: 250, delay: 250 }}
			out:fade={{ duration: 250 }}
			class="mx-auto flex w-full flex-col items-center rounded-2xl bg-fountain p-5 text-center shadow-xl md:w-2/3 xl:w-1/3"
		>
			{#if speakers[focussedSpeaker].image}
				<img
					class="-mt-16 aspect-square h-32 w-32 rounded-full"
					src={speakers[focussedSpeaker].image}
					alt={speakers[focussedSpeaker].name}
				/>
			{:else}
				<div
					class="relative -mt-16 inline-flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-fountain-600"
				>
					<span class="text-6xl font-medium text-fountain-800"
						>{speakers[focussedSpeaker].letters}</span
					>
				</div>
			{/if}
						<div class="text-xl">{speakers[focussedSpeaker].name}</div>
						<div class="text-lg">{speakers[focussedSpeaker].title}</div>
						<div class="text-md">{speakers[focussedSpeaker].employer}</div>
			<div>
				{#if speakers[focussedSpeaker].bio}
					{speakers[focussedSpeaker].bio}
				{:else}
					AttributeError: 'dict' object has no attribute 'speakerInfo' - this speakers bio is coming
					soon.
				{/if}
			</div>
			<button on:click={() => (focussedSpeaker = null)} class="cursor-pointer select-none mt-2">
				<TagBlock small backgroundColor="ordina">Back</TagBlock>
			</button>
		</div>
	{/if}
</div>
