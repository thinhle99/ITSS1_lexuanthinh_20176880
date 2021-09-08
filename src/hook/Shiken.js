import React, { useState } from "react";

function Shiken() {
    const [list, setList] = useState(["Huyen", "Hoa", "Hung", "Long"]);
    const [index, setIndex] = useState(0);

    const add = (text, e) => {
        e.preventDefault();
        if (text !== "") setList([...list, text]);
    };

    return [list, index, add];
}

export default Shiken;