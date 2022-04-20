import React from 'react';
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css';

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              description={menuItem.description}
            />
          );
        })}
      </div>
      <div>
        <h1 className="menuTitle">Mix ins</h1>
        <p className="">Add pecans to any classic order for $2 a dozen</p>
        <p>Add pecans to any gaint order for $2 a 1/2 dozen</p>
      </div>
      <section>
        <h1 className="menuTitle">Custom Orders</h1>
        <p>Custom packaging, labels, and npmix-ins available upon request</p>
      </section>
    </div>
  );
}

export default Menu;
