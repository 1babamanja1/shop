import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button';

const AdminPanel = () => (
  <div>
    <Link to="/add_pokemon">
      <Button buttonName="Add New Pokemon To List" type="button" />
    </Link>
    <Button buttonName="See Orders" type="button" />
  </div>
);

export default AdminPanel;
