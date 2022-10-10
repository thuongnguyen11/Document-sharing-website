import Header from "../../components/Header/Header";
import './Default_Layout.css'

function Default_Layout(props) {
    return ( 
        <div className='df-wrapper'>
                <div className='df-header'>
                        <Header />
                </div >
                <div className='df-below-header'>
                        <div className='df-children'>
                                {props.children}
                        </div>
                </div>
        </div>
     );
}

export default Default_Layout;