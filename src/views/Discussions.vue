<template>
	<discussion-list :discussions="discussions"></discussion-list>
</template>

<script>
import DiscussionList from "../components/discussions/DiscussionList.vue";

export default {
	components: { DiscussionList },
	data() {
		return {
			discussions: [
				{
					id: 1,
					title:"Paul",
					content: "Comment va-tu?"
				},
				{
					id: 2,
					title:"Jean",
					content: "je vais bien?"
				},
				{
					id: 3,
					title:"Luc",
					content: "A la tienne!"
				},
				{
					id: 4,
					title:"Francois",
					content: "Ou va tu ce soir?"
				}
			]
		};
	}
};
</script>
