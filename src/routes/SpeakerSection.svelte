<script>
	import TagBlock from '$lib/components/TagBlock.svelte';
</script>

<div class="w-full bg-fountain py-10 text-black" id="speakers">
	<div class="mb-5 w-full text-center text-4xl">Speakers</div>
	<div class="m-auto w-full max-w-6xl">

		<TagBlock class="float-right max-w-lg" direction="left" extend={true}>
			<div class="flex w-full flex-col">
				<div class="flex grow items-center gap-2">
					<img class="aspect-square h-14 w-14 rounded-full" src="/speakers/mt.png" alt="Kitze" />
					<div class="flex grow flex-col">
						<div class="text-2xl">Marcelo Trylesinski</div>
						<div class="text-xl">Senior Software Engineer @ Pydantic</div>
					</div>
				</div>
				<div>
					Marcelo is an open-source developer who has made significant contributions to the FastAPI community.
					He maintains Starlette, a critical dependency of FastAPI, and Uvicorn, a high-performance web server
					that powers FastAPI applications. His invaluable contributions led to his hiring as a senior software
					engineer by Pydantic, a widely used library for data validation and serialization. Apart from
					software development, Marcelo enjoys fitness, soccer, photography, and dancing. He's a well-rounded
					individual who's always eager to learn and grow.
				</div>
			</div>
		</TagBlock>

		<TagBlock
			class="float-left mt-5 max-w-lg lg:mt-64"
			direction="right"
			backgroundColor="shark"
			extend={true}
		>
			<div class="flex w-full flex-col">
				<div class="flex grow items-center gap-2">
					<div
						class="relative inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-fountain"
					>
						<span class="text-2xl font-medium text-fountain-800">JB</span>
					</div>
					<div class="flex grow flex-col">
						<div class="text-2xl">Jan-Hein Bührman</div>
						<div class="text-xl">Principal Consultant @ Ordina</div>
					</div>
				</div>
				<div>
					AttributeError: 'dict' object has no attribute 'speakerInfo'<br>(a.k.a. coming soon)
				</div>
			</div>
		</TagBlock>

		<TagBlock class="float-right mt-5 max-w-lg lg:mt-5" direction="left" extend={true}>
			<div class="flex w-full flex-col">
				<div class="flex grow items-center gap-2">
					<div
						class="relative inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-fountain"
					>
						<span class="text-2xl font-medium text-fountain-800">ML</span>
					</div>
					<div class="flex grow flex-col">
						<div class="text-2xl">Marc-André Lemburg</div>
						<div class="text-xl">CEO @ eGenix.com</div>
					</div>
				</div>
				<div>
					AttributeError: 'dict' object has no attribute 'speakerInfo'<br>(a.k.a. coming soon)
				</div>
			</div>
		</TagBlock>

		<TagBlock
			class="float-left mt-5 max-w-lg lg:mt-5"
			direction="right"
			backgroundColor="shark"
			extend={true}
		>
			<div class="flex w-full flex-col">
				<div class="flex grow items-center gap-2">
					<div
						class="relative inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-fountain"
					>
						<span class="text-2xl font-medium text-fountain-800">LC</span>
					</div>
					<div class="flex grow flex-col">
						<div class="text-2xl">Laís Carvalho</div>
						<div class="text-xl">Software Engioneer @ Workday</div>
					</div>
				</div>
				<div>
					AttributeError: 'dict' object has no attribute 'speakerInfo'<br>(a.k.a. coming soon)
				</div>
			</div>
		</TagBlock>

		<TagBlock class="float-right mt-5 max-w-lg lg:mt-5" direction="left" extend={true}>
			<div class="flex w-full flex-col">
				<div class="flex grow items-center gap-2">
					<div
						class="relative inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-fountain"
					>
						<span class="text-2xl font-medium text-fountain-800">SZ</span>
					</div>
					<div class="flex grow flex-col">
						<div class="text-2xl">Sebastiaan Zeeff</div>
						<div class="text-xl">Senior Software Engineer @ Ordina</div>
					</div>
				</div>
				<div>
					AttributeError: 'dict' object has no attribute 'speakerInfo'<br>(a.k.a. coming soon)
				</div>
			</div>
		</TagBlock>
	</div>
	<div class="clear-both" />
</div>
