<script lang="ts">
	import PracticalInformationSection from '../PracticalInformationSection.svelte';
	import TopNavSection from '../TopNavSection.svelte';
	import type { PageData } from './$types';
	import SpeakerScheduleSection from './SpeakerScheduleSection.svelte';

	export let data: PageData;
</script>

<div class="bg-western">
	<header class="flex-center relative w-full bg-shark" id="header">
		<TopNavSection></TopNavSection>
	</header>

	<div class="m-8 mt-20 py-6">
 		<div class=" m-auto w-full max-w-6xl text-xl text-black">
            <SpeakerScheduleSection></SpeakerScheduleSection>
		</div>
	</div>
	<PracticalInformationSection></PracticalInformationSection>
</div>
