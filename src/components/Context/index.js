import { render } from "@testing-library/react";
import React from "react";

const ScoreboardContex = React.createContext()

export class Provider extends React.Component {

    state = {
        players: [
            {
                name: 'Enkhtuvshin',
                score: 0,
                id: 1,
                winner: ""
            },
            {
                name: 'Dulam',
                score: 0,
                id: 2,
                winner: ""
            },
            {
                name: 'Jambal',
                score: 0,
                id: 3,
                winner: ""
            },
            {
                name: 'Jambal1',
                score: 0,
                id: 4,
                winner: ""
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
    editName = (name, index) => {
        this.setState(prevState => {
            const updatedPlayers = [...prevState.players]
            const updatedPlayer = { ...updatedPlayers[index] }
            updatedPlayer.name = name
            updatedPlayers[index] = updatedPlayer
            return {
                player: updatedPlayers
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
    highScore = () => {
        let playerscore = this.state.players.map(element => element.score)
        let maxscore = Math.max(...playerscore)
        return maxscore
    }
    render() {
        const maximumScore = this.highScore()
        return (
            <ScoreboardContex.Provider value={{
                players: this.state.players,
                actions: {
                    handleAddPlayer: this.handleAddPlayer,
                    editName: this.editName,
                    removePlayer: this.removePlayer,
                    changeScore: this.changeScore,
                    maximumScore: maximumScore
                }
            }}>
                {this.props.children}
            </ScoreboardContex.Provider >
        )
    }
}
export const Consumer = ScoreboardContex.Consumer;