import brand_logo from './assets/logo.png' //brand logo
import './Stylesheets/App.css'
//icons
import { CiHeart } from "react-icons/ci";
import { SlBag } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

//routing
import { NavLink, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Women from './Pages/Women'
import Men from './Pages/Men'
import Kids from './Pages/Kids'
import Bag from './Pages/Bag'
import Favorites from './Pages/Favorites'
import SingleProduct from './Pages/SingleProduct'
import Error404 from './Pages/Error404'
import SignUp from './Pages/SignUp';
import Login from './Pages/Login'

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { val as setVal, search as setSearchVal, loggedIn } from './redux/shopReducer'

import { signOut } from 'firebase/auth';
import { auth } from './firebase';


function App() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const val = useSelector(state => state.shop.val)
  const searchVal = useSelector(state => state.shop.searchVal)
  const isLoggedIn = useSelector(state => state.shop.isLoggedIn)

  const handleSearchButton = () => {
    dispatch(setSearchVal(val))
    console.log(searchVal)
    dispatch(setVal(''))
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    console.log(`menuOpen state: ${menuOpen}`)
  }

  const handleLogOut = async () => {
    try {
      await signOut(auth)
      dispatch(loggedIn(false))
    }
    catch (err) {
      console.log(err)
    }
    setProfileOpen(false)
  }

  const handleLogin = () => {
    navigate('/login')
    setProfileOpen(false)
  }

  //state for hamburger menu
  const [menuOpen, setMenuOpen] = useState(true)
  const [profileOpen, setProfileOpen] = useState(false)

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth > 1100)
        setMenuOpen(true)
      if (window.innerWidth < 1100)
        setMenuOpen(false)
    }

    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <>

      <div className="header">

        <div className="brand-logo-container">
          <img src={brand_logo} alt="Logo of everlane"
            id="brand-logo" onClick={() => {
              navigate('/')
            }
            }
          />
        </div>

        <div id="hamburger" onClick={toggleMenu}>
          <RxHamburgerMenu size={50} />
        </div>

        <div id="big-menu"
          className={menuOpen === false ? "hide" : "visible"}>
          <nav>
            <NavLink onClick={() => dispatch(setSearchVal(''))} to="/">HOME</NavLink>
            <NavLink onClick={() => dispatch(setSearchVal(''))} to="/women">WOMEN</NavLink>
            <NavLink onClick={() => dispatch(setSearchVal(''))} to="/men">MEN</NavLink>
            <NavLink onClick={() => dispatch(setSearchVal(''))} to="/kids">KIDS</NavLink>
          </nav>

          <div id="searchbar-div">
            <input
              type="text"
              placeholder="Search for brands"
              className='searchbar'
              onChange={(e) => dispatch(setVal(e.target.value))}
              value={val}
            >
            </input>
            <button onClick={handleSearchButton} id="search-btn">Search</button>
          </div>


          <div id="bag-favorites-profile">
            <div id='favorites' onClick={() => {
              navigate('/favorites')
            }
            }>
              <CiHeart className='fav' />
              <h5>Favorites</h5>
            </div>
            <div id='bag' onClick={() => navigate('/bag')}>
              <SlBag />
              <h5>Bag</h5>
            </div>
            <div id='profile' onClick={() => setProfileOpen(!profileOpen)}>
              <CgProfile style={{ paddingBottom: '0.1rem' }} />
              <h5>Profile</h5>
            </div>

            {
              profileOpen === true && (
                <div id="profile-drop-down">
                  {
                    isLoggedIn === true &&
                    <>
                      <p>Welcome </p>
                      <button onClick={handleLogOut}>LOG OUT</button>
                    </>
                  }
                  {
                    isLoggedIn === false &&
                    <>
                      <p>Please Login</p>
                      <button onClick={handleLogin}>LOG IN</button>
                    </>

                  }
                </div>
              )
            }
            </div>
          </div>
        </div>


        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/women"
            element={<Women />}
          />
          <Route
            path="/men"
            element={<Men />}
          />
          <Route
            path="/kids"
            element={<Kids />}
          />
          <Route
            path="/favorites"
            element={<Favorites />}
          />
          <Route
            path="/bag"
            element={<Bag />}
          />
          <Route
            path="/product/:id"
            element={<SingleProduct />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/*"
            element={<Error404 />}
          />
        </Routes>


      </>
      )
}

      export default App
