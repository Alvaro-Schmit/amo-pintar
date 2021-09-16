
import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import './item.css'
import './obras.css'


function Item({dataItem}) {
   
    return (
        <>
            <div className='cardsList' >
                <div className='cardCssList' >
                    <h2 className='tiuloCard'>{dataItem.name}</h2>
                    <img src={dataItem.image} alt={dataItem.name} className={dataItem.className} />
                    <p>{dataItem.description}</p>
                        <div className="footerCardsList">
                            <h4>{dataItem.size}</h4>
                            <NavLink exact to={`name/${dataItem.name}`} style={{textDecoration:"none"}}>
                                <Button className="buttonList"
                                         variant="contained"
                                 >Detalle</Button>
                            </NavLink>                
                        </div>   
                 </div>
            </div>
        </>
    )
}

export default Item