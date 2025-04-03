<script>
	import Poster from '$lib/components/Poster.svelte';
	import TagBlock from '$lib/components/TagBlock.svelte';
	import { Icon } from 'svelte-awesome';
	import { chevronDown } from 'svelte-awesome/icons';
	import Countdown from './Countdown.svelte';
	import { divide } from 'lodash-es';
	import TopNavSection from './TopNavSection.svelte';
</script>

<header class="flex-center relative w-full bg-shark" id="header">
	<Poster />
	<div class="relative mt-3 w-full">
		<TopNavSection></TopNavSection>

		<div
			class="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center"
		>
			<div class="order-2 md:order-1">
				<TagBlock direction="right" extend={true} backgroundColor="north3">
					<div class="inline-flex text-lg text-white">
						<div class="text-xl">
							<span class="pr-4 text-ordina font-bold">Save the date 10-10-2024</span>
							<Countdown></Countdown>
						</div>
					</div>
				</TagBlock>
			</div>
			<div class="order-1 md:order-2">
				<a href="https://pythonconferentie.nl" class="w-96">
					<img src="./logo-sopra4.svg" alt="Python Conference Logo" class="" />
				</a>
			</div>
			<div class="order-3 md:order-3">
				<TagBlock direction="left" extend={true} backgroundColor="north2">
					<div class="inline-flex text-lg text-white">
						<a
							href="https://www.eventbrite.nl/e/tickets-pycon-nl-916084723067?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
							class="hover:scale-105 text-xl"
						>
							<span class="pr-4 text-ordina font-bold">Get your ticket now!</span>
						</a>
					</div>
				</TagBlock>
			</div>
		</div>

		<div class="mt-4 flex items-center justify-center">
			<a
				href="https://www.eventbrite.nl/e/tickets-pycon-nl-916084723067?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
			>
				<TagBlock class="text-lg" backgroundColor="north">
					<div class="hover:scale-105 text-3xl font-bold">
						PYCON (NL)<span class="px-4">|</span><span class="pr-4 text-ordina">2024</span>
					</div>
				</TagBlock>
			</a>
		</div>

		<!-- <a
					class="inline"
					target="_blank"
					rel="noreferrer"
					href="https://www.eventbrite.nl/e/tickets-python-conference-utrecht-715964698687"
				>
					<TagBlock class="text-lg" backgroundColor="fountain">
				<div class="flex flex-col">
					<div>tickets.get_yours_for_<span class="font-bold">free</span>()</div>
					<div class="text-xs italic">Registration ends October 8th 23:59</div>
				</div>
			    </TagBlock>
				</a> -->

		<div class="mt-2 flex justify-center">
			<a class="mb-10 inline" href="#info">
				<Icon class="text-white opacity-75" data={chevronDown} scale={3} />
			</a>
		</div>
	</div>
</header>
