import { useState } from "react";
import { TabView } from "react-native-tab-view";
import { CustomTabBar } from "../../../../commons/CustomTabBar/CustomTabBar";
import { GameTabs, renderGameScene } from "./GameTabView.data";

const GameTabView = () => {

  const [index, setIndex] = useState(0);

  const routes = Object.values(GameTabs).reduce(
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
      navigationState={{ index, routes }}
      renderScene={renderGameScene}
      onIndexChange={setIndex}
      renderTabBar={(props) => <CustomTabBar {...props} scrollEnabled />}
    />
  )
}

export default GameTabView