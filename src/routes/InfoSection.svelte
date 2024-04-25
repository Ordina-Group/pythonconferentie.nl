<script>
	import TagBlock from '$lib/components/TagBlock.svelte';
</script>

<div class="z-10 w-full bg-western py-32 text-black" id="info">
	<div class="m-auto w-full max-w-6xl text-xl text-black">
		<TagBlock class="float-left max-w-lg" direction="right" extend={true} backgroundColor="north3">
			The 1st PyCon Netherlands is THE Python conference to attend! The conference will take place
			in Utrecht on the 10th of October 2024. Follow us to stay updated on future changes,
			announcements, keynoters, and more!
		</TagBlock>
		<TagBlock
			class="float-right mt-10 max-w-lg lg:mt-48"
			direction="left"
			backgroundColor="north2"
			extend={true}
		>
			Are you a python developer who is ‘in’ for inspiration? Join us to develop new skills, attend
			exclusive talks about Python, expand your network and share your insights with the community.
		</TagBlock>
	</div>
	<div class="clear-both" />
</div>
