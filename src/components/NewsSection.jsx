import React from 'react'

export default function NewsSection({ title, newsResponse }) {

  return (
    <section className='bg-inherit rounded'>
      <a className='flex justify-start items-center gap-2 mt-10 mb-8' href="/">
        <h2 className='text-3xl font-semibold'>{title}</h2>
      </a>
      <div className='mb-8'>
        {newsResponse.results &&
          newsResponse.results.map((article) => {
            const date = new Date(article.published_at)
            return (
              <article key={article.id}
                className='p-8 mb-8 bg-white border-white border-2 rounded-lg shadow-lg hover:cursor-pointer hover:translate-x-1 hover:border-slate-800 transition ease-linear'
              >
                <a href={article.url} target='_blank'>
                  <h2 className='text-2xl font-medium mb-4'>{article.title}</h2>
                  <p className='text-lg font-normal mb-4'>{article.summary}</p>
                  <div className='flex gap-4'>
                    <p className='text-sm font-normal text-slate-600'>{date.toLocaleDateString()}</p>
                    <p className='text-sm font-normal text-slate-600'>{article.news_site}</p>
                  </div>
                </a>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}
