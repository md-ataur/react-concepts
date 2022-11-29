import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Dashboard/Layout/Layout';
import Form from './components/Form/Form';
import HandlingEvents from './components/HandlingEvents/HandlingEvents';
import RenderProps from './components/RenderProps/RenderProps';
import StateAndLifecycle from './components/StateAndLifecycle/StateAndLifecycle';

function App() {
    return (
        <>
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route
                                path="state-lifecycle"
                                element={<StateAndLifecycle locale="bn-BD" />}
                            />
                            <Route path="handling-events" element={<HandlingEvents />} />
                            <Route path="form" element={<Form />} />
                            <Route path="render-props" element={<RenderProps />} />
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
