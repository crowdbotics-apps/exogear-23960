import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen7194951Navigator from '../features/BlankScreen7194951/navigator';
import BlankScreen6194950Navigator from '../features/BlankScreen6194950/navigator';
import BlankScreen5194949Navigator from '../features/BlankScreen5194949/navigator';
import BlankScreen4194948Navigator from '../features/BlankScreen4194948/navigator';
import BlankScreen3194947Navigator from '../features/BlankScreen3194947/navigator';
import BlankScreen2194946Navigator from '../features/BlankScreen2194946/navigator';
import BlankScreen1194945Navigator from '../features/BlankScreen1194945/navigator';
import BlankScreen0194944Navigator from '../features/BlankScreen0194944/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen7194951: { screen: BlankScreen7194951Navigator },
BlankScreen6194950: { screen: BlankScreen6194950Navigator },
BlankScreen5194949: { screen: BlankScreen5194949Navigator },
BlankScreen4194948: { screen: BlankScreen4194948Navigator },
BlankScreen3194947: { screen: BlankScreen3194947Navigator },
BlankScreen2194946: { screen: BlankScreen2194946Navigator },
BlankScreen1194945: { screen: BlankScreen1194945Navigator },
BlankScreen0194944: { screen: BlankScreen0194944Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
