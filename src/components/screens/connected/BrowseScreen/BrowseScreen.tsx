import { useNavigation } from "@react-navigation/native"
import NavBar from "../../../commons/NavBar/NavBar"
import SafeAreaContainer from "../../../commons/SafeAreaContainer/SafeAreaContainer"
import SelectableTabs from "../../../commons/SelectableTabs/SelectableTabs"
import Text from "../../../designSystem/Text/Text"
import { BrowseScreenProps } from "./BrowseScreen.types"
import CategoriesBox from "./CategoriesBox/CategoriesBox"
import LiveChannelsBox from "./LiveChannelsBox/LiveChannelsBox"

const data = [
  {
    label: 'Categories',
    component: <CategoriesBox />
  },
  {
    label: 'Live Channels',
    component: <LiveChannelsBox />
  }
]

const BrowseScreen = () => {
  const navigation = useNavigation<BrowseScreenProps['navigation']>()

  return (
    <SafeAreaContainer>
      <NavBar {...{ navigation }} />
      <Text variant="title" marginBottom="m">Browse</Text>
      <SelectableTabs {...{ data }} />
    </SafeAreaContainer>
  )
}

export default BrowseScreen