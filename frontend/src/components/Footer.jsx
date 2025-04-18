import './Footer.css'; 
import logo from '../assets/rexchan-logo.png'; 

const Footer = props => {
    return (
        <footer>
            <div className="row">
                <img className="logo" width="200" src={logo} />
                <h2>This is footer</h2>
            </div>
        </footer>
    ); 
}; 

export default Footer; 