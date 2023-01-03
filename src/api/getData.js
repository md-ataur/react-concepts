import { getAccessToken } from '../../../Login/Auths';

function Documents() {
    const [isLoading, setIsLoading] = useState(false);
    const [docuemntData, setDocuemntData] = useState(null);
    const [msg, setMsg] = useState(null);
    const token = getAccessToken();

    // Get documents data
    const getDocuemnts = async () => {
        setIsLoading(true);

        try {
            const response = await fetch(`https://revorium-api.herokuapp.com/v1/document`, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + token
                }
            });

            const responseData = await response.json();

            if (responseData) {
                setDocuemntData(responseData.data);
            }

            if (response.ok) {
                setMsg(responseData.message);
            } else {
                setMsg(responseData.message);
            }
        } catch (err) {
            console.log(err);
            setMsg('Failed: ' + err.message);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        getDocuemnts();
    }, []);

    return (
        <div>
            {docuemntData instanceof Array && docuemntData.length > 0 ? (
                docuemntData.map((data) => console.log(data));
            ) : (
                ''
            )}
        </div>
    )
}


export default Documents;