import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RenderProps from './components/RenderProps/RenderProps';
import Header from './components/Shared/Header/Header';
import StateAndLifecycle from './components/StateAndLifecycle/StateAndLifecycle';
import Home from './Pages/Home/Home';

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="render-props" element={<RenderProps />} />
                        <Route
                            path="state-lifecycle"
                            element={<StateAndLifecycle locale="bn-BD" />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
