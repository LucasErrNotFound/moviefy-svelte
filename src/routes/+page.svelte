<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Search } from '@lucide/svelte';

	let query = $state('');

	const posterCards = [
		{ color: 'bg-rose-900', blur: '', opacity: 0.9 },
		{ color: 'bg-amber-800', blur: 'blur-[2px]', opacity: 0.7 },
		{ color: 'bg-slate-700', blur: '', opacity: 0.85 },
		{ color: 'bg-orange-900', blur: '', opacity: 0.75 },
		{ color: 'bg-zinc-600', blur: 'blur-[1px]', opacity: 0.6 },
		{ color: 'bg-red-900', blur: '', opacity: 0.9 },
		{ color: 'bg-stone-700', blur: '', opacity: 0.8 },
		{ color: 'bg-amber-900', blur: 'blur-[2px]', opacity: 0.5 },
		{ color: 'bg-neutral-600', blur: '', opacity: 0.7 },
		{ color: 'bg-rose-800', blur: '', opacity: 0.6 },
		{ color: 'bg-yellow-900', blur: 'blur-[1px]', opacity: 0.85 },
		{ color: 'bg-zinc-700', blur: '', opacity: 0.9 }
	];

	const allCards = [...posterCards, ...posterCards];

	function handleSearch(event: SubmitEvent) {
		event.preventDefault();
		if (!query.trim()) return;
		// TODO: wire to /search route or API
		console.log('Searching for:', query);
	}
</script>

<svelte:head>
	<title>Moviefy — Find your next favorite movie</title>
	<meta
		name="description"
		content="Search millions of films, build your watchlist, and discover what to watch next."
	/>
</svelte:head>

<div class="flex h-screen flex-col overflow-hidden pt-16 lg:flex-row">
	<!-- Left panel: movie poster grid -->
	<div class="relative hidden overflow-hidden lg:block lg:w-[55%]">
		<!-- Right-edge fade into background -->
		<div
			class="pointer-events-none absolute inset-0 z-10 bg-linear-to-r from-transparent via-transparent to-[#141413]"
		></div>
		<!-- Top/bottom fade -->
		<div
			class="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-[#141413]/70 via-transparent to-[#141413]/70"
		></div>

		<div class="absolute inset-0 scale-110 -rotate-3">
			<div class="conveyor-animate grid grid-cols-3 gap-3 p-6">
				{#each allCards as card, i (i)}
					<div
						class="aspect-2/3 rounded-xl {card.color} {card.blur}"
						style="opacity: {card.opacity}"
					></div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Right panel: search form -->
	<div class="flex flex-1 flex-col justify-center px-8 py-16 md:px-12 lg:w-[45%] lg:px-16 lg:py-0">
		<p class="mb-4 font-serif text-xs font-semibold tracking-widest text-primary uppercase">
			Discover · Rate · Share
		</p>

		<h1
			class="mb-6 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
			style="line-height: 1.1"
		>
			Find your<br />next favorite<br />
			<span class="text-primary">movie.</span>
		</h1>

		<p class="mb-10 max-w-md font-serif text-base leading-relaxed text-foreground/70 md:text-lg">
			Search millions of films, build your watchlist, and discover what to watch next — all in one
			place.
		</p>

		<form class="flex w-full max-w-md flex-col gap-3 sm:flex-row" onsubmit={handleSearch}>
			<div class="relative flex-1">
				<Input
					type="search"
					name="q"
					placeholder="Search for a movie..."
					bind:value={query}
					class="h-12 w-full rounded-xl border-white/10 bg-white/5 font-sans text-sm text-foreground placeholder:text-foreground/40 focus-visible:border-primary/40 focus-visible:ring-primary/50"
				/>
				<div class="pointer-events-none absolute inset-y-0 inset-e-0 flex items-center justify-center pe-3 text-muted-foreground peer-disabled:opacity-50">
					<Search class='size-4'/>
				</div>
			</div>
			<Button
				type="submit"
				class="h-12 shrink-0 rounded-xl bg-primary px-6 font-sans font-semibold text-primary-foreground transition-colors duration-150 hover:bg-primary/90"
			>
				Search
			</Button>
		</form>

		<p class="mt-4 font-sans text-xs text-foreground/40">
			Try "Dune", "Oppenheimer", or "Everything Everywhere"
		</p>
	</div>
</div>

<style>
	@keyframes conveyor-belt {
		from {
			transform: translateY(-50%);
		}
		to {
			transform: translateY(0%);
		}
	}

	.conveyor-animate {
		animation: conveyor-belt 25s linear infinite;
	}
</style>
