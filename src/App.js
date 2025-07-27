const { createBrowserRouter, Link } = require("react-router-dom");

const App = () =>{
    return (
        <>
        App

        <div className="p-3 m-3">
            <Link to={'/useMemo'} className="border border-black rounded-lg p-3">Use Memo</Link>
        </div>
        </>
    )
};

export default App;


