import {
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import { useTheme } from '@shopify/restyle';
import { forwardRef, RefObject, useCallback, useMemo } from 'react';

import { Platform } from 'react-native';
import { BottomModalProps } from './BottomModal.types';
import Box from '../Box/Box';
import { Theme } from '../../../utils/theme/theme';
import Text from '../Text/Text';
import Pressable from '../Pressable/Pressable';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

const BottomModal = forwardRef<BottomSheetModal, BottomModalProps>(({ children, snapPoints, title, ...rest }, ref) => {
  const theme = useTheme<Theme>();

  const initialSnapPoints = useMemo(() => ['50%'], []);

  const { animatedHandleHeight, animatedSnapPoints, animatedContentHeight, handleContentLayout } =
    useBottomSheetDynamicSnapPoints(initialSnapPoints);

  return (
    <BottomSheetModal
      {...{ ref }}
      index={0}
      snapPoints={snapPoints || animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      enablePanDownToClose
      enableDismissOnClose
      backgroundStyle={{
        backgroundColor: theme.colors.secondaryBackground,
      }}
      handleStyle={{
        backgroundColor: theme.colors.secondaryBackground,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
      }}
      handleIndicatorStyle={{
        backgroundColor: theme.colors.secondaryText,
        width: 40,
        ...(title && {
          height: 0
        })
      }}
      {...rest}
    >
      <BottomSheetView testID="bottomSheet" onLayout={handleContentLayout}>
        <Box
          flex={1}
          backgroundColor="secondaryBackground"
          // paddingBottom={Platform.OS === 'android' ? 'xxs' : 'm'}
          paddingHorizontal="sToStoM"
          {...(!title && {
            paddingVertical: 'sToStoM'
          })}
        >
          {title &&
            <Box
              flexDirection="row"
              justifyContent="center"
              position="relative"
            >
              <Text
                fontSize={16}
                marginBottom="l"
                alignSelf="center"
                fontFamily="Roobert-SemiBold"
              >
                Account
              </Text>
              <Box position="absolute" right={0}>
                <Pressable 
                  hitSlop={10}
                  onPress={() => {
                    (ref as RefObject<BottomSheetModalMethods>).current?.dismiss()
                  }}
                >
                  <Text
                    fontSize={16}
                    alignSelf="center"
                    fontFamily="Roobert-SemiBold"
                    color="gray2"
                  >
                    Done
                  </Text>
                </Pressable>
              </Box>
            </Box>
          }
          {children}
        </Box>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default BottomModal;
