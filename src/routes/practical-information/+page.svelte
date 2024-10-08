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
        <!-- Grid container for text and image (half-half layout) -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl mx-auto text-xl text-black">
            
            <!-- Left Column: Text (Half page) -->
            <div class="space-y-4">
                <h2 class="font-semibold text-2xl">Directions to Media Plaza:</h2>
                <p>
                    <strong>By Car</strong><br/>
                    If you are coming to Jaarbeurs by car, it is important to check in advance which parking lot (P2, P4, or P6) you will park in. For parking near Media Plaza, we recommend using parking lot P4. For this parking lot, you can use 'Truus van Lierlaan, Utrecht' as the navigation address. Alternatively, follow the blue ANWB signs indicating 'Jaarbeurs' from the Utrecht Ring Road. If P4 is full, you can also park in P2 or P6.
                </p>
                <p>
                    <strong>By Public Transport</strong><br/>
                    Jaarbeurs is perfectly accessible by public transport. The locations are right next to Utrecht Central Station, with buses and trams stopping continuously at the Jaarbeursplein stop. Are you coming by train? Then follow the signs for 'Jaarbeursplein' from Utrecht Central Station. Walk towards the Beatrix Building and cross at Croeselaan. Within a few minutes, you will be at the exhibition and conference center, where you will also find Media Plaza.
                </p>
            </div>

            <!-- Right Column: Image (Half page) -->
            <div class="flex justify-end">
                <img
                    class="w-60 p-1 lg:w-full"
                    src="/media_plaza.png"
                    alt="A map showing where the Jaarbeurs Utrecht is located"
                />
            </div>
        </div>

        <!-- Full Width Text After Image -->
        <div class="mt-8 w-full max-w-6xl mx-auto">
            <p>
                <strong>To Media Plaza</strong><br/>
                From P4, enter the exhibition and conference center via the West Entrance. Then walk straight down the central hallway until you see a pond on your right. Via the escalators or elevator, you will arrive at Media Plaza. Are you walking to Media Plaza after using public transport? Enter the exhibition and conference center via the East Entrance. You will then see a pond on your left. Via the escalators or elevator, you will arrive at Media Plaza and Supernova.
            </p>
        </div>
    </div>
    
    <PracticalInformationSection></PracticalInformationSection>
</div>
