import Accordion from 'react-bootstrap/Accordion';
import { Customize } from '../components/customize'

function Header({ title }) {
    return <h1 className="header-padding">{title ? title : 'Default title'}</h1>;
  }

  export async function getStaticProps() {
    const res = await fetch('https://localhost:443/Menu/Get');
    const data = await res.json();
    console.log('(Menu) Hi it\'s me, the server!')
    console.log('Here is your data: ' + JSON.stringify(data))
   
    return {
      props: {
        data
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, // In seconds
    };
  }

export default function Menu(props) {

    console.log('(Menu) Hey it\'s me, the client!')
    console.log('Here is your data: ' + JSON.stringify(props.data))
    
    props.setMenuData(props.data);

    return (
            <>
                <Header title="Menu"/>
                <Accordion defaultActiveKey='0' className='menu'>
                {props.data.menuCategoryList.map((data) => (
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