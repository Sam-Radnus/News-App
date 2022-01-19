import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: PropTypes.string

    }
    static propTypes = {
        country: PropTypes.string,
        pageSizes: PropTypes.number,
        category: PropTypes.string
    }

    articles = []
    constructor(props) {
        super(props);
        console.log("Hello i am a constructor from News Component")
        this.state = {
            articles: [],
            page: 1,
            loading: false
        }
        document.title=`Ленин News-${this.capitalizeFirstLetter(this.props.category)}`;
    }
        capitalizeFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      
    
    async updateNews() {
        console.log("CDM");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a70c1839ba1c41c5b29461feee78b4af&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles,totalResults:parsedData.totalResults})

    }
    async componentDidMount()
    {
        console.log("CDM");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a70c1839ba1c41c5b29461feee78b4af&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles ,totalResults:parsedData.totalResults})
    }
    HandlePrevClick = async () => {
        console.log("previous Button was Clicked");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a70c1839ba1c41c5b29461feee78b4af&page=${this.state.page - 1}&pageSize=20`;
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalArticles })
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles
        // })
        this.setState({page:this.state.page-1});
        this.updateNews();
    }
    HandleNextClick = async () => {
        console.log("Next Button was Clicked");
        // if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        // }
        // else {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a70c1839ba1c41c5b29461feee78b4af&page=${this.state.page + 1}&pageSize=20`;
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     console.log(parsedData);
        //     this.setState({ articles: parsedData.articles })
        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parsedData.articles
        //     })
        // }
        this.setState({page:this.state.page+1});
        this.updateNews();
    }
    render() {
        console.log("render")
        return (
            <div className='container my-3'>
                <h1 className='text-center' style={{ margin: '15px 0px' }}>Ленин News-{this.capitalizeFirstLetter(this.props.category)}</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.title : ""} 
                            imageURL={!element.urlToImage ? "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" : element.urlToImage} 
                            newsURL={element.url}  author={element.author?element.author:element.source.name} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" onClick={this.HandlePrevClick} className="btn btn-dark">&larr;Previous</button>
                    <button type="button" onClick={this.HandleNextClick} className="btn btn-dark">Next&rarr;</button>
                </div>
            </div>

        )
    }
}

export default News
