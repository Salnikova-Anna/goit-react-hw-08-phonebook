import { signUp } from 'api/auth';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

const Registration = () => {
  const registration = async body => {
    try {
      const data = await signUp(body);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <RegistrationForm registration={registration} />;
};

export default Registration;
