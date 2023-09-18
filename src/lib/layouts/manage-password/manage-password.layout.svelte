<script lang="ts">
	import { Card } from '$lib/components';
	import { superForm } from 'sveltekit-superforms/client';
	import type { managePasswordSchema } from '$lib/schemas';
	import type { SuperValidated } from 'sveltekit-superforms';

	export let data: SuperValidated<typeof managePasswordSchema>;

	const { enhance, errors } = superForm(data);
</script>

<Card class="manage-password" let:C>
	<C.Body>
		<C.Header>
			<h1>Manage password</h1>
			<p>Here you can manage your password</p>
		</C.Header>

		<form id="managePassword" method="POST" use:enhance>
			<div class="form-control">
				<label for="oldPassword">
					<span>Old password</span>
				</label>
				<input type="password" name="oldPassword" id="oldPassword" />
				{#if $errors.oldPassword}
					<label for="oldPassword">
						<span class="error">{$errors.oldPassword}</span>
					</label>
				{/if}
			</div>
			<div class="form-control">
				<label for="newPassword">
					<span>New password</span>
				</label>
				<input type="password" name="newPassword" id="newPassword" />
				{#if $errors.newPassword}
					<label for="newPassword">
						<span class="error">{$errors.newPassword}</span>
					</label>
				{/if}
			</div>
			<div class="form-control">
				<label for="confirmNewPassword">
					<span>Confirm new password</span>
				</label>
				<input type="password" name="confirmNewPassword" id="confirmNewPassword" />
				{#if $errors.confirmNewPassword}
					<label for="confirmNewPassword">
						<span class="error">{$errors.confirmNewPassword}</span>
					</label>
				{/if}
			</div>
		</form>

		<C.Actions>
			<p>
				Make sure it's must contain at least one uppercase letter, one lowercase letter, one number
				and one special character.
			</p>
			<button type="submit" form="managePassword">Save</button>
		</C.Actions>
	</C.Body>
</Card>

<style lang="scss" global>
	section.manage-password {
		@apply card card-bordered card-compact overflow-hidden;

		& > div.card-body {
			& > header {
				& > h1 {
					@apply card-title;
				}

				& > p {
					@apply text-base-content text-opacity-75;
				}
			}

			& > form {
				& > div.form-control {
					@apply mb-2 max-w-sm;

					& > label {
						@apply label;

						& > span {
							&:not(.error) {
								@apply label-text;
							}

							&.error {
								@apply label-text-alt text-error;
							}
						}
					}

					& input {
						@apply input input-bordered;
					}
				}
			}

			& > div.card-actions {
				@apply -mx-4 -mb-4 items-center bg-base-200 p-4;

				& > p {
					@apply text-base-content text-opacity-75;
				}

				& > button {
					@apply btn btn-primary btn-sm;
				}
			}
		}
	}
</style>
