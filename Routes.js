import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

import BlueScreen from "./src/BlueScreen";
import GreenScreen from "./src/GreenScreen";
import OrangeScreen from "./src/OrangeScreen";
import PurpleScreen from "./src/PurpleScreen";
import RedScreen from "./src/RedScreen";
import YellowScreen from "./src/YellowScreen";

const TabOneStack = createStackNavigator(
  {
    Blue: BlueScreen,
    Purple: PurpleScreen,
    Green: GreenScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const TabTwoStack = createStackNavigator({
  Yellow: YellowScreen,
  Red: RedScreen
});

const tabNavigator = createBottomTabNavigator({
  TabOne: TabOneStack,
  TabTwo: TabTwoStack,
  TabThree: OrangeScreen
});

export default createAppContainer(tabNavigator);
