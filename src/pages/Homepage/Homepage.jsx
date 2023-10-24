import phonebook from '../../images/phonebook.webp';
import { HomepageTitle, HomepageWrap } from './Homepage.styled';

const Homepage = () => {
  return (
    <HomepageWrap>
      <HomepageTitle>Your personal Phonebook</HomepageTitle>
      <img src={phonebook} alt="phonebook" width={400} />
    </HomepageWrap>
  );
};

export default Homepage;
