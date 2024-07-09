import React from "react";

const Computer = ({itemName, quantity, reserve}) => {
    return (
        <div className="ArtistDataList">
            <div className="ArtistName">Название: {itemName}</div>
            <div className="ArtistBirth">Количество: {quantity}</div>
            <div className="ArtistActivity">Резерв: {reserve}</div>
        </div>
    )
}

export default Computer