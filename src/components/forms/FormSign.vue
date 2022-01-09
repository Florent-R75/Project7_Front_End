<template>


	<form @submit.prevent="submitForm">
		<div :class="['form-control', { invalid: userNameValidity === 'invalid' }]">
			<label for="user-name">Name</label>
			<input
				id="user-name"
				name="user-name"
				type="text"
				v-model.trim="userName"
				@blur="validateInput"
				autocomplete="off"
				placeholder="Your Name"
			/>
			<p v-if="userNameValidity === 'invalid'">Please enter a valid name!</p>
		</div>
		<div class="form-control">
			<label for="password">Password</label>
			<input
				id="password"
				name="password"
				type="string"
				v-model.number="userPassword"
				ref="passwordInput"
				placeholder="Your Password"
			/>
		</div>
<div class="button">

		<base-button>Submit</base-button>
</div>
	</form>
</template>

<script>
export default {
	data() {
		return {
			userName: "",
			userPassword: null,
			userNameValidity: "pending"
		};
	},
	methods: {
		submitForm() {
			this.userName = "";
			this.userPassword = null;

			if (this.userNameValidity !== "valid") {
				return;
			}
			alert("Form submitted!");
		},
		validateInput() {
			this.userNameValidity = this.userName === "" ? "invalid" : "valid";
		}
	}
};
</script>

<style scoped>
*:focus {
	outline: none;
}
form {
	margin: 2rem auto;
	max-width: 40rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 3rem;
}
.form-control {
	margin: 1rem 0rem;
}
.form-control.invalid input {
	border-color: #b6524b;
}
.form-control.invalid label {
	color: #b6524b;
}
label {
	font-weight: bold;
}
h2 {
	font-size: 1rem;
	margin: 0.5rem 0;
}
input,
select {
	display: block;
	width: 100%;
	font: inherit;
	margin-top: 0.5rem;

	border: 2px solid gray;
	padding: 0.5em;
}
select {
	width: auto;
}

.button{
    display:flex;
    justify-content: end;
}



</style>
