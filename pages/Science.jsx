import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import NewsItem from '@/Components/NewsItem'

const General = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
      const getArticles = async () => {
        const response = await Axios.get("https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=4880c280dfe1406da8f39eed721f85fc")
        console.log(response)
        setArticles(response.data.articles)
      }
      getArticles()
    }, [])
  return (
    <div>
        {articles.map(article => {
            return (
                <div>
                  <h1 className='text-2xl font-bold text-center pt-3 underline'>
                        Latest News
                    </h1>
                    <NewsItem
                        title = {article.title}
                        description = {article.description}
                        url = {article.url}
                        urlToImage = {article.urlToImage}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default General