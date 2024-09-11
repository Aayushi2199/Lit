// Products.js
import { useNavigate } from 'react-router-dom';
import './tab1.css'
 
const Tab1 = () => {
   const navigate = useNavigate();
   return (
      <div >
        <div className="main-container">
               
         <div className="list-container">
        <h2>Your risk apetite is : High</h2>
        <ul>
        <h3>Asset classes we recommend for investment: </h3>
            <li>Stocks</li>
            <li>Index Funds</li>
            <li>Crypto Currencies</li>
            <li>Derivatives</li>
        </ul>
    </div>
    <div className="two-column-list-container">
        <h2>Available products for investment</h2>
        <div className="two-column-list">
            <div className="column">
                <ul>
                    <h3>Product Name</h3>
                    <li>Product - Direct Equity</li>
                    <li>Product - Equity Mutual Funds</li>
                    <li>Product - Hybrid</li>
                </ul>
            </div>
            <div className="column">
                <ul>
                    <h3>Product Asset Class</h3>
                    <li>Stocks</li>
                    <li>Stocks and Mutual Funds</li>
                    <li>Commodities and Crypto Currencies</li>
                </ul>
            </div>
        </div>
    </div>
      </div>
      </div>
   );
};
 
export default Tab1;