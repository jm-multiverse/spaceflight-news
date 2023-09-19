import { useNews } from '../contexts/NewsContext'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';

export default function Articles() {
  const { articles } = useNews()
  console.log(articles)

  function articleCard(article, key) {
    return (
      <article className='article-card' key={key}>
        <div className='img-box'>
          <img src={article.image_url} alt={article.title} />
        </div>
        <div className='article-text'>
          <h3>{article.title}</h3>
          <p>{article.summary}</p>
          <p>{article.news_site}</p>
          <p>{article.published_at}</p>
        </div>

      </article>
    )
  }

  function Card(article, key) {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={article.image_url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {article.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {article.summary}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }

  return (
    <section className='article-section'>
      <h2>Articles</h2>
      <div className='article-list'>
        {articles.results && articles.results.map(a => articleCard(a, a.id))}
      </div>

    </section>
  )
}
