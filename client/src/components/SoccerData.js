import React from 'react';
import { Card } from 'semantic-ui-react';
import useLocalStorage from '../hooks/useLocalStorage';

const SoccerData = (props) => {
    const { data } = props;
    const[value, setValue] = useLocalStorage("key", data);

    return (
        <div className = "PlayerCards">
        <Card.Group>
            {value.map(player => {
                return(
                <Card key={player.id}>
                    <Card.Content>
                        <Card.Header>{player.name}</Card.Header>
                        <Card.Meta>{player.country}</Card.Meta>
                        <Card.Description>{player.searches}</Card.Description>
                    </Card.Content>
                </Card>
                );
            })}
        </Card.Group>
        </div>
    )
}

export default SoccerData;