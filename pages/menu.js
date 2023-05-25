/* eslint-disable react/prop-types */
import Accordion from 'react-bootstrap/Accordion';
import { Customize } from '../components/customize'
import React from 'react';

function Header({ title }) {
    return <h1 className="header-padding">{title ? title : 'Default title'}</h1>;
}

export const getStaticProps = async () => {
const res = await fetch('/api/Menu/Get')
const menu = await res.json()
return {props: {menu}}
}

export default function Menu(props) {
    const data = props.menu

    return (
            <>
                <Header title="Menu"/>
                <Accordion defaultActiveKey='0' className='menu'>
                {data.menuCategoryList.map((data) => (
                    <Accordion.Item key={data.menuCategoryID} eventKey={data.menuCategoryID} className='menu-category'>
                        <Accordion.Header className='accordion-head'>{data.foodType}</Accordion.Header>
                        <Accordion.Body>
                            <ul className='menu-list'>
                                {data.foodList.map((data) => (
                                    <li key={data.foodID} className='menu-center'>
                                        <div className='menu-item'>{data.foodName}: ${data.price}</div>
                                    <div className='menu-button'>
                                        <button onClick={() => props.openModal(data)} key={data.foodID}>Customize</button>
                                    </div>
                                    </li>
                                ))}
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
                </Accordion>
                {props.isModalOpen && 
                    <Customize
                    customizeData={props.customizeData}
                    closeCustomize={() => props.closeCustomize()}
                    updateCheckedToppings={(updatedChecked) => props.updateCheckedToppings(updatedChecked)}
                    checked={props.checked}
                    foodToCustomize={props.foodToCustomize}
                    addCustomItem={(foodItem) => props.addCustomItem(foodItem)}
                />
            }
        </>
    )
}