import Portal from './common/Portal';
import Navigation from './common/Navigation.tsx';

const NavigationMobile = ({}) => {
  return (
    <Portal wrapperId="navigation-portal">
      <Navigation />
    </Portal>
  );
};

export default NavigationMobile;
