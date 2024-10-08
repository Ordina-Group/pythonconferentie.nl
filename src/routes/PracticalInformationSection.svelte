<script>
	import TagBlock from '$lib/components/TagBlock.svelte';
</script>

<div
	class="flex-center relative w-full flex-col bg-north-300 py-10 text-white"
	id="practical-information"
>
	<div class="text-4xl">Practical information</div>

	<TagBlock class="mt-5" direction="right" extend={true} backgroundColor="north3">
		<div class="flex w-screen max-w-xl gap-5 text-black">
			<div class="pl-5 text-2xl sm:pl-0">When:</div>
			<div class="grow text-2xl">October 10th 2024</div>
		</div>
	</TagBlock>

	<TagBlock class="mt-2" direction="left" extend={true} backgroundColor="north2">
		<div class="flex w-screen max-w-xl items-center gap-5">
			<div class="pl-5 text-2xl" />
			<div class="flex flex-col items-center gap-2 md:flex-row">
				<a target="_blank" rel="noreferrer" href="https://goo.gl/maps/PM1SP5jn8Z9M3LZa7"
					><img
						class=" w-60 rounded-full p-1 ring-2 ring-north-50"
						src="/map.png"
						alt="A map showing where the Jaarbeurs Utrecht is located"
					/></a
				>
				<div class="flex flex-col">
					<div class="text-2xl">Where: Media Plaza (Jaarbeurs Utrecht)</div>
					<div class="text-xl">Jaarbeursplein 6</div>
					<div class="text-xl">3521 AL Utrecht</div>
					<div class="text-xl">The Netherlands</div>
					<button class="mt-2 ml-6 cursor-pointer text-left select-none"
								on:click={() => window.location.href = '/practical-information'}
					>
						<TagBlock small backgroundColor="ordina" class="hover:scale-105">More info</TagBlock>
					</button>
				</div>
			</div>
		</div>
	</TagBlock>

	<!-- <div class="mt-10 text-xl">Limited places available, so hurry up!</div> -->

	<!-- <a
		class="mt-5 inline"
		target="_blank"
		rel="noreferrer"
		href="https://www.eventbrite.nl/e/tickets-python-conference-utrecht-715964698687"
	>
		<TagBlock class="text-center text-xl">
			<div class="flex flex-col">
				<div>tickets.get_yours_for_<span class="font-bold">free</span>()</div>
				<div class="text-xs italic">Registration ends October 8th 23:59</div>
			</div>
		</TagBlock>
	</a> -->

	<a
		class="mt-10 inline"
		target="_blank"
		rel="noreferrer"
		href="https://github.com/Ordina-Group/pythonconferentie.nl"
	>
		<TagBlock backgroundColor="north3" small class="hover:scale-105">Source on GitHub</TagBlock>
	</a>
</div>
