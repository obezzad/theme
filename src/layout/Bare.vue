<template>
	<div class="layout-bare">
		<header>
			<router-link to="/" class="site-info">
				<img
					class="site-logo"
					:src="getSiteSittings.logo"
					:alt="getSiteSittings.title"
				>
				<h5 class="site-name">
					{{ getSiteSittings.title }}
				</h5>
			</router-link>
		</header>
		<router-view />
	</div>
</template>

<script>
export default {
	name: "BareLayout",
	computed: {
		getSiteSittings() {
			return this.$store.getters["settings/get"];
		}
	}
};
</script>
