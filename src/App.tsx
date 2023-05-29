import { useState } from "react";
import "./App.css";
import ProductPage from "./pages/hookUseCallback/ProductPage";

function App() {
    const [isDarck, setIsDarck] = useState<boolean>(true);

    return (
        <>
            <label htmlFor='dark mode'>
                <input type='checkbox' onChange={() => setIsDarck(!isDarck)} />
                Dark
            </label>
            <ProductPage
                productId={"1"}
                referrer={"facebook"}
                theme={isDarck ? "dark" : "light"}
            />
        </>
    );
}

export default App;
