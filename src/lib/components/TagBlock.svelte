<script lang="ts">
	export let backgroundColor:
		| 'shark'
		| 'fountain'
		| 'ordina'
		| 'soprasteria'
		| 'north'
		| 'north2'
		| 'north3' = 'ordina';
	export let direction: 'left' | 'right' | 'both' = 'both';
	export let extend: boolean = false;
	export let small: boolean = false;

	let componentClass: string = '';
	export { componentClass as class };
</script>

<div
	class="relative inline-flex {componentClass} {backgroundColor === 'north3'
		? 'text-shark'
		: 'text-white'}"
>
	{#if ['left', 'both'].indexOf(direction) > -1}
		<svg
			class="absolute ml-[1px] h-full -translate-x-full self-stretch"
			viewBox="0 0 71 100"
			xml:space="preserve"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g transform="matrix(3.7761 0 0 3.7761 -8.9107 .10595)">
				<path
					d="m21.162 26.454c-0.52053-0.0026-0.95771-0.03192-1.278-0.08895v1e-6c-1.1306-0.2013-2.0481-0.56897-2.9909-1.1985-0.24707-0.16498-1.8467-1.4021-3.5548-2.7492s-3.4603-2.7247-3.8939-3.0613c-1.2783-0.9926-6.6053-5.2037-6.753-5.3385-0.4013-0.36609-0.44538-1.0491-0.094261-1.4605 0.047677-0.05586 1.9142-1.5427 4.1478-3.304s5.3979-4.26 7.0318-5.5526c3.1588-2.499 3.5686-2.7866 4.5013-3.1586 1.0008-0.39926 1.7501-0.5685 2.8839-0.56991"
					class:fill-ordina={backgroundColor === 'ordina'}
					class:fill-shark={backgroundColor === 'shark'}
					class:fill-fountain={backgroundColor === 'fountain'}
					class:fill-soprasteria={backgroundColor === 'soprasteria'}
					class:fill-north={backgroundColor === 'north'}
					class:fill-north2={backgroundColor === 'north2'}
					class:fill-north3={backgroundColor === 'north3'}
				/>
			</g>
		</svg>
	{:else if extend}
		<div
			class="absolute ml-[1px] h-full w-screen -translate-x-full self-stretch"
			class:bg-ordina={backgroundColor === 'ordina'}
			class:bg-shark={backgroundColor === 'shark'}
			class:bg-fountain={backgroundColor === 'fountain'}
			class:bg-soprasteria={backgroundColor === 'soprasteria'}
			class:bg-north={backgroundColor === 'north'}
			class:bg-north2={backgroundColor === 'north2'}
			class:bg-north3={backgroundColor === 'north3'}
		/>
	{/if}
	<div
		class="inline py-4 pl-4 pr-4"
		class:py-4={!small}
		class:pl-4={!small}
		class:pr-4={!small}
		class:py-1={small}
		class:pl-1={small}
		class:pr-1={small}
		class:bg-ordina={backgroundColor === 'ordina'}
		class:bg-shark={backgroundColor === 'shark'}
		class:bg-fountain={backgroundColor === 'fountain'}
		class:bg-soprasteria={backgroundColor === 'soprasteria'}
		class:bg-north={backgroundColor === 'north'}
		class:bg-north2={backgroundColor === 'north2'}
		class:bg-north3={backgroundColor === 'north3'}
		class:md:pl-4={direction === 'right' && !small}
		class:md:pl-1={direction === 'right' && small}
		class:md:pr-0={direction === 'right'}
		class:md:pr-4={direction === 'left' && !small}
		class:md:pr-1={direction === 'left' && small}
		class:md:pl-0={direction === 'left'}
	>
		<slot />
	</div>
	{#if ['right', 'both'].indexOf(direction) > -1}
		<svg
			class="absolute right-0 mr-[1px] h-full translate-x-full self-stretch"
			viewBox="0 0 71 100"
			xml:space="preserve"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g transform="matrix(-3.7761 0 0 3.7761 79.911 .10595)">
				<path
					d="m21.162 26.454c-0.52053-0.0026-0.95771-0.03192-1.278-0.08895v1e-6c-1.1306-0.2013-2.0481-0.56897-2.9909-1.1985-0.24707-0.16498-1.8467-1.4021-3.5548-2.7492s-3.4603-2.7247-3.8939-3.0613c-1.2783-0.9926-6.6053-5.2037-6.753-5.3385-0.4013-0.36609-0.44538-1.0491-0.094261-1.4605 0.047677-0.05586 1.9142-1.5427 4.1478-3.304s5.3979-4.26 7.0318-5.5526c3.1588-2.499 3.5686-2.7866 4.5013-3.1586 1.0008-0.39926 1.7501-0.5685 2.8839-0.56991"
					class:fill-ordina={backgroundColor === 'ordina'}
					class:fill-shark={backgroundColor === 'shark'}
					class:fill-fountain={backgroundColor === 'fountain'}
					class:fill-soprasteria={backgroundColor === 'soprasteria'}
					class:fill-north={backgroundColor === 'north'}
					class:fill-north2={backgroundColor === 'north2'}
					class:fill-north3={backgroundColor === 'north3'}
				/>
			</g>
		</svg>
	{:else if extend}
		<div
			class="absolute right-0 mr-[1px] h-full w-screen translate-x-full self-stretch"
			class:bg-ordina={backgroundColor === 'ordina'}
			class:bg-shark={backgroundColor === 'shark'}
			class:bg-fountain={backgroundColor === 'fountain'}
			class:bg-soprasteria={backgroundColor === 'soprasteria'}
			class:bg-north={backgroundColor === 'north'}
			class:bg-north2={backgroundColor === 'north2'}
			class:bg-north3={backgroundColor === 'north3'}
		/>
	{/if}
</div>
