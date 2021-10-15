import {useState} from 'react'
import { useCartContext } from "../cartContext/CartContext";
import { getFirestore } from '../../services/getFirebase';
import  firebase  from 'firebase'
import 'firebase/firestore'



const CartForm = () => {
    const [ formData, setFormData ] = useState({
        name: '',
        tel: '',
        email: ''
    })


    const {cartList, totalPrice} = useCartContext()

   
        
    const handleOnSubmit = (e) =>{        
        e.preventDefault()        
        let orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate( new Date() );
       
        orden.buyer = formData
        
        orden.total = totalPrice();
        
        orden.datas = cartList.map(cartItem => {
            const id = cartItem.data.id;
            const title = cartItem.data.name;
            const price = cartItem.data.price * cartItem.quantity;
            
            return {id, title, price}   
        })


        const db = getFirestore()
        db.collection('orders').add(orden)
        .then(resp => console.log(resp.id))
        .catch(err=> console.log(err))
        .finally(()=>
            setFormData({
                name: '',
                tel: '',
                email: ''
            }) 
            //borrarLista()
        )
            
            
        //Actualiza todos los items que estan en el listado de Cart del CartContext
        const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.data.id)
        )
            
        const batch = db.batch();
            
        // por cada item restar del stock la cantidad de el carrito
        
        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(item => item.data.id === docSnapshot.id).quantity
                })
            })

            batch.commit().then(res =>{
                console.log('resultado batch:', res)
            })
        })
        
       
    }

    function handleOnChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        

    }
    
    console.log(formData)
    return (
        <div>
            <center>
               
                        <div>
                            

                            <form 
                                onSubmit={handleOnSubmit}
                                onChange={handleOnChange}
                            >
                                <input 
                                    type='text' 
                                    placeholder='ingrese el nombre' 
                                    name='name'
                                    value={formData.name} 
                                />  
                                <input 
                                    type='text' 
                                    placeholder='ingrese el nro de tel' 
                                    name='tel' 
                                    value={formData.tel}
                                />  
                                <input 
                                    type='text' 
                                    placeholder='ingrese el email' 
                                    name='email' 
                                    value={formData.email}    
                                />  
                              
                                <button>Terminar Compra</button>
                            </form>
                        </div>
                

            </center>

        </div>
    )
}

export default CartForm
