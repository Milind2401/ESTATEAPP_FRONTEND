import { Link } from "react-router-dom";
import "./card.scss";
import { useContext, useState } from "react";
import {AuthContext} from '../../context/AuthContext'
import apiRequest from "../../lib/apiRequest";
import { redirect, useLoaderData, useNavigate } from "react-router-dom";


function Card({ item}) {
  
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">₹ {item.price}/-</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;