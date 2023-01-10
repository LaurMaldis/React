import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/Article.css"

function SinglePage() {

    const {id} = useParams();
    const [article, setArticle] = useState([]);
    const url = "https://midaiganes.irw.ee/api/list?limit=500"
    const articleFound = article.find(element => element.id === id);

    useEffect(() => {
        fetch(url)
         .then(res => res.json())
         .then(json => {
            setArticle(json.list || [])
        })
    }, []);

    return ( 
      <div>
        {articleFound !== undefined &&
            <div>
                <div key={articleFound.id}>
                <div className="pilt">
                    <h1>{articleFound.title}</h1>   
                    <div dangerouslySetInnerHTML={{__html: articleFound.intro}} />
                </div>
                <div className="container">
                    <img className="pilt" src={articleFound.image.large} alt='pildike' /> 
                    <div className="bottomleft" dangerouslySetInnerHTML={{__html: articleFound.image.title}}></div> 
                </div>
                <div className="tekst" dangerouslySetInnerHTML={{__html: articleFound.body}} />
                <div className="taggike" dangerouslySetInnerHTML={{__html: articleFound.tags}}></div>  
            </div>
            </div>}
            
            {articleFound === undefined &&
            <div>
                Artiklit ei leitud!
            </div>}

      </div>
    );
}

export default SinglePage;