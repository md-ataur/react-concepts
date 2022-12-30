import { useQuery } from 'react-query';
import getQuote from './getQuote';

const ReactQuery = ({ quote }) => {
    const { data, isLoading } = useQuery('quote', () => getQuote());

    return (
        <div>
            <p>{isLoading ? <b>Loading...</b> : data?.content}</p>
        </div>
    );
};

export default ReactQuery;
