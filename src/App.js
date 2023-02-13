import "./App.css";
import HomePage from "./pages/Home/HomePage";
import Layout from "./component/Latout/layout";

function App() {
    return (
        <div className="App">
            <Layout>
                <div className="container max-w-screen-lg  mx-auto flex">
                    <HomePage />
                </div>
            </Layout>
        </div>
    );
}

export default App;
