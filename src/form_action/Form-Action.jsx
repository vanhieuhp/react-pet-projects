import "./styles/form-action.css"

export default function FormAction() {

    function signup(formData) {
        const data = Object.fromEntries(formData)
        const dietaryRestrictions = formData.getAll("dietaryRestrictions");
        data.dietaryRestrictions = dietaryRestrictions;
        console.log(data);
    }


    return (
        <section>
            <h1>signup form</h1>
            <form action={signup} method="post">
                <label htmlFor="email">Email: </label>
                <input id="email" type="email" name="email" placeholder="joe@schmoe.com"/>
                <br/>
                <label htmlFor="password">Password: </label>
                <input id="password" type="password" name="password"/>
                <br/>

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" defaultValue="This is a description"></textarea>

                <br/>
                <fieldset>
                    <legend>Employment Status</legend>
                    <label>
                        <input type="radio" name="employmentStatus" value="unemployed"/>
                        Unemployed
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" value="part-time"/>
                        Part-time
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time"/>
                        Full-time
                    </label>
                </fieldset>

                <br/>
                <fieldset>
                    <legend>Dietary restriction:</legend>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="kosher"/>
                        Kosher
                    </label>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" value="vegan"/>
                        Vegan
                    </label>
                    <label>
                        <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free"/>
                        Gluten-free
                    </label>
                </fieldset>

                <br/>
                <label>What is your favorite color?</label>
                <select id="favColor" name="favColor" defaultValue="">
                    <option value="">--- Choose a color ---</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>

                <br/>
                <button>Submit</button>
            </form>


        </section>
    )
}