import React from 'react';
import '../styles/postCard.scss';
import { PostCard } from '../components';
import { rentalPosts } from '../assets/constansts';


interface RentalPageProps {
  // Add your component's props here
}

const RentalPage: React.FC<RentalPageProps> = (props) => {
  return (
   <PostCard data={rentalPosts} type="rent"/>
  );
};

export default RentalPage;