import React from 'react'
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigateTo = useNavigate();

  const searchFilters = [
    { label: 'All', value: 'all' },
    { label: 'Articles', value: 'articles' },
    { label: 'Blogs', value: 'blogs' },
    { label: 'Reports', value: 'reports' },
  ]

  function handleOnClick(e) {
    e.preventDefault();
    const searchFilter = document.getElementById('search-filter').value;
    const searchQuery = document.getElementById('search').value;
    const searchUrl = `/search?filter=${searchFilter}&q=${searchQuery}`;
    navigateTo(searchUrl);
  }

  return (
    <form className='searchbar py-4 pb-8 flex flex-col gap-2 sm:flex-row'>
      <label htmlFor='search-filter' className='sr-only'>
        Search Filter
      </label>
      <select
        id='search-filter'
        name='search-filter'
        className='border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-blue-500'
      >
        {searchFilters.map((filter) => (
          <option key={filter.value} value={filter.value}>
            {filter.label}
          </option>
        ))}
      </select>

      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <input
        type='text'
        id='search'
        name='search'
        placeholder='Search'
        className='w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-blue-500'
      />

      <button
        type='submit'
        className='inline-flex justify-center py-2 px-4 border shadow-sm text-base font-medium rounded-md bg-slate-700 text-white hover:bg-sky-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-blue-500'
        onClick={handleOnClick}
      >
        Search
      </button>

    </form>
  )
}
