/* eslint-disable react/prop-types */
import Accordion from 'react-bootstrap/Accordion';
import { Customize } from '../components/customize'
import { useState, useEffect } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Typography } from '@mui/material';

function Header({ title }) {
    return <h1 className="header-padding">{title ? title : 'Default title'}</h1>;
}



export const getStaticProps = async () => {
    const res = await fetch(process.env.NODE_ENV === 'development' ? 'http://localhost:18080/api/Menu/Get' : 'https://danspizza-api.azurewebsites.net/api/Menu/Get')
    const menu = await res.json()
    console.log('menu food cust menu length: ' + menu.menuCategoryList.length)
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
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedCustIndex, setSelectedCustIndex] = useState(1);
    const [buttonFocus, setButtonFocus] = useState(0);

    console.log('buttonFocus: ' + JSON.stringify(buttonFocus))

    function handleClick(e, menuCategoryID) {
        console.log('food: ' + menuCategoryID)
        console.log('open: ' + JSON.stringify(open))
        console.log('selected: ' + JSON.stringify(selectedIndex))
        setSelectedIndex(menuCategoryID);
        setOpen(open.map((item) =>
        (item.menuCategoryID === menuCategoryID ?
            { ...item, isOpen: item.isOpen = !item.isOpen } :
            { ...item, isOpen: false })
        )
        )
    }

    function handleCustomizeClick(e, food) {
        console.log('food: ' + food)
        console.log('open: ' + JSON.stringify(open.find(menuItem => (menuItem.menuCategoryID === food.menuCategoryID).food)))
        console.log('selected: ' + JSON.stringify(selectedCustIndex))
        setSelectedCustIndex(food.foodID)
        setOpen(open.map(menuItem => ({
            ...menuItem, food: menuItem.food.map((item) =>
            (item.foodID === food.foodID ?
                { ...item, isOpen: item.isOpen = !item.isOpen } :
                { ...item, isOpen: false })
            )
        })
        ))
    }

    function collapseCustomizeOnAdd() {
        setOpen(open.map(menuItem => ({
            ...menuItem, food: menuItem.food.map((item) => ({ ...item, isOpen: item.isOpen = false }))
        })))
    }

    function GetIcon({ type }) {
        switch (type) {
            case 1: {
                return <Typography fontSize={'25px'}>🍕</Typography>
            }
            case 2: {
                return <Typography fontSize={'25px'}>🍝</Typography>
            }
            case 3: {
                return <Typography fontSize={'25px'}>🥗</Typography>
            }
            case 4: {
                return <Typography fontSize={'25px'}>🥣</Typography>
            }
            case 5: {
                return <Typography fontSize={'25px'}>🍟</Typography>
            }
            case 6: {
                return <Typography fontSize={'25px'}>🥤</Typography>
            }
            case 7: {
                return <Typography fontSize={'25px'}>🍰</Typography>
            }
        }
        return <Box>{type}</Box>
    }

    return (
        <Grid container rowSpacing={1} columnSpacing={2}>
            <Grid xs={12} textAlign={'center'}>
                <Header title="Menu" />
            </Grid>
            <Grid xs={10} xsOffset={1}>
                <List
                    component="nav"
                >
                    {data.map((item, index) =>
                        <div key={item.menuCategoryID}>
                            <ListItemButton
                                onClick={(e) => { handleClick(e, item.menuCategoryID); setButtonFocus(item.menuCategoryID) }}
                            >
                                <ListItemIcon>
                                    <GetIcon type={item.menuCategoryID} />
                                </ListItemIcon>
                                <ListItemText primary={item.foodType} />
                                {open.find((state) => (state.menuCategoryID == item.menuCategoryID)).isOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            {index !== (data.length - 1) && <Divider variant='middle' component='li' />}
                            <Collapse in={open.find((state) => (state.menuCategoryID == item.menuCategoryID)).isOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {item.foodList.map(foodItem => (
                                        <div key={foodItem.foodID}>
                                            <ListItem sx={{ width: '95%', mx: 'auto' }}>
                                                <ListItemText primary={foodItem.foodName} />
                                                {open.find(menuItem => menuItem.menuCategoryID === foodItem.menuCategoryID).food
                                                    .find((state) => (state.foodID == foodItem.foodID)).isOpen ?
                                                    <Button
                                                        onClick={(e) => {
                                                            handleCustomizeClick(e, foodItem)
                                                        }
                                                        }
                                                        variant="contained">
                                                        Cancel
                                                    </Button> : <Button
                                                        onClick={(e) => {
                                                            handleCustomizeClick(e, foodItem)
                                                        }}
                                                        variant="contained">
                                                        Add
                                                    </Button>
                                                }
                                            </ListItem>
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
            </Grid>
        </Grid>
    )
}