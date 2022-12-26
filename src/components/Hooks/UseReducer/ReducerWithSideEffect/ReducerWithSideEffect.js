import React, { useEffect, useReducer } from 'react';

const initialState = {
    loading: true,
    post: {},
    error: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'Success':
            return {
                loading: false,
                post: action.result,
                error: '',
            };
        case 'Error':
            return {
                loading: false,
                post: {},
                error: 'There is a problem to fetching!',
            };
        default:
            return state;
    }
};

const ReducerWithSideEffect = () => {
    const [singlePost, dispatch] = useReducer(reducer, initialState);

    const getData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const data = await response.json();

            if (data) {
                dispatch({
                    type: 'Success',
                    result: data,
                });
            }
        } catch (error) {
            dispatch({
                type: 'Error',
            });
        }
    };

    useEffect(() => {
        /* fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((res) => res.json())
            .then((data) =>
                dispatch({
                    type: 'Success',
                    result: data,
                })
            )
            .catch((error) => {
                dispatch({
                    type: 'Error',
                });
            }); */

        getData();
    }, []);

    return (
        <div>
            <h2>Reducer With SideEffect</h2>
            <p>{singlePost.loading ? 'Loading...' : singlePost.post.title}</p>
            <p>{singlePost.error || null}</p>
        </div>
    );
};

export default ReducerWithSideEffect;
