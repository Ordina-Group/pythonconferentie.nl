<script lang="ts">
	import PracticalInformationSection from '../PracticalInformationSection.svelte';
	import TopNavSection from '../TopNavSection.svelte';
	import type { PageData } from './$types';
	import Session from './Session.svelte';

	export let data: PageData;
</script>

<div class="bg-western">
	<header class="flex-center relative w-full bg-shark" id="header">
		<TopNavSection></TopNavSection>
	</header>

	<div class="m-8 mt-20 py-6">
		<div class=" m-auto w-full max-w-6xl text-xl text-black">
			<div class="grid grid-cols-3 gap-4">
                <div class="rounded-xl bg-white shadow-md">
                    <Session time={'9:15 - 10:00'} title="Registration"></Session>
                </div>
                <div class="rounded-xl bg-white shadow-md">
                    <Session time={'9:15 - 10:00'}  speakerName="Brett Slatkin" speakerImage="/speakers/jb.png" title="Speaker session"></Session>
                </div>
                <div class="rounded-xl bg-white shadow-md">
                    <Session time={'10:05 - 10:35'} speakerName="Brett Slatkin" speakerImage="/speakers/jhb.png" title="Speaker session"></Session>
                </div>
                <div class="rounded-xl bg-white shadow-md">
                    <Session time={'10:35 - 10:50'} title="Coffee break ☕"></Session>
                </div>
                <div class="rounded-xl bg-white shadow-md">
                    <Session time={'10:50 - 	11:20'} speakerName="Brett Slatkin" speakerImage="/speakers/lc.png" title="Speaker session"></Session>
                </div>
                <div class="rounded-xl bg-white shadow-md">
                    <Session time={'11:25 - 11:55'} speakerName="Brett Slatkin" speakerImage="/speakers/ml.png" title="Speaker session"></Session>
                </div>
                <div class="rounded-xl bg-white shadow-md">
                    <Session time={'12:00 - 12:30'} speakerName="Brett Slatkin" speakerImage="/speakers/mt.png" title="Speaker session"></Session>
                </div>
                <div class="rounded-xl bg-white shadow-md">
                    <Session time={'12:30 - 13:20'} title="Lunch break 🌮"></Session>
                </div>
                <div class="rounded-xl bg-white shadow-md">
                    <Session time={'13:30 - 14:00'} speakerName="Brett Slatkin" speakerImage="/speakers/sz.png" title="Speaker session"></Session>
                </div>
                <div class="rounded-xl bg-white shadow-md">
                    <Session time={'14:05 - 14:35'} speakerName="Brett Slatkin" speakerImage="/speakers/jb.png" title="Speaker session"></Session>
                </div>
                <div class="rounded-xl bg-white shadow-md">
                    <Session time={'14:35 - 14:50'} title="Coffee break ☕"></Session>
                </div>
                <div class="rounded-xl bg-white shadow-md">
                    <Session time={'14:50 - 15:20'} speakerName="Brett Slatkin" speakerImage="/speakers/ml.png" title="Speaker session"></Session>
                </div>
                <div class="rounded-xl bg-white shadow-md">
                    <Session time={'15:25 - 15:55'} speakerName="Brett Slatkin" speakerImage="/speakers/mt.png" title="Speaker session"></Session>
                </div>
                <div class="rounded-xl bg-white shadow-md">
                    <Session time={'15:55 - 16:10'} title="Coffee break ☕"></Session>
                </div>
                <div class="rounded-xl bg-white shadow-md">
                    <Session time={'16:10 - 16:55'} speakerName="Brett Slatkin" speakerImage="/speakers/bslatkin_square.png" title="Speaker session"></Session>
                </div>
                <div class="rounded-xl bg-white shadow-md">
                    <Session time={'17:05 - 18:30'} title="Drinks 🍻 & Snacks 🌭"></Session>
                </div>

			</div>
			<!-- End Timeline -->
		</div>
	</div>
	<PracticalInformationSection></PracticalInformationSection>
</div>
