import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Emoji from './components/CompositionVSInheritance/Composition/Emoji';
import Text2 from './components/CompositionVSInheritance/Composition/Text';
import Text from './components/CompositionVSInheritance/Inheritance/Text';
import Layout from './components/Dashboard/Layout/Layout';
import Form from './components/Form/Form';
import HandlingEvents from './components/HandlingEvents/HandlingEvents';
import ClickCounter from './components/HigherOrderComponent/ClickCounter';
import ClickCounterHoc from './components/HigherOrderComponent/HOC/ClickCounter';
import HoverCounterHoc from './components/HigherOrderComponent/HOC/HoverCounter';
import HoverCounter from './components/HigherOrderComponent/HoverCounter';
import ForwardRef from './components/Hooks/ForwardRef/ForwardRef';
import UseCallbackAndMemo from './components/Hooks/UseCallbackAndMemo/UseCallbackAndMemo';
import UseEffect from './components/Hooks/UseEffect/UseEffect';
import UseReducer from './components/Hooks/UseReducer/UseReducer';
import UseRef from './components/Hooks/UseRef/UseRef';
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
                                        <ClickCounterHoc />
                                        <HoverCounterHoc />
                                    </>
                                }
                            />
                            <Route path="useEffect" element={<UseEffect />} />
                            <Route path="UseCallbackAndMemo" element={<UseCallbackAndMemo />} />
                            <Route path="useRef" element={<UseRef />} />
                            <Route path="forwardRef" element={<ForwardRef />} />
                            <Route path="useReducer" element={<UseReducer />} />
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
