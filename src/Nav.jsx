import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <h1>Главная страница</h1>
            Главная страница
            <Link to="Legal.jsx">
            Юридическим лицам
            </Link>
        </div>
    )
}

export default Nav