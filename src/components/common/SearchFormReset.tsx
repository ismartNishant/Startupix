'use client'
import React from 'react'
import Link from 'next/link';
import { IoClose } from "react-icons/io5";
const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector(".search-form") as HTMLFormElement;
        if (form) {
            form.reset(); // Resets the form fields to their default values
        }
    };

    return (
        <button type='reset'  onClick={reset}>
          <Link href="/" className='search-btn text-background'><IoClose /></Link>
        </button>
    )
}

export default SearchFormReset