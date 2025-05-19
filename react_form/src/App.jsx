import Header from './components/Header.jsx';
import StateLogin from './components/StateLogin.jsx';
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";

function App() {
    return (
        <>
            <Header/>
            <main>
                {/*<Login />*/}
                <StateLogin/>
                {/*<Signup/>*/}
            </main>
        </>
    );
}

export default App;
