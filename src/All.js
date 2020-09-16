import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'

function All (props){
    return(
        <div>
            <Link to={'/coctail/'+props.coctail.strDrink} className='a'>
                
                <img style={{width:'250px'}} src={props.coctail.strDrinkThumb}/>
                <h4>{props.coctail.strDrink}</h4>
            
            
            </Link>
        </div>
    )
}

export default All