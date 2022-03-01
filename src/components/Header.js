import { useContext } from "react";
import UserContext from "../context/UserContext";

const Header = ({name}) => {
    const user = useContext(UserContext);

    return (
        <>
            <h2>Hello {user.name} 👋</h2>
        </>
    )
}

export default Header;
