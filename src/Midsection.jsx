import "./css/Midsection.css";
import pic1 from "./assets/images/pic1.jpeg";
import pic2 from "./assets/images/pic2.jpeg";
import pic3 from "./assets/images/pic3.jpeg";
import pic4 from "./assets/images/pic4.jpeg";
import pic5 from "./assets/images/pic5.jpeg";
import pic6 from "./assets/images/pic6.jpeg";
import pic7 from "./assets/images/pic7.jpeg";
import pic8 from "./assets/images/pic8.jpeg";
import { useMemo, useEffect, useState, useCallback } from "react";
import Mobilemidsec from "./mobilemidsec";
import First from "./firsttype";
import Second from "./secondtype";
import Third from "./thirdtype";
import { articles } from "./js/articles";
import { newArticles } from "./js/loadarticles";
import { generateGridMob } from "./mobilemidsec";
export default function Midsection() {
  const [load,setLoad]= useState(false);
  const [mobWidth,setMobWidth] = useState(false);
  const imgArr=useMemo(()=>
  {
    if(load) return[pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8]
    else return[pic1,pic2,pic3,pic4,pic5]
  },[load]);
  
  const grid=useMemo(()=>
  {
    if(load) {
       if(!mobWidth)  return generateGrid([...articles,...newArticles],imgArr)
       else return generateGridMob([...articles,...newArticles],imgArr)
    } 
    else {
      if(!mobWidth)  return generateGrid(articles,imgArr)
      else return generateGridMob(articles,imgArr)
   } 
  },[load,mobWidth]);
  
  const loadMore= useCallback(()=>{
      setLoad(true);
  },[]);

  const loadLess= useCallback(()=>{
    setLoad(false);
   },[]);
  
   useEffect(()=>{
    if(window.innerWidth >= 600) setMobWidth(false);
    else setMobWidth(true);
},[])

  useEffect(()=>{
    let img=document.querySelectorAll(".img-container");
    let wrap=document.querySelectorAll(".wrap");
    const observer1= new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
          if(entry.isIntersecting){
            entry.target.style.transform="translateX(0)";
          }
      })

    },{threshold:0})

   img.forEach((el)=>{
     observer1.observe(el);
   })

   wrap.forEach((el)=>{
     observer1.observe(el);
   })
   
    return ()=> observer1.disconnect();

  },[load,mobWidth])


  return (
    <>
      <div className="build-banner">
        <div>Let's build something great</div>
      </div>
      {!mobWidth ? (
        <div className="grid-container" id="grid-container">
            <div className="grid" key="grid">
                {grid}
            </div>
          
            {load && (<div className="load-less" key="load-less">
              <button onClick={()=>loadLess()}>Load Less</button>
            </div>)}
           
            {!load && (
                <div className="load-more" key="load-more">
              <button onClick={()=>loadMore()}>Load More</button>
            </div> )}
            
        </div>
      ) : (
        <Mobilemidsec load={load} loadMore={loadMore} loadLess={loadLess} grid={grid}/>
      )}
    </>
  );
}


export function generateArticleArr(articles){
  console.log(articles)
  return(
    articles.map((article,ind)=>{
      console.log(article)
        if(article.type==="first") return <First key={ind} article={article}/>
        else if(article.type==="second") return <Second key={ind} article={article}/>
        else if(article.type==="third") return <Third  key={ind} article={article}/>
    })

  )
}


function generateGrid(articles,imgArr){
      const articleArr=generateArticleArr(articles);
      console.log(articleArr)
      return(
        articleArr.map((articleJSX,ind)=>{
             if(ind%2){
                return(
                  <>
               {articleJSX}
              <div className="img-container r" key={`img-container-${ind}`}>
                <div className="img-text">
                  {articles[ind].imgText}
                </div>
                <img src={imgArr[ind]} alt="no_img" />
              </div>
                  </>
                )
             }
             else{
              return(
              <>
              <div className="img-container l" key={`img-container-${ind}`}>
              <div className="img-text">
                 {articles[ind].imgText}
              </div>
              <img src={imgArr[ind]} alt="no_img" />
            </div>
            {articleJSX}
              </>

              )
  
             }
        })
      
      )
}