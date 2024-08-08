<script lang="ts">
  import { Icon } from 'svelte-awesome';
  import { chevronRight } from 'svelte-awesome/icons';
  import Poster from '$lib/components/Poster.svelte';
  import TagBlock from '$lib/components/TagBlock.svelte';
  import Marquee from "svelte-fast-marquee";
	import TopNavSection from '../TopNavSection.svelte';
	import PracticalInformationSection from '../PracticalInformationSection.svelte';
</script>

<div class="bg-western ">
    <header class="flex-center relative w-full bg-shark" id="header">
        <Poster />
        <TopNavSection></TopNavSection>
    </header>
    <div class="m-8 mt-20 py-6">
        <div class="grid m-auto w-full max-w-6xl text-xl text-black">
            <div>
                <TagBlock class="float-left max-w-lg" direction="right" extend={true} backgroundColor="north3">
                    5 Years ago, the first “pythonconference” was held, with 40 attendees this started as a meet-up. This conference grew into a big and fun conference with up to 150 attendees in 2023. This year the organization of the “pythonconference” applied to host the first PyCon NL to the Python Software Foundation and we are really proud that today we can actually say that we will host the first PyCon NL on October 10th, 2024. 
                </TagBlock>
            </div>

            <div class="pt-10 mb-10">
                <video controls class="float-right">
                    <source src="/AftermoviePythonconference 2023.42.mp4" type="video/mp4">
                        <track kind="captions" />
                </video>
            </div>
        </div>
    </div>
    <PracticalInformationSection></PracticalInformationSection>
</div>
