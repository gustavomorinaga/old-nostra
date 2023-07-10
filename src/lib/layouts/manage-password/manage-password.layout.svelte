<script lang="ts">
	import { Card } from '$lib/components';
</script>

<Card class="manage-password" let:C>
	<C.Body>
		<C.Header>
			<h1>Manage password</h1>
			<p>Here you can manage your password</p>
		</C.Header>

		<form id="managePassword" method="POST">
			<div class="form-control">
				<label for="oldPassword">
					<span>Old password</span>
				</label>
				<input type="password" name="oldPassword" id="oldPassword" />
			</div>
			<div class="form-control">
				<label for="newPassword">
					<span>New password</span>
				</label>
				<input type="password" name="newPassword" id="newPassword" />
			</div>
			<div class="form-control">
				<label for="confirmNewPassword">
					<span>Confirm new password</span>
				</label>
				<input type="password" name="confirmNewPassword" id="confirmNewPassword" />
			</div>
		</form>

		<C.Actions>
			<p>
				Make sure it's at least 15 characters OR at least 8 characters including a number and a
				lowercase letter.
			</p>
			<button type="submit" form="managePassword">Save</button>
		</C.Actions>
	</C.Body>
</Card>

<style lang="scss" global>
	section.manage-password {
		@apply card-bordered card card-compact overflow-hidden;

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
							@apply label-text;
						}
					}

					& input {
						@apply input-bordered input;
					}
				}
			}

			& > div.card-actions {
				@apply -mx-4 -mb-4 items-center bg-base-200 p-4;

				& > p {
					@apply text-base-content text-opacity-75;
				}

				& > button {
					@apply btn-primary btn-sm btn;
				}
			}
		}
	}
</style>
