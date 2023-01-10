import { useTheme } from "@shopify/restyle"
import { useSafeAreaFrame } from "react-native-safe-area-context"
import { TabBar, TabBarProps } from "react-native-tab-view"
import { Theme } from "../../../utils/theme/theme"

export const CustomTabBar = (props: TabBarProps<any>) => {
  const theme = useTheme<Theme>()
  const layout = useSafeAreaFrame()

  return (
    <TabBar
      {...props}
      scrollEnabled={true}
      activeColor={theme.colors.twitchPurple}
      layout={layout}
      gap={20}
      style={{
        width: layout.width - theme.spacing.sToStoM,
        backgroundColor: theme.colors.primaryBackground,
        marginHorizontal: theme.spacing.sToStoM
      }}
      tabStyle={{
        width: 'auto',
        minHeight: 32,
        paddingHorizontal: theme.spacing.s,
      }}
      indicatorContainerStyle={{
        backgroundColor: theme.colors.primaryBackground
      }}
      indicatorStyle={{
        backgroundColor: theme.colors.twitchPurple,
        height: 3
      }}
      labelStyle={{
        textTransform: 'capitalize',
        fontFamily: 'Roobert-SemiBold',
        fontSize: 16
      }}
    />
  )
}