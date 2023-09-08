<script>
	import TagBlock from '$lib/components/TagBlock.svelte';
</script>

<div class="w-full bg-western py-32 text-black" id="info">
	<div class="m-auto w-full max-w-6xl text-xl">
		<TagBlock class="float-left max-w-lg" direction="right" extend={true}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque diam id condimentum bibendum. Vivamus malesuada lacus augue, et accumsan tellus consequat id. Pellentesque nisl ex placerat.
		</TagBlock>
		<TagBlock
			class="float-right mt-10 max-w-lg lg:mt-48"
			direction="left"
			backgroundColor="shark"
			extend={true}
		>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus felis ut libero vel.
		</TagBlock>
	</div>
	<div class="clear-both" />
</div>
