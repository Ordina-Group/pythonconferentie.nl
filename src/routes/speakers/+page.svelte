<script lang="ts">
	import TagBlock from '$lib/components/TagBlock.svelte';
	import PracticalInformationSection from '../PracticalInformationSection.svelte';
    import TopNavSection from '../TopNavSection.svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div class="bg-western">
    <header class="flex-center relative w-full bg-shark" id="header">
        <TopNavSection></TopNavSection>
    </header>

    <div class="m-8 mt-20 py-6">
        <div class="grid m-auto w-full max-w-6xl text-xl text-black">
            <div class="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
                <div
                    class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                    <img src="/speakers/bslatkin_square.png" alt="card-image" class="object-cover w-full h-full" />
                </div>
                <div class="p-6">
                    <h6
                    class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                    Brett Slatkin
                    </h6>
                    <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    Brett Slatkin is the author of the book Effective Python and has been writing Python professionally for the past 19 years. He works as a principal software engineer in the Office of the CTO at Google. His experience includes: founding Google Surveys, a platform for collecting machine learning and market research datasets; launching Google App Engine, the company's first cloud computing product; scaling Google's A/B experimentation products to billions of users; and co-creating PubSubHubbub, the W3C standard for real-time RSS feeds. He earned his B.S. in Computer Engineering from Columbia University in the City of New York. Find him online at 
                    <a href="https://onebigfluke.com">https://onebigfluke.com</a>
                    and 
                    <a href="https://x.com/haxor">https://x.com/haxor</a> 
                    . 
                    </p>
                </div>
                </div>
        </div>
    </div>
    <PracticalInformationSection></PracticalInformationSection>
</div>