import React from 'react'

export default function NewsList({ newsResponse }) {
  return (
    <>
      {newsResponse.results &&
        newsResponse.results.map((article) => {
          const date = new Date(article.published_at)
          return (
            <article key={article.id}
              className='p-8 mb-8 bg-white border-white border-2 rounded-lg shadow-lg hover:cursor-pointer hover:translate-x-1 hover:border-slate-800 transition ease-linear'
            >
              <a href={article.url} target='_blank'>
                <h2 className='md:text-2xl text-lg font-medium mb-4'>{article.title}</h2>
                <p className='md:text-lg font-normal mb-4'>{article.summary}</p>
                <div className='flex flex-col gap-2 sm:flex-row sm:gap-4'>
                  <p className='text-sm font-normal text-slate-600 border p-1 px-2 rounded-2xl w-fit'>{date.toLocaleDateString()}</p>
                  <p className='text-sm font-normal text-slate-600 border p-1 px-2 rounded-2xl w-fit'>{article.news_site}</p>
                </div>
              </a>
            </article>
          )
        })
      }
    </>
  )
}
