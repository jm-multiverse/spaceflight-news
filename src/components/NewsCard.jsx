import React from 'react'

export default function NewsCard({ article }) {
  const date = new Date(article.published_at)
  return (
    <article key={article.id}
      className='mb-6 semitransparent-light p-2 border-slate-300 border-2 rounded-lg shadow-lg hover:cursor-pointer hover:border-slate-500 transition ease-linear hover:translate-x-1'
    >
      <a href={article.url} target='_blank' className='flex flex-row gap-4'>
        {/* <img src={article.image_url} className='w-100 object-cover rounded-t-md lg:rounded-l-md lg:rounded-t-none lg:w-60' /> */}
        <div className='p-4'>
          <h2 className='md:text-2xl text-lg font-medium mb-4'>{article.title}</h2>
          <p className='md:text-lg font-normal mb-4'>{article.summary}</p>
          <div className='flex flex-col gap-2 sm:flex-row sm:gap-4 mt-auto'>
            <p className='text-sm font-normal text-slate-600 border p-1 px-2 rounded-2xl w-fit'>{date.toLocaleDateString()}</p>
            <p className='text-sm font-normal text-slate-600 border p-1 px-2 rounded-2xl w-fit'>{article.news_site}</p>
          </div>
        </div>
      </a>
    </article>
  )
}
