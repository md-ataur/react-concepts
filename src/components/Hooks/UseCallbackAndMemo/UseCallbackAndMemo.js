import React, { useCallback, useMemo, useState } from 'react';
import Button from './Button';
import ShowCount from './ShowCount';
import Title from './Title';

const UseCallbackAndMemo = () => {
    const [count1, setCount1] = useState(0);
    const [count5, setCount5] = useState(0);

    const incrementByOne = useCallback(() => {
        setCount1((prevCount) => prevCount + 1);
    }, []);

    const incrementByFive = useCallback(() => {
        setCount5((prevCount) => prevCount + 5);
    }, []);

    const isEvenOrOdd = useMemo(() => {
        let i = 0;
        while (i < 2000000000) {
            i += 1;
        }

        return count1 % 2 === 0;
    }, [count1]);

    return (
        <div>
            <p>
                je je component er rerender atkate hobe sei sei component guluke react.memo diye
                wrap kore dibo.
            </p>
            <p>
                react.memo diye already optimized kora component er rerender jodi atkate cai sekhtre
                amra useCallback use korbo
            </p>
            <h4>
                <label htmlFor="">
                    <b>useCallback</b>
                </label>
                <p>
                    একটা callback function কে মনে রাখবে এবং শুধুমাত্র তখনই ভুলে যাবে যখন এই function
                    টা যে যে জিনিসগুলোর উপর নির্ভর করে সেগুলো পরিবর্তন হল।
                </p>
            </h4>
            <h4>
                <label htmlFor="">
                    <b>useMemo</b>
                </label>
                <p>
                    একটা function এর return value কে মনে রাখবে এবং শুধুমাত্র তখনই ভুলে যাবে যখন এই
                    function টা যে যে জিনিসগুলোর উপর নির্ভর করে সেগুলো পরিবর্তন হলে।
                </p>
            </h4>
            <hr />
            <Title />
            <ShowCount count={count1} title={'Counter 1'} />
            <p>{isEvenOrOdd ? 'Even Number' : 'Odd Number'}</p>
            <Button handleClick={incrementByOne}>Increment by one</Button>
            <br />
            <hr />
            <ShowCount count={count5} title={'Counter 5'} />
            <Button handleClick={incrementByFive}>Increment by five</Button>
        </div>
    );
};

export default UseCallbackAndMemo;
