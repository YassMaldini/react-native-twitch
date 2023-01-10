import { useState } from "react";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { TabView } from "react-native-tab-view"
import { CustomTabBar } from "../../../../commons/CustomTabBar/CustomTabBar";
import { ProfileTabs, renderProfileScene } from "./ProfileTabView.data";

const ProfileTabView = () => {
  const layout = useSafeAreaFrame();

  const [index, setIndex] = useState(0);

  const routes = Object.values(ProfileTabs).reduce(
    (acc, { key, title }) => ([
      ...acc,
      { key: key.toLocaleLowerCase(), title }
    ]),
    [] as Array<{
      key: string,
      title: string
    }>
  )

  return (
    <TabView
      // style={{ 
      //   position: 'absolute',
      //   top: headerHeight,
      //   left: 0
      // }}
      // sceneContainerStyle={{ flex: 1 }}
      // pagerStyle={{ flex: 1 }}
      // style={{
      //   // flex: 1,
      //   height: layout.height
      // }}
      navigationState={{ index, routes }}
      renderScene={renderProfileScene}
      onIndexChange={setIndex}
      renderTabBar={(props) => <CustomTabBar {...props} scrollEnabled />}
      // initialLayout={{ width: layout.width, height: layout.height }}
      // initialLayout={{ width: layout.width }}
    />
  )
}

export default ProfileTabView