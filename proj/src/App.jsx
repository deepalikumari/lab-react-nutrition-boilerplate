import React from 'react'
import './App.css'
import  Diet from './components/diet.jsx'
import food from "C:/Users/ASUS/Desktop/58-react/lab-react-nutrition-boilerplate/resources/FoodData.js";



export default class App extends React.Component {
  constructor(){
    super()
    this.state={

      value:" ",
      newArr:food
    }
    
  }
  render() {
    let {newArr}=this.state
    let Change=(e)=>{
      let filteredData=food.filter((el)=>el.name.includes(e.target.value))
      this.setState({newArr:filteredData})
    }
    return (
      <>
      <div>
        <input type="text" onChange={Change} id='search' placeholder='Search Food' />
      </div>
      {newArr.map((el,i)=><Diet key={i} {...el}/>)}
      
      </>
    )
  }
}