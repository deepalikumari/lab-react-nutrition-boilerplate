import React, { Component } from 'react'
import "./diet.css"
export default class diet extends Component {
    constructor(){
        super()
        this.state={
            count_n:0,
            count_c:0
        }
    }

  render() {
    let {count_n,count_c}=this.state
    let Quantity=(e)=>{
        this.setState({count_n:e.target.value})
    }
    let Calories=()=>{
        this.setState({count_c:this.props.cal* count_n})
    }
    let Reset=()=>{
        this.setState({count_n:0})
        this.setState({count_c:0})
    }
    return (
        <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.img}  />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
            <strong className='name'>{this.props.name}</strong> <br />
                <small className='cal'>{this.props.cal}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" onChange={Quantity} placeholder='Enter the number' />
              </div>
              <div className="control">
                <button className="button is-info" onClick={Calories}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
        <div className='name'>
            <h2>{count_n} {this.props.name} = {count_c} Calories</h2>
        </div>
        <div>
            <button onClick={Reset}>Reset</button>
        </div>
      </div>
    )
  }
}
