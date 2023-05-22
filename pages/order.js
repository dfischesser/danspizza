/* eslint-disable react/prop-types */
import React from 'react';

function Header({ title }) {
    return <h1 className="header-padding">{title ? title : 'Default title'}</h1>;
  }

export default function Order() {
    
    return (
        <>
            <Header title="Order"/>
            <p>Hello World!</p>
        </> 
    )
}