<script lang="ts">
	import PracticalInformationSection from '../PracticalInformationSection.svelte';
	import SpeakerSection from './SpeakerSection.svelte';
    import TopNavSection from '../TopNavSection.svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div class="bg-western">
    <header class="flex-center relative w-full bg-shark" id="header">
        <TopNavSection></TopNavSection>
    </header>

    <div class="m-8 mt-20 py-6">
        <SpeakerSection />
    </div>
    <PracticalInformationSection></PracticalInformationSection>
</div>