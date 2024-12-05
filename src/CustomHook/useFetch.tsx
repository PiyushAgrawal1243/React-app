import { useEffect, useState } from "react";



function useFetch(fetchFn: Function, initialData: any) {

    const [isFetching, setIsFetching] = useState(false);
    const [data, setData] = useState(initialData)
    const [err, setError] = useState({ message: "" })

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const data = await fetchFn();
                setTimeout(()=>{
                    
                setData(data);
                setIsFetching(false)
                }, 1000)
                
                }
            catch (error: any) {
                setError({ message: error.error.message || 'Failed to fetch response.' })
            }

        }

        fetchData();
    }, [fetchFn])

    return {
        isFetching,
        data,
        err
    }

}

export default useFetch;