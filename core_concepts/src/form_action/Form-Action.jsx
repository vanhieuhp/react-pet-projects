import './styles/form-action.css';

export default function FormAction() {
	function signup(formData) {
		const data = Object.fromEntries(formData);
		const dietaryRestrictions = formData.getAll('dietaryRestrictions');
		data.dietaryRestrictions = dietaryRestrictions;
		console.log(data);
	}

	return (
		<div id="form-action-container">
			<section id="form-action">
				<h1>signup form</h1>
				<form action={signup} method="post">
					<label className="form-action-label" htmlFor="email">
						Email:{' '}
					</label>
					<input
						className="form-action-input"
						id="email"
						type="email"
						name="email"
						placeholder="joe@schmoe.com"
					/>
					<br />
					<label className="form-action-label" htmlFor="password">
						Password:{' '}
					</label>
					<input className="form-action-input" id="password" type="password" name="password" />
					<br />

					<label className="form-action-label" htmlFor="description">
						Description:
					</label>
					<textarea
						className="form-action-textarea"
						id="description"
						name="description"
						defaultValue="This is a description"
					></textarea>

					<br />
					<fieldset className="form-action-fieldset">
						<legend className="form-action-legend">Employment Status</legend>
						<label className="form-action-label">
							<input
								className="form-action-input"
								type="radio"
								name="employmentStatus"
								value="unemployed"
							/>
							Unemployed
						</label>
						<label className="form-action-label">
							<input
								className="form-action-input"
								type="radio"
								name="employmentStatus"
								value="part-time"
							/>
							Part-time
						</label>
						<label className="form-action-label">
							<input
								className="form-action-input"
								type="radio"
								name="employmentStatus"
								defaultChecked={true}
								value="full-time"
							/>
							Full-time
						</label>
					</fieldset>

					<br />
					<fieldset className="form-action-fieldset">
						<legend className="form-action-legend">Dietary restriction:</legend>
						<label className="form-action-label">
							<input
								type="checkbox"
								name="dietaryRestrictions"
								value="kosher"
								className="form-action-input"
							/>
							Kosher
						</label>
						<label className="form-action-label">
							<input
								type="checkbox"
								name="dietaryRestrictions"
								value="vegan"
								className="form-action-input"
							/>
							Vegan
						</label>
						<label className="form-action-label">
							<input
								type="checkbox"
								name="dietaryRestrictions"
								defaultChecked={true}
								value="gluten-free"
								className="form-action-input"
							/>
							Gluten-free
						</label>
					</fieldset>

					<br />
					<label className="form-action-label">What is your favorite color?</label>

					<select id="favColor" name="favColor" defaultValue="">
						<option value="">--- Choose a color ---</option>
						<option value="orange">Orange</option>
						<option value="yellow">Yellow</option>
						<option value="green">Green</option>
						<option value="blue">Blue</option>
						<option value="indigo">Indigo</option>
						<option value="violet">Violet</option>
					</select>

					<br />
					<button className="form-action-button">Submit</button>
				</form>
			</section>
		</div>
	);
}
