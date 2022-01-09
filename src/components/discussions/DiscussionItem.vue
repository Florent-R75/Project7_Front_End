<template>
	<base-card>
   
		<h3>{{ title }}</h3>
        

    
		<p>{{ content }}</p>
        

    
		<div class="pli">
			<base-button>Modifier</base-button>
		</div>
	</base-card>
</template>

<script>
export default {
	props: ["title", "content"]
};
</script>

<style scoped>
li {
	margin: auto;
	max-width: 40rem;
}

header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

h3 {
	font-size: 1.25rem;
	margin: 0.5rem 0;
    display:inline-block
}

p {
	margin: 0.5rem 0;
}

a {
	text-decoration: none;
	color: #ce5c00;
}

a:hover,
a:active {
	color: #c89300;
}

.pli{
    display:flex;
    justify-content: end;
    align-items: center;
}
</style>
