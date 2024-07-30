<script lang="ts">
	import { Icon } from 'svelte-awesome';
	import { chevronRight } from 'svelte-awesome/icons';
	import Poster from '$lib/components/Poster.svelte';
	import TagBlock from '$lib/components/TagBlock.svelte';
	import Marquee from 'svelte-fast-marquee';
</script>

<div class="bg-western">
	<header class="flex-center relative w-full bg-shark" id="header">
		<Poster />
		<div class="relative mt-3 w-full">
			<div class="left-0 right-0">
				<div class="flex w-full items-center justify-between px-4">
					<a href="https://pythonconferentie.nl">
						<img src="/logo-sopra4.svg" alt="Python Conference Logo" class="w-20" />
					</a>
					<div class="w-2/3">
						<Marquee direction="left" speed={50}>
							<div class="inline-flex text-lg text-white">
								<div class="text-xl font-bold">
									<span class="pr-4 text-ordina">Tickets will be available soon!</span>
								</div>
							</div>
						</Marquee>
					</div>
					<div class="pr-1">
						<a class="inline text-black" rel="noreferrer" href="/"
							>Main<Icon class="ml-4" data={chevronRight} scale={1} /></a
						>
						<a class=" inline text-black" target="_blank" rel="noreferrer" href="/code-of-conduct"
							>Code of Conduct<Icon class="ml-4" data={chevronRight} scale={1} /></a
						>
					</div>
				</div>
			</div>
		</div>
	</header>
	<div class="relative w-full flex-col bg-north-300 py-4 text-white">
		<h1 class="text-4xl font-bold ml-48">History</h1>
	</div>

	<div class="m-8">
		<div class="grid m-auto w-full max-w-6xl text-xl text-black">
			<div>
				<TagBlock
					class="float-left max-w-lg"
					direction="right"
					extend={true}
					backgroundColor="north3"
				>
					5 Years ago, the first “pythonconference” was held, with 40 attendees this started as a
					meet-up. This conference grew into a big and fun conference with up to 150 attendees in
					2023. This year the organization of the “pythonconference” applied to host the first PyCon
					NL to the Python Software Foundation and we are really proud that today we can actually
					say that we will host the first PyCon NL on October 10th, 2024.
				</TagBlock>
			</div>

			<div class="pt-10 mb-10">
				<video controls class="float-right">
					<source src="/AftermoviePythonconference 2023.42.mp4" type="video/mp4" />
					<track kind="captions" />
				</video>
			</div>
		</div>
	</div>
</div>
