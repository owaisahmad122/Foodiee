import React, { Suspense, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { ADD, search } from '../redux/actions/action';
import CardsData from './CardsData';
import "./style.css";
import { Outlet } from 'react-router-dom';
const Cards = () => {
  const [data, setData] = useState(CardsData);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const send = (e) => {
    //console.log(e);
    dispatch(ADD(e));
  };
  const handleChange = (e) => {
    //console.log(e.target.value);
    //dispatch(setSearch(e))
    ;
  };
  const searchComponent = ({ searchTerm, setSearchTerm }) => (
    <div>
      <input
        type="text"
        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Add to Cart Projects</h2>

      <div className="row d-flex justify-content-center align-items-center">

        {
          data.map((element, id) => (
            // (console.log(data)),
            <Card key={element.id} style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
              <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} className="mt-3" />
              <Card.Body>
                <Card.Title>{element.rname}</Card.Title>
                <Card.Text>
                  Price: {element.price}
                </Card.Text>
                <div className="button_div d-flex justify-content-center">
                  <Button
                    variant="primary"
                    onClick={() => send(element)}
                    className='col-lg-12'>
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))
        }

      </div >
      
        
    </div >

  );
};

export default Cards;