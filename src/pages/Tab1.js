// Products.js
import { useNavigate } from 'react-router-dom';
import './tab1.css'
 
const Tab1 = () => {
   const navigate = useNavigate();
   return (
      <div >
        <div className="main-container">
               
         <div className="list-container">
        <h2>Asset Class</h2>
        <ul>
            <li>Home loans</li>
            <li>Education Bonds</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </div>
    <div className="two-column-list-container">
        <h2>Portfolio</h2>
        <div className="two-column-list">
            <div className="column">
                <ul>
                    <li>Column 1 - Item 1</li>
                    <li>Column 1 - Item 2</li>
                    <li>Column 1 - Item 3</li>
                </ul>
            </div>
            <div className="column">
                <ul>
                    <li>Column 2 - Item 1</li>
                    <li>Column 2 - Item 2</li>
                    <li>Column 2 - Item 3</li>
                </ul>
            </div>
        </div>
    </div>
      </div>
      </div>
   );
};
 
export default Tab1;