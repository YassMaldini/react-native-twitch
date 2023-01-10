import { useNavigation, useRoute } from "@react-navigation/native"
import SafeAreaContainer from "../../../commons/SafeAreaContainer/SafeAreaContainer"
import Box from "../../../designSystem/Box/Box"
import Pressable from "../../../designSystem/Pressable/Pressable"
import { SvgIcon } from "../../../designSystem/SvgIcon/SvgIcon"
import Text from "../../../designSystem/Text/Text"
import LeftArrowIcon from "../../../../../assets/vectors/left-arrow.svg"
import { useTheme } from "@shopify/restyle"
import { Theme } from "../../../../utils/theme/theme"
import { VodListScreenProps } from "./VodListScreen.types"
import { FlashList } from "@shopify/flash-list"
import LargeVideoListCard from "../../../commons/VideoList/VideoListCard/LargeVideoListCard/LargeVideoListCard"

const VodListScreen = () => {
  const { params } = useRoute<VodListScreenProps['route']>()
  const { title, itemsList } = params

  const navigation = useNavigation()

  const theme = useTheme<Theme>()

  const ICON_SIZE = 22

  const userDisplayName = itemsList[0].node.owner.displayName

  return (
    <SafeAreaContainer>
      <Box 
        flexDirection="row" 
        alignItems="center" 
        justifyContent="space-between"
        paddingHorizontal="xs"
        paddingBottom="s"
      >
        <Pressable 
          onPress={() => navigation.goBack()}
          padding="xs" 
        >
          <SvgIcon 
            icon={LeftArrowIcon}
            width={ICON_SIZE}
            height={ICON_SIZE}
            color="primaryText"
          />
        </Pressable>
        <Box alignItems="center">
          <Text fontSize={16} fontFamily="Roobert-SemiBold">{userDisplayName}</Text>
          <Text textTransform="uppercase" color="secondaryText" fontFamily="Roobert-SemiBold">
            {title}
          </Text>
        </Box>
        <Box width={ICON_SIZE + theme.spacing.xs} />
      </Box>
      <Box flex={1}>
        <FlashList 
          data={itemsList}
          renderItem={({ item, index }) => (
            <LargeVideoListCard
              key={index}
              video={item.node}
            />
          )}
          estimatedItemSize={276}
        />
      </Box>
    </SafeAreaContainer>
  )
}

export default VodListScreen