import { useState, useEffect } from "react";


const useSwitch = (input) => {
    const [data, setData] = useState(input);
    const flipSwitch = () => {
        setData(!data)
    }

    return [data, flipSwitch];
}

export default useSwitch;