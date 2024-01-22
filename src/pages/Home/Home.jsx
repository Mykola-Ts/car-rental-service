import { FaCheckCircle } from 'react-icons/fa';
import { List, RentalLink, SubTitle, Text, Title } from './Home.styled';

const Home = () => {
  return (
    <main>
      <Title>Rent a car in Ukraine</Title>
      <SubTitle>Hire or rent a car with or without driver</SubTitle>

      <List>
        <li>
          <FaCheckCircle color="rgba(71, 117, 36, 0.5)" /> Large fleet of cars
          in stock
        </li>
        <li>
          <FaCheckCircle color="rgba(71, 117, 36, 0.5)" />
          Auto delivery to your geolocation
        </li>
        <li>
          <FaCheckCircle color="rgba(71, 117, 36, 0.5)" />
          Discounts for regular customers
        </li>
        <li>
          <FaCheckCircle color="rgba(71, 117, 36, 0.5)" />
          Any form of payment
        </li>
        <li>
          <FaCheckCircle color="rgba(71, 117, 36, 0.5)" />
          Favorable prices
        </li>
      </List>

      <Text>
        Ukrainian cities is known for its majestic alleys, luxurious shopping
        centers and impressive architecture. With such surroundings, it is not
        surprising that the demand for car rentals in Ukraine is growing every
        year. These cars have become an integral part of the lives of successful
        businessmen, show business stars and just people seeking to experience
        unique sensations of comfort and power.
      </Text>

      <SubTitle>Rent a car right now!</SubTitle>

      <RentalLink to="/catalog">Rental car</RentalLink>
    </main>
  );
};

export default Home;
