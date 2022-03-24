import React from 'react'
import { Consumer } from './Context'

const Stats = (props) => {

    return (
        <Consumer>
            {context => {
                const totalPlayers = context.players.length
                const totalPoints = context.players.reduce((total, player) => total + player.score, 0)
                return (
                    <table>
                        <tbody>
                            <tr>
                                <td>Total Players:</td>
                                <td>{totalPlayers}</td>
                            </tr>
                            <tr>
                                <td>Total Score:</td>
                                <td>{totalPoints}</td>
                            </tr>
                        </tbody>
                    </table>

                )
            }}
        </Consumer>
    )
}

export default Stats