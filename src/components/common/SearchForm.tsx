import React from 'react'
import Form from "next/form"

import SearchFormReset from './SearchFormReset'
import { FiSearch } from "react-icons/fi";

const SearchForm = ({query}:{query?:string}) => {
    return (
        <Form action="/" scroll={false} className='search-form'>
            <input type='text'
                name='query'
                defaultValue={query}
                className='search-input  '
                placeholder='Search Startups'
            />
            <div className='flex gap-1 lg:gap-2'>
                { query && <SearchFormReset />}
                <button  className='search-btn text-background'  type='submit'><FiSearch /></button>
            </div>

        </Form>
    )
}

export default SearchForm