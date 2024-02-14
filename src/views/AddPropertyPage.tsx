import React from 'react';
import NewProperty from '../components/dashboard/NewProperty';
import '../styles/new-property.scss';

interface AddPropertyProps {
  // Add your component's props here
}

const AddProperty: React.FC<AddPropertyProps> = (props) => {
  return (
    <section className='new-property-section'>
        <NewProperty/>
    </section>
  );
};

export default AddProperty;