import { useEffect, useState } from "react"

const DataEmailName = () => {
    interface data {
        Email: string,
        Name: string
    }

    const [data, setData] = useState<data[]>([])
    const api: string = 'https://script.google.com/macros/s/AKfycbwdNhDIXek03zOcWMrXVs6vKaUCxporRAKUIqr7dn7nlr8YhnTmMNLF4s7G_tpVTsQFKw/exec'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(api)
                const result = await response.json();
                setData(result)

            } catch (error) {
                console.log('error: ' + error)
            }
        }
        fetchData();
    }, []);
    return (
        <>
            {data.length > 0 && (
                <>
                    {data.map((user, index) => (
                        <>
                        <h1>User {index + 1}</h1>
                        <div key={'name'+index} >Name: <span>{user.Email}</span></div>
                        <div key={'email'+index} >Email: <span>{user.Name}</span></div>
                        </>
                    ))}
                </>
            )}
        </>
    )
}   

export default DataEmailName