import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
    static defaultProps = {
        country: 'us',
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
        this.props.setProgress(10);
        console.log("Hello i am a constructor from News Component")
        this.state = {
            articles: [],
            page: 1,
            loading: false,
            totalResults:0,
            apiKey:'a70c1839ba1c41c5b29461feee78b4af&page'
        
        }
        document.title=`Ленин News-${this.capitalizeFirstLetter(this.props.category)}`;
        this.props.setProgress(100);
    }
        capitalizeFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      
    
    async updateNews() {
        this.props.setProgress(10);
        console.log("CDM");
        const  url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(30);   
     let data = await fetch(url);
        let parsedData = await data.json();
        console.log("This is parsed Data:"+parsedData);
        this.props.setProgress(70);
        this.setState({ articles: parsedData.articles,
                        totalResults:parsedData.totalResults})
        this.props.setProgress(100);
    }
    async componentDidMount()
    {
       this.updateNews();
    }
    fetchMoreData = async () => {
        this.props.setProgress(10);
        this.setState({page:this.state.page+1}); 
        console.log("CDM");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a70c1839ba1c41c5b29461feee78b4af&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(30);
        let data = await fetch(url);
        let parsedData = await data.json();
        this.props.setProgress(70);
        console.log(parsedData);
        this.props.setProgress(100);

        this.setState({ articles: this.state.articles.concat(parsedData.articles),
            totalResults:parsedData.totalResults})

   };
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
                <InfiniteScroll
                  dataLength={this.state.articles.length}
                  next={this.fetchMoreData}
                  hasMore={this.state.articles.length!==this.state.totalResults}
                  loader={<h4>Loading...</h4>}
                  />
                  <div className="container">
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.title : ""} 
                            imageURL={!element.urlToImage ? "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" : element.urlToImage} 
                            newsURL={element.url}  author={element.author?element.author:element.source.name} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    })}
                </div>
                </div>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" onClick={this.HandlePrevClick} className="btn btn-dark">&larr;Previous</button>
                    <button type="button" onClick={this.HandleNextClick} className="btn btn-dark">Next&rarr;</button>
                </div> */}
              
            </div>

        )
    }
}

export default News
