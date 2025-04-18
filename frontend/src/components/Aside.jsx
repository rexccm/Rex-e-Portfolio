import './Aside.css'; 

const Aside = props => { 
    /* Data */
    const { width } = props; 

    /* Dynamic style */
    const style = { 
        width: width? width : '25%'
    }

    /* View */
    return ( 
        <aside style={style}>
            <p>This is aside.</p>
        </aside>
    ); 
}; 

export default Aside; 