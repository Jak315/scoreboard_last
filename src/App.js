import React from 'react'
import Header from './components/Header'
import AddPlayer from './components/AddPlayer'
import PlayerList from './components/Playerlist'
import { Provider } from './components/Context'
import './App.css';

class App extends React.Component {
    render() {
       
        return (
            <div className="scoreboard">
                <Provider >
                    <Header />
                    <PlayerList /> 
                    <AddPlayer/>
                </Provider>
            </div>
        )
    }
}

export default App;
