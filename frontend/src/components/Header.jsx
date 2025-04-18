import './Header.css'; 
import logo from '../assets/rexchan-logo.png'; 

const Header = props => {
    return (
        <header>
            <div className="row">
                <img className="logo" width="120" src={logo} />
            </div>
        </header>
    ); 
}; 

export default Header; 