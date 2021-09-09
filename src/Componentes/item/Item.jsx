
import ItemCount from '../itemCount/ItemCount'
import './item.css'
import './obras.css'

const onAdd =(count)=>{
    if (count===1) {
        alert(`Agregaste ${count} produto al carrito`)   
    }
    else
    alert(`Agregaste ${count} produtos al carrito`)
  }

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
                            <ItemCount stock={4} initial={1} onAdd={onAdd}/>
                        </div>   
                 </div>
            </div>
        </>
    )
}

export default Item