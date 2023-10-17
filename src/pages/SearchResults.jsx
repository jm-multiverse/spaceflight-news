import { useEffect, useState } from 'react';
import { useNews } from '../contexts/NewsContext';
import { useSearchParams } from 'react-router-dom';
import NewsList from '../components/NewsList';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import LoadingSpinner from '../components/LoadingSpinner';
import styles from '../styles';


function SearchResults() {
  const { search } = useNews();
  const [searchResults, setSearchResults] = useState(null);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('filter');
  const q = searchParams.get('q');

  useEffect(() => {
    async function getSearchResults() {
      setSearchResults(null);
      const results = await search(filter, q);
      setSearchResults(results);
    }
    getSearchResults();
  }, [filter, q]);

  function Loading() {
    return (
      <div className='flex flex-col pt-20 justify-center items-center'>
        <h1 className='text-2xl font-semibold'>Getting Results...</h1>
        <br />
        <LoadingSpinner />
      </div>
    )
  }

  function RenderResults() {

    if (!searchResults.hasResults) {
      return <span className='text-center block text-gray-400'>No results found.</span>
    }

    return (
      <>
        {searchResults.articles && <NewsList newsResponse={searchResults.articles} />}
        {searchResults.blogs && <NewsList newsResponse={searchResults.blogs} />}
        {searchResults.reports && <NewsList newsResponse={searchResults.reports} />}
      </>)
  }

  return (
    <div className='search-results bg-constellation h-full'>
      <Navbar />
      <main className={`${styles.pageWidth}`}>
        <SearchBar />
        <h1 className='py-4 text-2xl md:text-3xl font-semibold'>
          Search results for "{q}" in {filter}
        </h1>
        {/* {console.log(searchResults)} */}
        {searchResults ? <RenderResults /> : <Loading />}
      </main>
    </div>
  );
}

export default SearchResults;
