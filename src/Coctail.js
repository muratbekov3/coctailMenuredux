    import React, { useState, useEffect } from 'react'
    import {Link} from 'react-router-dom'

function Coctail(props ){

   const[datas, setData] = useState([])

   useEffect(()=>{
       go()
   }, [])

   const go = async() =>{
    let name = props.match.params.name
    let resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name)
    let data = await resp.json()

    setData(data.drinks[0])
   }
   return(
    <div>
        <div className='main'>
                     <h1>{datas.strDrink}</h1>
                     <img style={{width:'500px'}} src={datas.strDrinkThumb}/>
                     <p>Instruction: {datas.strInstructions}</p>
                     <h6>Ingridients</h6>
                    
                     <ul> 
                     <div className='b'>
                         <Link to={'/ingridient/' + datas.strIngredient1} className='link'><li>{datas.strIngredient1}</li></Link>
                         <Link to={'/ingridient/' + datas.strIngredient2}className='link'><li>{datas.strIngredient2}</li></Link>
                         <Link to={'/ingridient/' + datas.strIngredient3}className='link'><li>{datas.strIngredient3}</li></Link>
                         <Link to={'/ingridient/' + datas.strIngredient4}className='link'><li>{datas.strIngredient4}</li></Link>
                         </div>
                     </ul>
                   
                     <h6>Measure</h6>
                     <ul> 
                         <li>{datas.strMeasure1}</li>
                         <li>{datas.strMeasure2}</li>
                         <li>{datas.strMeasure3}</li>
                         <li>{datas.strMeasure4}</li>
                     </ul>
                    </div>
               </div>
)

}



export default Coctail






// export default class Coctail extends Component {

//     // state={
//     //     data:[]
//     // }
    

//     async componentDidMount() {
//         let name = this.props.match.params.name
//         let resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name)
//         let data = await resp.json()
    
//         this.setState({
//           data:data.drinks[0]
//         })
//         console.log(data)
//     }
//     render() {
//         return (
//             <div>
//                 <div className='main'>
//                 <h1>{datast.strDrink}</h1>
//                 <img style={{width:'500px'}} src={datast.strDrinkThumb}/>
//                 <p>Instruction: {datast.strInstructions}</p>
//                 <h6>Ingridients</h6>
                
//                 <ul> 
//                 <div className='b'>
//                     <Link to={'/ingridient/' + datast.strIngredient1} className='link'><li>{datast.strIngredient1}</li></Link>
//                     <Link to={'/ingridient/' + datast.strIngredient2}className='link'><li>{datast.strIngredient2}</li></Link>
//                     <Link to={'/ingridient/' + datast.strIngredient3}className='link'><li>{datast.strIngredient3}</li></Link>
//                     <Link to={'/ingridient/' + datast.strIngredient4}className='link'><li>{datast.strIngredient4}</li></Link>
//                     </div>
//                 </ul>
               
//                 <h6>Measure</h6>
//                 <ul> 
//                     <li>{datast.strMeasure1}</li>
//                     <li>{datast.strMeasure2}</li>
//                     <li>{datast.strMeasure3}</li>
//                     <li>{datast.strMeasure4}</li>
//                 </ul>
//                 </div>
//             </div>
//         )
//     }
// }
