import React from 'react'
import { Button } from '@material-ui/core'
import CardWidgets from '../../assets/image/shopping-cart (1).png'
import './cardWidget.css'

function cardWidgets() {
    return (
        <Button>
            <img src={CardWidgets} alt="logo diamante" className="cardWidgetsClass"/>
        </Button>
    )
}

export default cardWidgets
