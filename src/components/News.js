import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import Pic from './images/shivam.jpg';
import InfiniteScroll from "react-infinite-scroll-component";


const  News=(props)=> {
  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const[totalResults,setTotalResults]=useState(0);
    
        
        // document.title=props.category;
    

 
    // handlePrevious=async()=>{
    //     let url=`https://newsapi.org/v2/top-headlines?country=in&country=${props.country}&category=${props.category}&apiKey=1ea4f3c33c484b92b957f097b0d42159&page=${this.state.page-1}&pageSize=${props.PageSize}`;
    //     this.setState({
    //         loading:true
    //     })
    //     let dat=await fetch(url);
    //     let data=await dat.json();
    //     this.setState({
    //         articles:data.articles,
    //         page:this.state.page-1,
    //         cancel:0,
    //         loading:false

    //     })
    // }
//     handleNext=async()=>{
//         if(this.state.page+1>Math.ceil(this.state.totalResults/props.PageSize)){
// this.setState({
//     cancel:1
// })
//         }
//         else{
//         let url=`https://newsapi.org/v2/top-headlines?country=in&country=${props.country}&category=${props.category}&apiKey=1ea4f3c33c484b92b957f097b0d42159&page=${this.state.page+1}&pageSize=${props.PageSize}`;
//         this.setState({
//             loading:true
//         })
//         let dat=await fetch(url);
//         let data=await dat.json();
//         this.setState({
//             articles:data.articles,
//             page:this.state.page+1,
//             cancel:0,
//             loading:false
//         })
//     }
// }
const capitalizeF=(s)=>
{
    return s[0].toUpperCase() + s.slice(1);
}
const fetchMoreData = async() => {
    let url=`https://newsapi.org/v2/top-headlines?country=in&country=${props.country}&page=${page+1}&category=${props.category}&apiKey=d1d1625b86614f44ae7a72788c05baec&pageSize=${props.PageSize}`;
            setLoading(true)
            let dat=await fetch(url);
            let data=await dat.json();
            setArticles(articles.concat(data.articles));
            // setTotalResults(data.totalResults);
            setLoading(false)
            setPage(page+1)
            // this.setState({
            //     articles:this.state.articles.concat(data.articles),
            //     page:this.state.page+1,
            //     cancel:0,
            //     loading:false
            // })
  };
    useEffect(()=>{

    const fetching =async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&country=${props.country}&category=${props.category}&apiKey=d1d1625b86614f44ae7a72788c05baec&pageSize=${props.PageSize}`;
        // this.setState({
        //     loading:true
        // })
        setLoading(true)
        let dat=await fetch(url);
        let data=await dat.json();
        setArticles(data.articles);
        setTotalResults(data.totalResults);
        setLoading(false);
        
        // this.setState({
        //     articles:data.articles,
        //     totalResults:data.totalResults, //we do not know total results as we are getting it from the net therefore it will not be passes as props and will be obtained afterwards only//
        //     loading:false
        // })
    }
    fetching();
    },[])
    
        return (
            
                <>
                
                
                {/* <div className="container" align="center">
               {this.state.loading&&<Spinner/>}
                </div> */}
                 <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!=totalResults}
          loader={<Spinner/>}
        ><div className="container">
            <center style={{marginTop:"90px"}}><h2 className="my-5">Top {capitalizeF(props.category)} headlines</h2></center>
           {loading &&<Spinner/>}
                <div className="row my-4" >
                
                {articles.map((e)=>{
                   return <div className="col-md-4 " key={e.url}>
                   <NewsItem newsUrl={e.url} title={e.title?e.title.slice(0,45):""} description={e.description?e.description.slice(0,60):""} imageUrl={e.urlToImage?e.urlToImage:{Pic}} date={e.publishedAt?new Date(e.publishedAt).toGMTString():"Date not Available"} author={e.author?e.author:"Anonymous"} source={e.source.name}/>
               </div>
            
                })}
                </div>
                    
               </div>
               </InfiniteScroll>
            
            
            {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>Previous</button>
            <button disabled={this.state.cancel==1} type="button" className="btn btn-dark" onClick={this.handleNext}>Next</button>
            </div>
            </div> */}
            </>
        )
    }

export default News
