import Item from '../item/Item'
import './itemList.css'


function ItemList({data, greting}) {
    return (
        <div className="bigcardContainer">  
                <h1>{greting}</h1>
            <div className="cardContainer">
                 
                {data.map(dat => <Item key={dat.id} dataItem={dat} />)}  

                
            </div>
        </div>
    )
}

export default ItemList
