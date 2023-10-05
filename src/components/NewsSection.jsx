import React from 'react'
import { Link } from 'react-router-dom'

export default function NewsSection({ title, newsResponse, href, noBrowse }) {

  return (
    <section className='bg-inherit'>
      <Link
        className={'flex w-fit items-baseline gap-6 py-3 my-4 ' +
          (!noBrowse && 'group hover:translate-x-1 transition-all ')}
        to={href}
      >
        <h2 className='text-2xl md:text-3xl font-semibold'>
          {title}
        </h2>
        {!noBrowse &&
          <span className='text-xl md:text-2xl font-normal text-transparent  transition-all duration-150 group-hover:text-slate-600 group-focus:text-slate-600'>Browse all</span>
        }
      </Link>
      <div>
        {newsResponse.results &&
          newsResponse.results.map((article) => {
            const date = new Date(article.published_at)
            return (
              <article key={article.id}
                className='p-8 mb-8 bg-white border-white border-2 rounded-lg shadow-lg hover:cursor-pointer hover:translate-x-2 hover:border-slate-800 transition ease-linear'
              >
                <a href={article.url} target='_blank'>
                  <h2 className='md:text-2xl font-medium mb-4'>{article.title}</h2>
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
      </div>
    </section>
  )
}
