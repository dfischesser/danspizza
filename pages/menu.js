/* eslint-disable react/prop-types */
import Accordion from 'react-bootstrap/Accordion';
import { Customize } from '../components/customize'
import { useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ToggleOn from '@mui/icons-material/ToggleOn';
import ToggleOff from '@mui/icons-material/ToggleOff';
import Circle from '@mui/icons-material/Circle';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Header({ title }) {
    return <h1 className="header-padding">{title ? title : 'Default title'}</h1>;
}



export const getStaticProps = async () => {
    const res = await fetch('http://localhost:5753/api/Menu/Get')
    const menu = await res.json()
    console.log('menu food cust menu: ' + JSON.stringify(menu.menuCategoryList))
    console.log('done.')
    //console.log('menu food cust via find: ' + JSON.stringify(menu.menuCategoryList.find(list => list.menuCategoryID == 2)))
    // const menu = {"menuCategoryList":[{"menuCategoryID":1,"foodType":"Pizza","foodList":[{"foodID":1,"menuCategoryID":1,"foodName":"Hand-Tossed","price":17.99},{"foodID":2,"menuCategoryID":1,"foodName":"Thin-Crust","price":18.99},{"foodID":3,"menuCategoryID":1,"foodName":"Sicilian","price":19.99}]},{"menuCategoryID":2,"foodType":"Pasta","foodList":[{"foodID":4,"menuCategoryID":2,"foodName":"Francese","price":14.99},{"foodID":5,"menuCategoryID":2,"foodName":"Marsala","price":14.99},{"foodID":6,"menuCategoryID":2,"foodName":"Alfredo","price":14.99}]},{"menuCategoryID":3,"foodType":"Salad","foodList":[]},{"menuCategoryID":4,"foodType":"Soup","foodList":[]},{"menuCategoryID":5,"foodType":"Sides","foodList":[]},{"menuCategoryID":6,"foodType":"Drinks","foodList":[]},{"menuCategoryID":7,"foodType":"Dessert","foodList":[]}]}
    return { props: { menu } }
}

export default function Menu(props) {
    const [data, setData] = useState(props.menu.menuCategoryList.slice());
    const [open, setOpen] = useState(props.menu.menuCategoryList
        .map((foodType) => ({
            isOpen: false, menuCategoryID: foodType.menuCategoryID, food: foodType.foodList
                .map((food) => ({ isOpen: false, foodID: food.foodID }))
        })
        ))
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [selectedCustIndex, setSelectedCustIndex] = useState(1);
    const [buttonText, setButtonText] = useState('Add');
    console.log('open: ' + JSON.stringify(open))

    function handleClick(e, menuCategoryID) {
        console.log('food: ' + menuCategoryID)
        console.log('open: ' + JSON.stringify(open))
        console.log('selected: ' + JSON.stringify(selectedIndex))
        setSelectedIndex(menuCategoryID);
        setOpen(open.map((item) =>
        (item.menuCategoryID === menuCategoryID ?
            { ...item, isOpen: item.isOpen = !item.isOpen } :
            { ...item, isOpen: item.isOpen = item.isOpen })
        )
        )
    }

    function handleCustomizeClick(e, food) {
        console.log('food: ' + food)
        console.log('open: ' + JSON.stringify(open.find(menuItem => (menuItem.menuCategoryID === food.menuCategoryID).food)))
        console.log('selected: ' + JSON.stringify(selectedCustIndex))
        setSelectedCustIndex(food.foodID);
        setOpen(open.map(menuItem => ({
            ...menuItem, food: menuItem.food.map((item) =>
            (item.foodID === food.foodID ?
                { ...item, isOpen: item.isOpen = !item.isOpen } :
                { ...item, isOpen: item.isOpen = false })
            )
        })
        ))
    }

    function collapseCustomizeOnAdd() {
        setOpen(open.map(menuItem => ({
            ...menuItem, food: menuItem.food.map((item) => ({ ...item, isOpen: item.isOpen = false }))  
        })))
    }

    return (
        <>
            <Header title="Menu" />
            <Box sx={{mx: 'auto', display: 'block',  width: 500}}>
                <List
                    sx={{ maxWidth: 350, bgcolor: 'background.paper' }}
                    component="nav"
                >
                    {data.map(item =>
                        <div key={item.menuCategoryID}>
                            <ListItemButton selected={selectedIndex === item.menuCategoryID} onClick={(e) => handleClick(e, item.menuCategoryID)}>
                                <ListItemIcon>
                                    {/* <GetIcon type={item.menuCategoryID}/> */}
                                    {open.find((state) => (state.menuCategoryID == item.menuCategoryID)).isOpen ? <ToggleOn /> : <ToggleOff />}
                                </ListItemIcon>
                                <ListItemText primary={item.foodType} />
                                {open.find((state) => (state.menuCategoryID == item.menuCategoryID)).isOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={open.find((state) => (state.menuCategoryID == item.menuCategoryID)).isOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {item.foodList.map(foodItem => (
                                        <div key={foodItem.foodID}>
                                            <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemText primary={foodItem.foodName} />
                                                    {open.find(menuItem => menuItem.menuCategoryID === foodItem.menuCategoryID).food
                                                    .find((state) => (state.foodID == foodItem.foodID)).isOpen ? 
                                                        <Button
                                                        onClick={(e) => {
                                                            console.log('button data: ' + JSON.stringify(foodItem));
                                                            //props.handleOpenCustomize(foodItem);
                                                            handleCustomizeClick(e, foodItem)
                                                            }
                                                        }
                                                        variant="contained">
                                                        Cancel
                                                        </Button> : <Button
                                                            onClick={(e) => {
                                                                console.log('button data: ' + JSON.stringify(foodItem));
                                                                //props.handleOpenCustomize(foodItem);
                                                                handleCustomizeClick(e, foodItem)
                                                                }
                                                            }
                                                            variant="contained">
                                                            Add
                                                        </Button>
                                                    }
                                            </ListItemButton>
                                            <Collapse in={open.find(menuItem => menuItem.menuCategoryID === foodItem.menuCategoryID).food
                                                .find((state) => (state.foodID == foodItem.foodID)).isOpen} timeout="auto" unmountOnExit>
                                                <List component='div' disablePadding>
                                                    <ListItem>
                                                        <Customize
                                                            customizeFood={foodItem}
                                                            addCustomItem={(foodItem) => props.addCustomItem(foodItem)}
                                                            collapseCustomizeOnAdd={() => collapseCustomizeOnAdd()}
                                                        />
                                                    </ListItem>
                                                </List>
                                            </Collapse>
                                        </div>
                                    ))}
                                </List>
                            </Collapse>

                        </div>
                    )}
                </List>
            </Box>
            {/* {props.openModal.customize &&
                <Customize
                    customizeFood={data
                        .find(category => category.menuCategoryID == props.foodToCustomize.menuCategoryID).foodList
                        .find(foodItem => foodItem.foodID == props.foodToCustomize.foodID)}
                    openModal={props.openModal}
                    setOpenModal={(data) => props.setOpenModal(data)}
                    updateCheckedToppings={(updatedChecked) => props.updateCheckedToppings(updatedChecked)}
                    checked={props.checked}
                    customizeFoodCart
                    foodToCustomize={props.foodToCustomize}
                    addCustomItem={(foodItem) => props.addCustomItem(foodItem)}
                />
            } */}
        </>
    )
}