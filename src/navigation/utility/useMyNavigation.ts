import { useNavigation } from '@react-navigation/native';
import { ActivitiesStack } from './types';

const useMyNavigation = () => {
  const navigation = useNavigation<ActivitiesStack>();
  return navigation;
};

export default useMyNavigation;
