import { useEffect, useState } from "react";

export function useTypesHotels() {
    const [typesData, setTypesData] = useState()
    useEffect(() => {
        const fetchTypesData = async () => {
            try {
                const respons = await fetch('/propertyTypeData.json')
                if (!respons) {
                    throw new Error('something wrong while fetching property type data')
                }
                const resultTypesData = await respons.json()
                setTypesData(resultTypesData)
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchTypesData()
    }, [])

    return typesData
}