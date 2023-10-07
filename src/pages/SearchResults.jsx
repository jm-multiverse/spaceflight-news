import { useEffect, useState } from 'react';
import { useNews } from '../contexts/NewsContext';
import { useSearchParams } from 'react-router-dom';
import NewsList from '../components/NewsList';
import Nav from '../components/Nav';
import SearchBar from '../components/SearchBar';


function SearchResults() {
  const { search } = useNews();
  const [searchResults, setSearchResults] = useState();
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('filter');
  const q = searchParams.get('q');

  useEffect(() => {
    async function getSearchResults() {
      const results = await search(filter, q);
      console.log(results)
      setSearchResults(results);
    }
    getSearchResults();
  }, []);

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
    <>
      <Nav />
      <main className='padding-x py-4 max-container'>
        <section className='py-4'>
          <SearchBar />
        </section>
        <h1 className='py-4 text-2xl md:text-3xl font-semibold'>
          Search results for "{q}"
        </h1>
        {searchResults ? <RenderResults /> : <span className='text-center block text-gray-400'>Loading...</span>}
      </main>
    </>
  );
}

export default SearchResults;
