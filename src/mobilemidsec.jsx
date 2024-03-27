import { generateArticleArr } from "./Midsection";

export default function Mobilemidsec({load,loadMore,loadLess,grid}) {
    return (
      <>
        <div className="grid-container-mob" id="grid-container">
          <div className="grid-mob">
            {grid}
          </div>
          {load && (<div className="load-less">
              <button onClick={()=>loadLess()}>Load Less</button>
            </div>)}
           
            {!load && (
                <div className="load-more">
              <button onClick={()=>loadMore()}>Load More</button>
            </div> )}
        </div>
      </>
    );
  }
  
  export function generateGridMob(articles,imgArr){
    const articleArr=generateArticleArr(articles);
   return(
       articleArr.map((articleJSX,ind)=>{
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
       })
   )
  
}
  