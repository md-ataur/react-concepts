import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Emoji from './components/CompositionVSInheritance/Composition/Emoji';
import Text2 from './components/CompositionVSInheritance/Composition/Text';
import Text from './components/CompositionVSInheritance/Inheritance/Text';
import Layout from './components/Dashboard/Layout/Layout';
import Form from './components/Form/Form';
import HandlingEvents from './components/HandlingEvents/HandlingEvents';
import ClickCounter from './components/HigherOrderComponent/ClickCounter';
import HoverCounter from './components/HigherOrderComponent/HoverCounter';
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
                            <Route path="inheritance" element={<Text />} />
                            <Route
                                path="composition"
                                element={
                                    <Emoji>{({ addEmoji }) => <Text2 addEmoji={addEmoji} />}</Emoji>
                                }
                            />
                            <Route
                                path="hoc"
                                element={
                                    <>
                                        <HoverCounter />
                                        <ClickCounter />
                                    </>
                                }
                            ></Route>
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
