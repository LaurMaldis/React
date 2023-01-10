import { useEffect, useState } from "react";
import "../css/Article.css"

function Article() {
    const [article, setArticle] = useState([]);
    const url = "https://midaiganes.irw.ee/api/list/972d2b8a"


    useEffect(() => {
        fetch(url)
         .then(res => res.json())
         .then(json => {
            setArticle(json || [])
        })
    }, []);


    return ( 
    <div>
        <div className="tekst">
            <h1>{article.title}</h1>
            <div className="intro" dangerouslySetInnerHTML={{__html: article.intro}} />
        </div>
        <div className="container">
            <img className="pilt" src="https://midaiganes.irw.ee/api/imgs/large/a3dac073.jpg" alt="" />
            <div className="bottomleft">Culpa ipsum tempor do laborum mollit</div>
        </div>
        <div className="tekst" dangerouslySetInnerHTML={{__html: article.body}} />
        <div className="taggike">{article.tags}</div>

    </div>
    )
};

export default Article;