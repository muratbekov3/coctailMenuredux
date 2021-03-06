import React, {useState, useEffect} from 'react'
import All from './All'

function App  () {

  const [data,setData] = useState(null)

  useEffect(() => {
    go()
  }, [])
  
  const go = async ()=>{
    let resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    let data = await resp.json()
    setData(data.drinks)
  }
  const search=(val)=>{
    let name = val
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a='
    if(name=== 'Non_Alcoholic'){
      find(name, url)
    }else if(name === 'Alcoholic'){
      find(name, url)
    }else{
      go()
    }
  }

  const find = async (name, url)=>{
    let resp  = await fetch (url+name)
    let data = await resp.json()
    setData(data.drinks)
  }

  const filterByName= async (val)=>{
    if(val !== ''){
      let resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+val)
      let data = await resp.json()
      setData(data.drinks)
    }
    else{
      go()
    }

  }
    return (
     
      <div>
        <div className='main'>
        <h1>Coctails</h1>
      <div className='input'>
        <input 
            placeholder="Search coctail by name"
            type="text"
            onChange={(e)=>{
              filterByName(e.target.value)
            }}
         />

        <select onChange={(e)=>{
          search(e.target.value)
        }}>
          <option value="Coctail">All</option>
          <option value="Non_Alcoholic">Non-Alc</option>
          <option value="Alcoholic">Alc</option>
        </select>
        </div>
        <div className='cards'>
        {data ? 
          data.map(elem=>{
            return (
              <All coctail = {elem}/>
            )
          }):null
        }
        </div>
        </div>
      
      </div>

    )
  
}
export default App
