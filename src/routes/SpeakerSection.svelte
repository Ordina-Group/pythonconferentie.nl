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
			employer: 'Ordina',
			image: '/speakers/jhb.png',
			bio: 'Jan-Hein is a software engineer who witnessed Python’s first baby steps up very close, and loves programming in Python since then. While he worked in different software development roles, he always kept an eye on its development. After he has founded a dedicated Python software unit within Ordina, the company he works for, he’s now back at the work that leaves him with a positive energy balance at the end of the day: programming in Python!',
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
			employer: 'Workday',
			image: '/speakers/lc.png',
			bio: 'Laís Carvalho is an active member of the Python community, being the first black female board member of Python Ireland, an organiser of the EuroPython Conference and HumbleData events, a non-profit organisation focused on mentoring underrepresented minorities on Python and Data Science. Lais is an experienced developer advocate and speaker who is passionate about leadership and volunteering. She now works as a Software Developer building monitoring tools at Workday Inc. Lais is excited about food, documentation, and communication. Her main core values are courage and kindness.'
		},
		{
			name: 'Jodie Burchell',
			letters: 'JB',
			title: 'Data Science Developer Advocate',
			employer: 'JetBrains',
			image: '/speakers/jb.png',
			bio: "Dr. Jodie Burchell is the Developer Advocate in Data Science at JetBrains, and was previously a Lead Data Scientist at Verve Group Europe. She completed a PhD in clinical psychology and a postdoc in biostatistics, before leaving academia for a data science career. She has worked for 7 years as a data scientist in both Australia and Germany, developing a range of products including recommendation systems, analysis platforms, search engine improvements and audience profiling. She has held a broad range of responsibilities in her career, doing everything from data analytics to maintaining machine learning solutions in production. She is a long time content creator in data science, across conference and user group presentations, books, webinars, and posts on both her own and JetBrain's blogs."
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

<div class="relative w-full bg-gray-300 px-2 py-10 text-black" id="speakers">
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
						<div class="line-clamp-2 overflow-ellipsis text-sm">
							{#if speaker.bio}
								{speaker.bio}
							{:else}
								AttributeError: 'dict' object has no attribute 'speakerInfo'<br />&nbsp;
							{/if}
						</div>
						{#if speaker.bio}
							<button
								on:click={() => (focussedSpeaker = index)}
								class="mt-2 cursor-pointer select-none"
							>
								<TagBlock small backgroundColor="ordina">Read more</TagBlock>
							</button>
						{:else}
							<TagBlock class="mt-2 opacity-75" small backgroundColor="ordina"
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
			<button on:click={() => (focussedSpeaker = null)} class="mt-2 cursor-pointer select-none">
				<TagBlock small backgroundColor="ordina">Back</TagBlock>
			</button>
		</div>
	{/if}
</div>
