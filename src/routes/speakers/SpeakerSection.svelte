<script lang="ts">
	import TagBlock from '$lib/components/TagBlock.svelte';
	import { fade } from 'svelte/transition';

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
			name: 'Felienne Hermans',
			letters: 'MT',
			title: 'Professor of Computer Science',
			employer: 'Vrije Universiteit Amsterdam',
			image: '/speakers/Felienne-Hermans-LIACS.jpeg',
			bio: "Felienne is a professor of Computer Science Education at the Vrije Universiteit Amsterdam. She also works as a high-school CS teacher one day a week at Lyceum Kralingen in the Codasium program. Felienne is the creator of the Hedy programming language, a gradual and multi-lingual programming language designed for teaching. She is the author of “The Programmer’s Brain“, a book that helps programmers understand how their brain works and how to use it more effectively. In 2021, Felienne was awarded the Dutch Prize for ICT research. She also has a weekly column on BNR, a Dutch radio station. "
		},
		{
			name: 'Alexey Preobrazhenskiy',
			letters: 'JB',
			title: 'Senior Software Engineer',
			employer: 'Uber',
			image: '/speakers/Alexey.jpeg',
			bio: "Alexey is a senior software engineer on Uber Amsterdam's Python platform team. Outside of work, he is passionate about bird watching and sailing."
		},
		{
			name: 'Pavel Filonov',
			letters: 'ML',
			title: 'Founder of an AI consulting agency',
			employer: 'PFConsult',
			image: '/speakers/PavelFilonov.png',
			bio: "Founder of an AI consulting agency that assists companies in determining whether implementing machine learning can enhance their business processes. My favourite topics are: Python and C++ performance, profiling and MLOps instruments. Previously was responsible for the Data Science department of Kaspersky. Passionate about sharing personal experiences with the community through conference talks and online education."
		},
		{
			name: 'Merel Theisen',
			letters: 'LC',
			title: 'Principal Software Engineer',
			employer: 'QuantumBlack',
			image: '/speakers/headshot_merel_theisen.png',
			bio: "I am a Principal Software Engineer at QuantumBlack, where I am currently the tech lead of Kedro, an open-source project part of the Linux Foundation. I have over eight years of experience in the software industry, with most of my career focused on backend product engineering. I am passionate about building products that solve real user problems, and I care deeply about creating robust, well-tested software that follows good engineering principles. I am also a strong advocate for open-source software, and I find working with the community to be both inspiring and energising."
		},
		{
			name: 'Daniele Procida',
			letters: 'JB',
			title: 'Director of Engineering',
			employer: 'Canonical',
			image: '/speakers/Daniele 650x650.jpeg',
			bio: "I am a Director of Engineering at Canonical, where I lead documentation practice. I enjoy helping organise events for Python and Django, including multiple editions of DjangoCon Europe, and the first editions of PyCon Africa and DjangoCon Africa."
		},
		{
			name: 'Arjan Egges',
			letters: 'SZ',
			title: 'Software Developer',
			employer: 'ArjanCodes',
			image: '/speakers/Arjan Egges.jpg',
			bio: "I’m a software developer, educator, entrepreneur and content creator with a passion for building beautiful, efficient, and reliable software. I've completed a Master's and PhD in Computer Science and I have more than 20 years of teaching experience. I've launched several startups and designed and built complex software products from scratch. Now, I combine my different experiences in my YouTube videos on the ArjanCodes channel and I offer online courses for developers and companies."
		},
		{
			name: 'Donatas Rasiukevicius',
			letters: 'SZ',
			title: 'Developer Advocate',
			employer: 'Fly.io',
			image: '/speakers/Donatas.jpg',
			bio: "I'm Donatas, a self-proclaimed problem architect at Fly.io. Besides hacking on software that will only be used by me, I spend my time cooking, climbing, long-boarding, and photosynthesizing. Come talk to me if you want to nerd out about python, rust, or any of the aforementioned things!"
		},
		{
			name: 'Anwesha Das',
			letters: 'SZ',
			title: 'Software Engineer',
			employer: 'Red Hat',
			image: '/speakers/anwesha.jpg',
			bio: "Anwesha is a fellow at the Python Software Foundation and the Release Manager of Ansible. She works as a Software Engineer with the Ansible Engineering team at Red Hat. She led PyLadies efforts in India and now is an organizer at PyLadies Stockholm.  You can follow her blog at https://anweshadas.in."
		},
		{
			name: 'Lukáš Ševčík',
			letters: 'SZ',
			title: 'Senior Software Engineer',
			employer: 'Kiwi.com',
			image: '/speakers/_DSC2160.jpeg',
			bio: "Senior software engineer and mountains and adventure lover. I work at kiwi.com, where I design in-house payments orchestration platform in python."
		},
		{
			name: 'Brett Slatkin',
			letters: 'SZ',
			title: 'Principal Software Engineer',
			employer: 'Google',
			image: '/speakers/bslatkin_square.png',
			bio: "Brett Slatkin is the author of the book Effective Python and has been writing Python professionally for the past 19 years. He works as a principal software engineer in the Office of the CTO at Google. His experience includes: founding Google Surveys, a platform for collecting machine learning and market research datasets; launching Google App Engine, the company's first cloud computing product; scaling Google's A/B experimentation products to billions of users; and co-creating PubSubHubbub, the W3C standard for real-time RSS feeds. He earned his B.S. in Computer Engineering from Columbia University in the City of New York. Find him online at https://onebigfluke.com and https://x.com/haxor"
		}
	];

	let focussedSpeaker: number | null = null;
</script>

<div class="relative w-full px-2 py-10 text-black" id="speakers">
	<!-- <div class="mb-24 w-full text-center text-4xl">Speakers</div> -->

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
						<div class="text-xl md:text-2xl font-bold">{speaker.name}</div>
						<div class="text-lg italic">{speaker.title}</div>
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
			<div class="whitespace-pre-line">
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
