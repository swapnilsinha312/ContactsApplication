import Button from './Button';
import {useLocation} from 'react-router-dom';

function Header({title, onClick,showForm})
{
    const loc=useLocation();
    // const loc={'pathname':true}
    return (
        <div className='jumbotron'>
            <nav style={{'color':'white'}} className="display-3 navbar bg-dark">
            {/* <img src="https://external-preview.redd.it/bOQoL87VWGgAy8kPJ6kmAtdG8BkUgvgvOk8lXb5zgEg.jpg?auto=webp&s=bc490a94c7b579a5ab503e6d87db1213c222035b" width="auto" height="200"/> */}
            {title}
            </nav><br/>
            {loc.pathname==='/'?
                <p style={{float:'right'}} >
                    <Button onClick={onClick} color={showForm?'btn-danger':'btn-dark'} text={!showForm?'Add Contact':'Close'} />
                </p>
            :''}
        </div>
    );
}


export default Header;