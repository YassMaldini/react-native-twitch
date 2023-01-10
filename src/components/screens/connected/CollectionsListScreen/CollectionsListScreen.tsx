import { useNavigation, useRoute } from "@react-navigation/native"
import SafeAreaContainer from "../../../commons/SafeAreaContainer/SafeAreaContainer"
import Box from "../../../designSystem/Box/Box"
import Button from "../../../designSystem/Button/Button"
import Pressable from "../../../designSystem/Pressable/Pressable"
import { SvgIcon } from "../../../designSystem/SvgIcon/SvgIcon"
import Text from "../../../designSystem/Text/Text"
import LeftArrowIcon from "../../../../../assets/vectors/left-arrow.svg"
import { useTheme } from "@shopify/restyle"
import { Theme } from "../../../../utils/theme/theme"
import { CollectionsListScreenProps } from "./CollectionsListScreen.types"
import { FlashList } from "@shopify/flash-list"
import LargeCollectionListCard from "../../../commons/CollectionsList/LargeCollectionListCard/LargeCollectionListCard"

const CollectionsListScreen = () => {
  const { params } = useRoute<CollectionsListScreenProps['route']>()
  const { collectionsList } = params

  const navigation = useNavigation()

  const theme = useTheme<Theme>()

  const ICON_SIZE = 24

  return (
    <SafeAreaContainer>
      <Box 
        flexDirection="row" 
        alignItems="center" 
        justifyContent="space-between"
        paddingHorizontal="xs"
        paddingBottom="s"
      >
        <Pressable padding="xs">
          <SvgIcon 
            icon={LeftArrowIcon}
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
        </Pressable>
        <Box alignItems="center">
          <Text fontSize={16} fontFamily="Roobert-SemiBold">BlitzStream</Text>
          <Text color="secondaryText" fontFamily="Roobert-SemiBold">
            COLLECTIONS
          </Text>
        </Box>
        <Box width={ICON_SIZE + theme.spacing.xs} />
      </Box>
      <Box flex={1}>
        <FlashList
          data={collectionsList}
          renderItem={({ item, index }) => (
            <LargeCollectionListCard
              key={index}
              collection={item.node}
            />
          )}
          estimatedItemSize={276}
        />
      </Box>
    </SafeAreaContainer>
  )
}

export default CollectionsListScreen