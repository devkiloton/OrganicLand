import logo from '../../assets/logo.png';

import tomato from '../../assets/frutas/Tomato.png';
import broccoli from '../../assets/frutas/Broccoli.png';
import potato from '../../assets/frutas/Potato.png';
import picles from '../../assets/frutas/Picles.png';
import pumpkin from '../../assets/frutas/Pumpkin.png';

const cart = {
    top:{
        title: 'Cart detail'
    },
    details:{
        name: 'Veggie basket',
        logo: logo,
        farmName: 'Jenny Jack Farm',
        description: 'A basket with carefully selected products from the farm to  your kitchen.',
        price: 'U$ 30.00',
    },
    button:{
        button: 'Buy'
    },
    itens:{
        title: 'Cart itens',
        list:[
            {
                name:'Tomato',
                image: tomato,
            },
            {
                name:'Broccoli',
                image: broccoli,
            },
            {
                name:'Potato',
                image: potato,
            },
            {
                name:'Picles',
                image: picles,
            },
            {
                name:'Pumpkin',
                image: pumpkin,
            }
        ]
    }
}

export default cart;