import React from 'react'
import { useState } from 'react'
import { AsyncPaginate } from "react-select-async-paginate"
import { GEO_API_URL, geoApiOptions as options } from '../../utility/api'

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState('')

    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }

    const loadOptions = async (inputValue) => {
        try {
            const response = await fetch(`${GEO_API_URL}/cities?namePrefix=${inputValue}`, options)
            const data = await response.json()
            return {
                options: data.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name} ${city.countryCode}`
                    }
                })
            }
        } catch (error) {
            console.log('Error while performing API request', error)
        }
    }

    return (
        <AsyncPaginate
            placeholder="Search for City"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search