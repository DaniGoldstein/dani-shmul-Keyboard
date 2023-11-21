
import styles from './bodyStyle.module.css'
import { Book } from './components/Book';
import {Clock} from './hooks'
import {useState} from'react';


function App1(){

const Books=[
  {title:"המפלצת", author:"ג'ול וורן", likes:0, onShelf:"true"},
  {title:"הארי פוטר", author:"ג'ול וורן", likes:0, onShelf:"true" },
  {title:"האשה בחלון ", author:"א.ג'. פין ", likes:0, onShelf:"true"},
 
];



const addLike=(e)=>{
  console.log(e.target.innerText);
  e.target.innerText = parseInt(e.target.innerText) + 1;  ///setLikes(likes+1); 
  //if(likes>=10){setStyle({backgroundColor:"pink"})}
  Books[e.target.index] = e.target.innerText;
}


return(

    <div className={styles.pageContainer} >

    
     <Clock/>


   
     <h1 style={{textAlign:"center"}}>צומת ספרים</h1>

     <div className={styles.allBooks}>
     <Book title={Books[0].title} author={Books[0].author} index={0} likes={Books[0].likes} onLike={addLike}/>
     <Book title={Books[1].title} author={Books[1].author}   likes={Books[0].likes}/>
     <Book title={Books[2].title} author={Books[2].author}   likes={Books[0].likes}/>
     </div>
    </div>
)




}
export default App1;