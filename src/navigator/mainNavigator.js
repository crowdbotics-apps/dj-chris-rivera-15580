import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings26573Navigator from '../features/Settings26573/navigator';
import Dashboard126567Navigator from '../features/Dashboard126567/navigator';
import CalendarView26566Navigator from '../features/CalendarView26566/navigator';
import Messaging26565Navigator from '../features/Messaging26565/navigator';
import Settings26558Navigator from '../features/Settings26558/navigator';
import Dashboard126552Navigator from '../features/Dashboard126552/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Settings26573: { screen: Settings26573Navigator },
Dashboard126567: { screen: Dashboard126567Navigator },
CalendarView26566: { screen: CalendarView26566Navigator },
Messaging26565: { screen: Messaging26565Navigator },
Settings26558: { screen: Settings26558Navigator },
Dashboard126552: { screen: Dashboard126552Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
