import React from 'react'
import Player from './components/Player'
import Header from './components/Header'
import AddPlayer from './components/AddPlayer'
import './App.css';

class App extends React.Component {

    state = {
        players: [
            {
                name: 'Enkhtuvshin',
                score: 0,
                id: 1
            },
            {
                name: 'Dulam',
                score: 0,
                id: 2
            },
            {
                name: 'Jambal',
                score: 0,
                id: 3
            },
            {
                name: 'Jambal1',
                score: 0,
                id: 4
            },
            {
                name: 'Jambal2',
                score: 0,
                id: 5
            }
        ]
    }

    lastPlayerID = this.state.players.length - 1
    playersId = this.state.players[this.lastPlayerID].id

    changeScore = (delta, index) => {
        this.setState(prevState => {
            const updatedPlayers = [...prevState.players]
            const updatedPlayer = { ...updatedPlayers[index] }

            updatedPlayer.score += delta

            updatedPlayers[index] = updatedPlayer

            return {
                players: updatedPlayers
            }
        })
    }

    removePlayer = (paraID) => {
        this.setState(prevState => {
            return {
                players: prevState.players.filter(p => p.id != paraID)
            }
        })
    }

    handleAddPlayer = (name) => {
        this.setState({
            players: [
                ...this.state.players,
                {
                    name: name,
                    score: 0,
                    id: this.playersId += 1
                }
            ]
        })
    }
    topScore = (score) => {
        this.setState({
            highscore: 10
        })
    }


    render() {
        return (
            <div className="scoreboard">

                <Header
                    title='Scoreboard'
                    totalPlayers={this.state.players.length}
                    players={this.state.players}
                />
                {this.state.players.map((player, index) =>
                    <Player
                        name={player.name}
                        score={player.score}
                        key={player.id}
                        id={player.id}
                        index={index}
                        removePlayer={this.removePlayer}
                        changeScore={this.changeScore}
                        topScore={this.topScore}
                    />
                )}
                <AddPlayer addPlayer={this.handleAddPlayer} />
            </div>
        )
    }
}

export default App;
