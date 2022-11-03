import React from 'react';

import "./Box.css";

export const Box = ({ value, onClick }) => {
    const style = value === "A" ? "box A" : "box B";

    return (
        <button className={style} onClick={onClick}>{value}</button>
    )
}
