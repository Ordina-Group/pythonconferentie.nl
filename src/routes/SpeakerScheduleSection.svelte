<script>
	import TagBlock from '$lib/components/TagBlock.svelte';
</script>

<div class="flex-center w-full flex-col bg-shark py-10 text-white" id="schedule">
	<div class="px-2 text-4xl">Speaker schedule</div>
	<div class="px-2 text-xl">The following schedule is subject to change.</div>
	<TagBlock class="mt-2" direction="right" extend={true} backgroundColor="fountain">
		<div class="flex w-screen max-w-xl gap-5">
			<div class="pl-5 text-2xl sm:pl-0">13:30</div>
			<div class="grow text-2xl">Walk-in</div>
		</div>
	</TagBlock>
	<TagBlock class="mt-2" direction="right" extend={true} backgroundColor="fountain">
		<div class="flex w-screen max-w-xl gap-5">
			<div class="pl-5 text-2xl sm:pl-0">14:00</div>
			<div class="grow text-2xl">Welcome</div>
		</div>
	</TagBlock>
	<TagBlock class="mt-2" direction="left" extend={true} backgroundColor="ordina">
		<div class="flex w-screen max-w-xl gap-5">
			<div class="pl-5 text-2xl">14:10</div>
			<div class="inline-flex grow flex-col pr-2">
				<div class="text-xl font-bold">The validation evolution: Pydantic V2tronger</div>
				<div class="text-lg">Marcelo Trylesinski (Pydantic)</div>
			</div>
		</div>
	</TagBlock>
	<TagBlock class="mt-2" direction="left" extend={true} backgroundColor="ordina">
		<div class="flex w-screen max-w-xl gap-5">
			<div class="pl-5 text-2xl">14:50</div>
			<div class="inline-flex grow flex-col pr-2">
				<div class="text-xl font-bold">When to refactor your code into generators and how</div>
				<div class="text-lg">Jan-Hein Bührman (Ordina)</div>
			</div>
		</div>
	</TagBlock>
	<TagBlock class="mt-2" direction="right" extend={true} backgroundColor="fountain">
		<div class="flex w-screen max-w-xl gap-5">
			<div class="pl-5 text-2xl sm:pl-0">15:25</div>
			<div class="grow text-2xl">Break</div>
		</div>
	</TagBlock>
	<TagBlock class="mt-2" direction="left" extend={true} backgroundColor="ordina">
		<div class="flex w-screen max-w-xl gap-5">
			<div class="pl-5 text-2xl">15:45</div>
			<div class="inline-flex grow flex-col pr-2">
				<div class="text-xl font-bold">Diving into Event-Driven Architechtures</div>
				<div class="text-lg">Marc-André Lemburg (eGenix)</div>
			</div>
		</div>
	</TagBlock>
	<TagBlock class="mt-2" direction="left" extend={true} backgroundColor="ordina">
		<div class="flex w-screen max-w-xl gap-5">
			<div class="pl-5 text-2xl">16:25</div>
			<div class="inline-flex grow flex-col pr-2">
				<div class="text-xl font-bold">Python and Freedom and Bias</div>
				<div class="text-lg">Laís Carvalho (Workday)</div>
			</div>
		</div>
	</TagBlock>
	<TagBlock class="mt-2" direction="right" extend={true} backgroundColor="fountain">
		<div class="flex w-screen max-w-xl gap-5">
			<div class="pl-5 text-2xl sm:pl-0">17:00</div>
			<div class="grow text-2xl">Break</div>
		</div>
	</TagBlock>
	<TagBlock class="mt-2" direction="left" extend={true} backgroundColor="ordina">
		<div class="flex w-screen max-w-xl gap-5">
			<div class="pl-5 text-2xl">17:20</div>
			<div class="inline-flex grow flex-col pr-2">
				<div class="text-xl font-bold">The IQ of AI: Measuring Intelligence in AI Models</div>
				<div class="text-lg">Jodie Burchell (JetBrains)</div>
			</div>
		</div>
	</TagBlock>
	<TagBlock class="mt-2" direction="left" extend={true} backgroundColor="ordina">
		<div class="flex w-screen max-w-xl gap-5">
			<div class="pl-5 text-2xl">18:00</div>
			<div class="inline-flex grow flex-col pr-2">
				<div class="text-xl font-bold">The Magic Of Self: How Python Inserts Self Into Methods</div>
				<div class="text-lg">Sebastiaan Zeeff (Ordina)</div>
			</div>
		</div>
	</TagBlock>
	<TagBlock class="mt-2" direction="right" extend={true} backgroundColor="fountain">
		<div class="flex w-screen max-w-xl gap-5">
			<div class="pl-5 text-2xl sm:pl-0">18:40</div>
			<div class="grow text-2xl">Wrap-up</div>
		</div>
	</TagBlock>
	<TagBlock class="mt-2" direction="right" extend={true} backgroundColor="fountain">
		<div class="flex w-screen max-w-xl gap-5">
			<div class="pl-5 text-2xl sm:pl-0">18:45</div>
			<div class="grow text-2xl">Drinks & Food</div>
		</div>
	</TagBlock>
</div>
