function Header({ title }) {
    return <h3 className='padding'>{title ? title : 'Default title'}</h3>;
  }

function ItemList( {items} ) {
    if (items != null){
        return(
            items.map((item, index) => (
            <li key={index} className='list-item'>{item}</li>
             ))
        )
    }
}

export function Cart(props) {
    return (
        <div className='cart-body'>
            <Header title='Cart'/>
            <ul className='menu-list'>
                <ItemList items={props.cartItems} />
            </ul>
        </div>
    )
}