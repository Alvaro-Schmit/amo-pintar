import Item from '../item/Item'
import './itemList.css'


function ItemList({data, greting}) {
    return (
        <div className="bigcardContainerList">  
                <h1>{greting}</h1>
            <div className="cardContainerList">
                 
                {data.map(dat => <Item key={dat.id} dataItem={dat} />)}  

                
            </div>
        </div>
    )
}

export default ItemList
