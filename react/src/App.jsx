import { AdminRouter } from "../routers/AdminRouter";
import HomeRouter from "../routers/HomeRouter";
import "./App.css";

function App() {
    return (
        <>
            <HomeRouter />
            <AdminRouter />
        </>
    );
}

export default App;
