import React from 'react'

export default function Search() {
  // TODO: Add dropdown menu for search filters: All, Articles, Blogs, Reports
  const searchFilters = [
    { label: 'All', value: 'all' },
    { label: 'Articles', value: 'articles' },
    { label: 'Blogs', value: 'blogs' },
    { label: 'Reports', value: 'reports' },
  ]

  return (
    <section>
      <form className='flex'>
        <label htmlFor='search-filter' className='sr-only'>
          Search Filter
        </label>
        <select
          id='search-filter'
          name='search-filter'
          className='border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-blue-500 mr-2'
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
          className='ml-4 inline-flex justify-center py-2 px-4 border shadow-sm text-base font-medium rounded-md bg-sky-500 text-white hover:bg-sky-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-blue-500'
        >
          Search
        </button>

      </form>
    </section>
  )
}
