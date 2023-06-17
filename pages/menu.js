/* eslint-disable react/prop-types */
import Accordion from 'react-bootstrap/Accordion';
import { Customize } from '../components/customize'
import { useState } from 'react';

function Header({ title }) {
    return <h1 className="header-padding">{title ? title : 'Default title'}</h1>;
}

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:5753/api/Menu/Get')
    const menu = await res.json()
    console.log('menu food cust 2nd menu cat: ' + JSON.stringify(menu.menuCategoryList[1]))
    console.log('done.')
    console.log('menu food cust via find: ' + JSON.stringify(menu.menuCategoryList.find(list => list.menuCategoryID==2)))
    // const menu = {"menuCategoryList":[{"menuCategoryID":1,"foodType":"Pizza","foodList":[{"foodID":1,"menuCategoryID":1,"foodName":"Hand-Tossed","price":17.99},{"foodID":2,"menuCategoryID":1,"foodName":"Thin-Crust","price":18.99},{"foodID":3,"menuCategoryID":1,"foodName":"Sicilian","price":19.99}]},{"menuCategoryID":2,"foodType":"Pasta","foodList":[{"foodID":4,"menuCategoryID":2,"foodName":"Francese","price":14.99},{"foodID":5,"menuCategoryID":2,"foodName":"Marsala","price":14.99},{"foodID":6,"menuCategoryID":2,"foodName":"Alfredo","price":14.99}]},{"menuCategoryID":3,"foodType":"Salad","foodList":[]},{"menuCategoryID":4,"foodType":"Soup","foodList":[]},{"menuCategoryID":5,"foodType":"Sides","foodList":[]},{"menuCategoryID":6,"foodType":"Drinks","foodList":[]},{"menuCategoryID":7,"foodType":"Dessert","foodList":[]}]}
    return {props: {menu}}
}

export default function Menu(props) {
    const [data, setData] = useState(props.menu.menuCategoryList.slice());
    //console.log('raw menu data: ' + JSON.stringify(props.menu))
    //console.log('sliced menucategorylist: ' + JSON.stringify(data))
    //console.log('customize food: ' + JSON.stringify(props.foodToCustomize))
    if (data) {
        // console.log('customize food: ' + JSON.stringify(props.menu))
        // console.log('customize food: ' + JSON.stringify(props.foodToCustomize))
    }
    //console.log('menu food cust: ' + JSON.stringify(data.find(menuitem => menuitem.foodType='Pasta')))

    return (
            <>
                <Header title="Menu"/>
                <Accordion defaultActiveKey='0' className='menu'>
                {data.map((data) => (
                    <Accordion.Item key={data.menuCategoryID} eventKey={data.menuCategoryID} className='menu-category'>
                        <Accordion.Header className='accordion-head'>{data.foodType}</Accordion.Header>
                        <Accordion.Body>
                            <ul className='menu-list'>
                                {data.foodList.map((data) => (
                                    <li key={data.foodID} className='menu-center'>
                                        <div className='menu-item'>{data.foodName}</div>
                                    <div className='menu-button'>
                                        <button onClick={() => {console.log('button data: ' + JSON.stringify(data)); props.handleOpenCustomize(data)}} key={data.foodID}>Customize</button>
                                    </div>
                                    </li>
                                ))}
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
                </Accordion>
                {props.openModal.customize && 
                    <Customize
                    customizeFood={data
                        .find(category => category.menuCategoryID == props.foodToCustomize.menuCategoryID).foodList
                        .find(foodItem => foodItem.foodID == props.foodToCustomize.foodID)}
                    openModal={props.openModal}
                    setOpenModal={(data) => props.setOpenModal(data)}
                    updateCheckedToppings={(updatedChecked) => props.updateCheckedToppings(updatedChecked)}
                    checked={props.checked}
                    foodToCustomize={props.foodToCustomize}
                    addCustomItem={(foodItem) => props.addCustomItem(foodItem)}
                />
            }
        </>
    )
}