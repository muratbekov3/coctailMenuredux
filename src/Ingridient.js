 import React, { Component, useEffect, useState } from 'react'

// export default class Ingridient extends Component {
//     state={
//         data:[]
//     }

//     async componentDidMount() {
//         let name = this.props.match.params.ing
//         let resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + name)
//         let data = await resp.json()
    
//         this.setState({
//           data: data.ingredients[0]
//         })
//         console.log(data)
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Ingridient name {datast.strIngredient}</h1>
//                 <h3>Description</h3>
//                 <p>
//                     {datast.strDescription ?
//                        datast.strDescription : "Information undefined"
//                     }
//                 </p>
//             </div>
//         )
//     }
// }

function Ingridient(props){
    const[datas, setData] = useState([])
    useEffect(()=> {
        go()
    }, [])

    const go = async() =>{
        let name = props.match.params.ing
        let resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + name)
        let data = await resp.json()

        setData(data.ingredients[0])
    }
    return (
        <div>
            <h1>Ingridient name {datas.strIngredient}</h1>
            <h3>Description</h3>
            <p>
                {datas.strDescription ?
                   datas.strDescription : "Information undefined"
                }
            </p>
        </div>
    )

}
export default Ingridient


