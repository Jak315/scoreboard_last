import React from 'react'
import Counter from './Counter'
import PropTypes from 'prop-types'

class Player extends React.Component{ 
''
    static propTypes ={
        changeScore: PropTypes.func
    }

   
    render(){
        return(
            <div className="player">
                
                <div className="player-name">
                    <button onClick={() => this.props.removePlayer(this.props.id)} className="remove-player">✖</button>
                    {this.props.name}
                </div>
                <Counter index={this.props.index} score= {this.props.score} changeScore = {this.props.changeScore}/>
            </div>
        )
    }
  }

export default Player