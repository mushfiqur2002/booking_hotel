import { useEffect, useState } from "react"
export function useHotels() {
    const [data, setData] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/data.json')
                if (!res) {
                    throw new Error('somethig wrong')
                }
                const resultData = await res.json()
                setData(resultData)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    return data
}