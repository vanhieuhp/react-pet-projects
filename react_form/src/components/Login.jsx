import {useRef, useState} from "react";

export default function Login() {
    const email = useRef();
    const password = useRef();

    const [emailIsInValid, setEmailIsInValid] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;

        const emailIsInValid = enteredEmail.includes("@");

        if (!emailIsInValid) {
            setEmailIsInValid(true);
            return;
        }

        setEmailIsInValid(false);

        console.log("Sending HTTP request...");
    }


    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        ref={email}
                    />
                    <div className="control-error">
                        {emailIsInValid && <p>Please enter a valid email address.</p>}
                    </div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        ref={password}
                    />
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button type="submit" className="button">Login</button>
            </p>
        </form>
    );
}
