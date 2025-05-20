import { use, useActionState } from 'react';

import { OpinionsContext } from '../store/opinions-context.jsx';
import Submit from './Submit.jsx';

export function NewOpinion() {
	const { addOpinion } = use(OpinionsContext);

	async function shareOpinionAction(prevState, formData) {
		const title = formData.get('title');
		const body = formData.get('body');
		const username = formData.get('userName');

		let errors = [];
		if (title.trim().length < 5) {
			errors.push('title must be at least give characters long.');
		}

		if (body.trim().length < 10 || body.trim().length > 300) {
			errors.push('Opinion must be between 10 and 300 characters long.');
		}

		if (!username.trim()) {
			errors.push('Please enter your name.');
		}

		if (errors.length > 0) {
			return {
				errors,
				enteredValue: {
					title,
					body,
					username,
				},
			};
		}

		// submit to backend
		await addOpinion({ title, body, userName: username });
		return { errors: null };
	}

	const [formState, formAction] = useActionState(shareOpinionAction, { errors: null });

	return (
		<div id="new-opinion">
			<h2>Share your opinion!</h2>
			<form action={formAction}>
				<div className="control-row">
					<p className="control">
						<label htmlFor="userName">Your Name</label>
						<input
							type="text"
							id="userName"
							name="userName"
							defaultValue={formState.enteredValue?.username}
						/>
					</p>

					<p className="control">
						<label htmlFor="title">Title</label>
						<input type="text" id="title" name="title" defaultValue={formState.enteredValue?.title} />
					</p>
				</div>
				<p className="control">
					<label htmlFor="body">Your Opinion</label>
					<textarea
						id="body"
						name="body"
						rows={5}
						defaultValue={formState.enteredValue?.body}
					></textarea>
				</p>
				{formState.errors && (
					<ul className="errors">
						{formState.errors.map(error => (
							<li key={error}>{error}</li>
						))}
					</ul>
				)}

				<Submit />
			</form>
		</div>
	);
}
