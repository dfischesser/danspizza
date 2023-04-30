import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import useSWR, { preload } from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json())
preload('https://localhost:44302/Menu/Get', fetcher)

function Header({ title }) {
    return <h1 className="header-padding">{title ? title : 'Default title'}</h1>;
  }

export default function Menu(props) {

    function AddToCart(food){
        props.onAddItem(food)
    }

    const { data, error } = useSWR('https://localhost:44302/Menu/Get', fetcher)
  
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

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
                                    <li key={data.foodID} className='menu-item'>{data.foodName}
                                        <button onClick={() => AddToCart(data.foodName)}>Add</button>
                                    </li>
                            ))}
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
          </Accordion>
        </>
    )
}