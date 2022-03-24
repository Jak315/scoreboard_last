import React from "react";
import Player from "./Player";
import { Consumer } from "./Context";

const PlayerList = () => {
    return (
        <Consumer>
            {({ players, maximum, actions }) => {
                return (
                    <>
                        {players.map((player, index) =>
                            <Player
                                {...player}
                                key={player.id}
                                index={index}
                                editName={actions.editName}
                                maximum={(player.score === maximum)}
                            />
                        )}
                    </>
                )
            }}
        </Consumer>
    )
}
export default PlayerList