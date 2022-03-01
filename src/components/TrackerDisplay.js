import {useContext} from 'react';
import PieChart from './PieChart';
import UserContext from '../context/UserContext';

const TrackerDisplay = ({glasses}) => {

    const user = useContext(UserContext);
        console.log(user)

    return (
        <>
            <p>{user.name}'s daily goal: {user.goal}</p>
            <p>Glasses drunk: {glasses}</p>
            <PieChart glasses={glasses} goal={user.goal} />
            { glasses >= user.goal ? "Goal reached! 🥳" : null }
            <br></br>
        </>
    )
}

export default TrackerDisplay;
