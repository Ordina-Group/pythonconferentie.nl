<script lang="ts">
    import TopNavSection from '../TopNavSection.svelte';
    import type { PageData } from './$types';
    import TagBlock from '$lib/components/TagBlock.svelte';
	import PracticalInformationSection from '../PracticalInformationSection.svelte';
    
    export let data: PageData;
</script>

<div class="bg-western">
    <header class="flex-center relative w-full bg-shark" id="header">
        <TopNavSection></TopNavSection>
    </header>
    <div class="m-8 mt-20 py-6">
        <div class="grid m-auto w-full max-w-6xl text-xl text-black">
            <div>
                <TagBlock class="float-left max-w-lg" direction="right" extend={true} backgroundColor="north3">
                    2024 is the first year PyCon NL will be organized. Previous years “Python Conference” was organized where 150 attendees visited the conference. Our care for quality resulted in an amazing community where we kept growing. This year, the “PythonConference” will be rebranded into PyCon NL where we will begrowing even more.
                </TagBlock>
            </div>

            <div>		
                <TagBlock
                class="float-right max-w-lg "
                direction="left"
                backgroundColor="north2"
                extend={true}
                >
                The reason for sponsoring PyCon NL is to help the community grow, sponsors are what makes this conference possible. By having sponsors, we can keep our prices low. Therefore, this conference can be accessible to everyone interested.
            </TagBlock></div>

            <div class="mt-4 flex items-center justify-center">
                <a href="/PYCON NL Sponsorship brochure.pdf" target="_blank" rel="noopener noreferrer">
                    <TagBlock class="text-lg" backgroundColor="north">
                        <div class="hover:scale-105 font-bold">
                            Download <span class="px-4">|</span><span class="text-ordina">PYCON NL Sponsorship brochure</span>
                        </div>
                    </TagBlock>
                </a>
            </div>
            
            <div class="mt-8">
                <p>If you are interested in participating or have any questions, please get in touch with:</p>

                <address class="italic">
                    <p>Eva Munscher</p>
    
                    <p>Esther Roghair</p>
    
                    <a href="mailto:pycon.netherlands@gmail.com">pycon.netherlands@gmail.com</a><br />
                </address>
            </div>

            <div class="mt-8 ">
                <h1 class="font-bold text-3xl text-center">Sponsors 2024</h1>

                <div class='border border-black relative mt-12 text-center'>
                    <h2 class="mt-8 mb-2 font-bold">Gold</h2>
                    <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl py-6">
                        <div class="flex items-center justify-center">
                            <a href="https://www.soprasteria.com/" target="_blank">
                                <img src="/marketing/LOGO_SOPRA_STERIA_COLORS_RVB.jpg" alt="Python Conference Logo" class="w-96" />
                            </a>
                        </div>
                      </div>
                    <h2 class="mt-8 font-bold">Silver</h2>
                    <div></div>
                    <h2 class="mt-8 font-bold">Bronze</h2>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
    <PracticalInformationSection></PracticalInformationSection>
</div>