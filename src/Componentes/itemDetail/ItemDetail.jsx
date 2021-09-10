import { Button } from '@material-ui/core'
import './obrasDetail.css'
import './itemDetail.css'

// const onAdd =(count)=>{
//     alert(`Agregaste ${count} produtos al carrito`)
//   }



function ItemDetail({data, greting}) {
    return (
        <div className="bigcardContainer">  
               
            <div className="cardContainer">
                 
                {data.map(dat =>
              
                
            <div className='cards' >
                    <div className='container111'>
                         <img src={dat.image} alt={dat.name} className={dat.detailClassName} />
                    </div>
                    <div className='container222'>
                        <div>
                            <h2>{dat.name}</h2>
                            <p className='textObra'>{dat.detaildescription}</p>
                        </div>
                        <div className="footerCards">
                            <h4>{dat.price}</h4>
                            <Button className="button"
                                    variant="contained"  >Comprar</Button>
                         </div>
                    </div>
                    <div className='container333'>
                        <p className='textArtista'>{dat.datosAutor}</p>
                        <img src={dat.fotoArtista} alt={dat.artista} className='artistaStyle' /> 
                        <h4>{dat.artista}</h4> 
                    </div>  
            </div>
        
                
                )}  

                
            </div>
        </div>
    )
}

export default ItemDetail
