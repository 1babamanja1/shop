import React from 'react';
import Form from '../../../Components/Form';
import Input from '../../../Components/Input';

const AddPokemonForm = () => (
  <div>
    <Form>
      <Input name="id" placeholder="id" type="string" />
      <Input name="name" placeholder="name" type="string" />
      <Input name="height" placeholder="height" type="string" />
      <Input name="weight" placeholder="weight" type="string" />
      <Input name="category" placeholder="category" type="string" />
      <Input name="type" placeholder="type" type="checkbox" />
    </Form>
  </div>
);
export default AddPokemonForm;
