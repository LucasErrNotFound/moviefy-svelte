<script lang="ts">
	import movifyLogo from '$lib/assets/moviefy_logo.png';
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-[#141413]/80 backdrop-blur-md"
>
	<nav
		class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10"
	>
		<a href={localizeHref('/')} class="flex shrink-0 items-center gap-2">
			<img src={movifyLogo} alt="Moviefy" class="h-8 w-auto" />
			<span class="font-sans text-base font-semibold text-foreground">Moviefy</span>
		</a>

		<div class="flex items-center gap-6">
			<a
				href={localizeHref('/discover')}
				class="font-sans text-sm font-medium text-foreground/70 transition-colors duration-150 hover:text-foreground"
			>
				Discover
			</a>
			<a
				href={localizeHref('/lists')}
				class="font-sans text-sm font-medium text-foreground/70 transition-colors duration-150 hover:text-foreground"
			>
				My Lists
			</a>
			<a
				href={localizeHref('/sign-in')}
				class="rounded-full border border-white/15 px-4 py-1.5 font-sans text-sm font-medium text-foreground/80 transition-colors duration-150 hover:border-white/30 hover:text-foreground"
			>
				Sign In
			</a>
		</div>
	</nav>
</header>
