import Accordion from 'react-bootstrap/Accordion';

function Header({ title }) {
    return <h1 className="header-padding">{title ? title : 'Default title'}</h1>;
  }

export default function Menu(props) {

    return (
        <>
          <Header title="Menu"/>
          <Accordion defaultActiveKey='0' className='menu'>
            {props.menu.map((data) => (
                <Accordion.Item key={data.menuCategoryID} eventKey={data.menuCategoryID} className='menu-category'>
                    <Accordion.Header className='accordion-head'>{data.foodType}</Accordion.Header>
                    <Accordion.Body>
                        <ul className='menu-list'>
                            {data.foodList.map((data) => (
                                    <li key={data.foodID} className='menu-item'>{data.foodName}
                                        <button onClick={() => props.onAddItem(data)}>Add</button>
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