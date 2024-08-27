<script>
  export let time = ''
  export let title = ''
  export let speakerName = ''
  export let speakerImage = ''
</script>

<!-- Item -->
<div class="ps-2 my-2 ml-4 first:mt-0">
  <h3 class="text-sm mt-6 font-medium uppercase text-gray-500">{time}</h3>
</div>
<div class="flex gap-x-3">
  <!-- Icon -->
  <div>
    <div class="relative z-10 size-7 flex justify-center items-center">
      <div class="size-2 rounded-full bg-gray-400"></div>
    </div>
  </div>
  <!-- End Icon -->

  <!-- Right Content -->
  <div class="grow pt-0.5 pb-8">
    <h3 class="flex gap-x-1.5 font-semibold text-gray-800">{title}</h3>
    <button
      type="button"
      class="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-lg rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
      
    >
      {#if speakerImage !== ''}
        <img
          class="shrink-0 size-6 rounded-full"
          src="{speakerImage}"
          alt="Avatar"
        />
      {/if}
      {speakerName}
    </button>
  </div>
  <!-- End Right Content -->
</div>
<!-- End Item -->