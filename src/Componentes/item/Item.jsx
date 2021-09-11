
import { Button } from '@material-ui/core'
import './item.css'
import './obras.css'


function Item({dataItem}) {
   
    return (
        <>
            <div className='cardsList' >
                <div className='cardCssList' >
                    <h2>{dataItem.name}</h2>
                    <img src={dataItem.image} alt={dataItem.name} className={dataItem.className} />
                    <p>{dataItem.description}</p>
                        <div className="footerCardsList">
                            <h4>{dataItem.price}</h4>
                            <Button className="buttonList"
                            variant="contained"
                        
                                            >Detalle</Button>
                        </div>   
                 </div>
            </div>
        </>
    )
}

export default Item