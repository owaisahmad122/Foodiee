import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav'
import Menu from '@mui/material/Menu';
import { NavLink, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { DLT } from '../redux/actions/action';
import { ADD, Del } from '../redux/actions/action';

const Header = () => {

    const [price, setPrice] = useState(0);

    const getdata = useSelector((state) => state.cartreducer.carts);

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const dlt = (id) => {
        dispatch(DLT(id))
    }

    const total = () => {
        let price = 0;
        getdata?.map((ele, k) => {
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
    };

    const Logout = () => {
        window.sessionStorage.login = false;
        Navigate("/login");
        window.location.reload();
    }
    const send = (e) => {
        //console.log(e);
        dispatch(ADD(e));
      };
      const send1 = (e) => {
        //console.log(e);
        dispatch(Del(e));
      };

    useEffect(() => {
        total();
    }, [total])
    //    const [isLoggedout,setLoggedout]=useState(true);
    //    const handleLoginClick =() =>{
    //     setLoggedIn(true)
    //  }

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container>
                    {/* //<NavLink to="/" className="text-decoration-none text-light mx-3">Add to Cart</NavLink> */}
                    <img src='/Image/food6.jpg' style={{ width: "30px", borderRadius: "50%",margin: "10px" }} />
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light" style={{ marginRight: "10px" }}>Home</NavLink>
                        {
                            window.sessionStorage.getItem("login") == 'true' ? (
                                <>
                                    <NavLink to="/Product" className="text-decoration-none text-light" style={{ marginRight: "10px" }}>Product</NavLink>
                                    <NavLink to="/employee/listing" className="text-decoration-none text-light" style={{ marginRight: "10px" }}>Employee</NavLink>
                                    <NavLink to='/' onClick={() => { Logout() }} className="text-decoration-none text-light" style={{ marginRight: "10px" }}>Logout</NavLink>
                                </>
                            ) : (
                                <div>
                                    <NavLink to='/login' className="text-decoration-none text-light" style={{ marginRight: "10px" }}>Login</NavLink>
                                    
                                </div>
                            )
                        }
                    </Nav>

                    {
                        window.sessionStorage.getItem("login") == 'true' ? (
                            <Badge badgeContent={getdata?.length} color="primary"
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <span className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}>
                                    cart<img src='/Image/cart1.jfif' style={{ width: "30px", borderRadius: "50%" }} />

                                </span>
                            </Badge>
                        ) : (<></>)
                    }

                </Container>


                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getdata?.length ?
                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Restaurant Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata?.map((e) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                                    <img src={e.imgdata} style={{ width: "5rem", height: "5rem" }} alt="" />
                                                                </NavLink>
                                                            </td>
                                                            <td>
                                                                <p><span>{e.rname}</span></p>
                                                                <p><span>Price : ₹{e.price}</span></p>
                                                                <p><span>Quantity : {e.qnty}</span></p>
                                                                <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                                    <i className='fas fa-trash smalltrash'></i>
                                                                </p>
                                                                <p><button onClick={() => send(e)}>+</button><button onClick={() => send1(e)}>-</button> </p>
                                                            </td>

                                                            <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                                <i className='fas fa-trash largetrash'><img src='/Image/delete.png' style={{ width: "30px", borderRadius: "50%" }} /></i>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                        <p className='text-center'>Total :₹ {price}</p>
                                    </tbody>
                                </Table>
                            </div> :

                            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                                <i className='fas fa-close smallclose'
                                    onClick={handleClose}
                                    style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                                <p style={{ fontSize: 22 }}>Your carts is empty</p>
                                <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                            </div>
                    }

                </Menu>
            </Navbar>
        </>
    )
}

export default Header