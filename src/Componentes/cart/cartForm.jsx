import {useState} from 'react'
import { useCartContext } from "../../context/cartContext";
import { getFirestore } from '../../services/getFirebase';

//esta importación hay que volver a hacerla
import  firebase  from 'firebase'
import 'firebase/firestore'



const CartForm = () => {
    const [ formData, setFormData ] = useState({
        name: '',
        tel: '',
        email: ''
    })


    const {carList, precioTotal} = useCartContext()

   
        
    const handleOnSubmit = (e) =>{        
        e.preventDefault()        
        let orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate( new Date() );
       
        orden.buyer = formData
        
        orden.total = precioTotal();
        
        orden.items = carList.map(cartItem => {
            const id = cartItem.item.id;
            const title = cartItem.item.title;
            const price = cartItem.item.price * cartItem.quantity;
            
            return {id, title, price}   
        })


        const db = getFirestore()
        db.collection('orders').add(orden)
        .then(resp => alert(resp.id))
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
            firebase.firestore.FieldPath.documentId(), 'in', carList.map(i=> i.item.id)
        )
            
        const batch = db.batch();
            
        // por cada item restar del stock la cantidad de el carrito
        
        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - carList.find(item => item.item.id === docSnapshot.id).quantity
                })
            })

            batch.commit().then(res =>{
                console.log('resultado batch:', res)
            })
        })
        
        // //con id propio
        // db.collection('orders').doc(id).set(orden)
        
        // //Ejemplo de actualizar
        // db.collection('orders').doc('TQQaDzL8QWzannCWCBoE').update({
        //     total: 500
        // })
        // .then(resp =>console.log(resp) )  
        //console.log(orden)
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
                                <input 
                                    type='text' 
                                    placeholder='Confirme el mail ' 
                                    name='email2' 
                                />  
                                <button>Terminar Compra</button>
                            </form>
                        </div>
                

            </center>

        </div>
    )
}

export default CartForm
