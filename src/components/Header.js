import React from 'react'
import Stats from './Stats'
import Stopwatch from './Stopwatch'
import PropTypes from 'prop-types'

const Header = () => {
    return (
        <header>
            <Stats />
            <h1>Scoreboard</h1>
            <Stopwatch />
        </header>
    )
}
Header.Proptype = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        score: PropTypes.string,
        id: PropTypes.number
    }))
}
export default Header