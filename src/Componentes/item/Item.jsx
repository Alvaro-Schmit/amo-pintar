
import { Button } from '@material-ui/core'
import './item.css'
import './obras.css'


function Item({dataItem}) {
   
    return (
        <>
            <div className='cards' >
                <div className='cardCss' >
                    <h2>{dataItem.name}</h2>
                    <img src={dataItem.image} alt={dataItem.name} className={dataItem.className} />
                    <p>{dataItem.description}</p>
                        <div className="footerCards">
                            <h4>{dataItem.price}</h4>
                            <Button className="button"
                            variant="contained"
                        
                                            >Detalle</Button>
                        </div>   
                 </div>
            </div>
        </>
    )
}

export default Item