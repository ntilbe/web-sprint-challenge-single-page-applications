import React from "react";
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <div className='hero-background'>
            <Link to='/pizza'>
            <button className='pizza-btn'>Pizza?</button>
            </Link>
            </div>
        </div>
        
    );
  };
export default Home;