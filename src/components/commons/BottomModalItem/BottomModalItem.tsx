import Pressable from '../../designSystem/Pressable/Pressable';
import Text from '../../designSystem/Text/Text';
import { BOTTOM_MODAL_ITEM_COLORS } from './BottomModalItem.theme';
import { BottomModalItemColors, BottomModalItemProps, BottomModalItemSizes } from './BottomModalItem.types';
import LargeBottomModalItem from './LargeBottomModalItem/LargeBottomModalItem';
import MediumBottomModalItem from './MediumBottomModalItem/MediumBottomModalItem';
import SmallBottomModalItem from './SmallBottomModalItem/SmallBottomModalItem';

const BottomModalItem = ({ 
  size, 
  color = BottomModalItemColors.Default,
  isFirst, 
  isLast,
  isAlone,
  ...rest 
}: BottomModalItemProps) => {

  const currentColor = BOTTOM_MODAL_ITEM_COLORS[color];

  switch (size) {
    case BottomModalItemSizes.Small:
      return (
        <SmallBottomModalItem 
          color={currentColor}
          {...(isFirst && {
            borderTopLeftRadius: 's',
            borderTopRightRadius: 's'
          })} 
          {...(isLast && {
            borderBottomLeftRadius: 's',
            borderBottomRightRadius: 's'
          })} 
          {...(isAlone && {
            borderRadius: 's'
          })} 
          {...(
            Boolean(isLast || isAlone) ?
            {
              marginBottom: 'm'
            } : 
            {
              borderBottomWidth: 1,
              borderBottomColor: 'highlightBackground'
            }
          )}
          {...rest} 
        />
      )
    case BottomModalItemSizes.Medium:
      return (
        <MediumBottomModalItem 
          {...(isFirst && {
            borderTopLeftRadius: 's',
            borderTopRightRadius: 's'
          })} 
          {...(isLast && {
            borderBottomLeftRadius: 's',
            borderBottomRightRadius: 's'
          })} 
          {...(isAlone && {
            borderRadius: 's'
          })} 
          {...(
            Boolean(isLast || isAlone) ?
            {
              marginBottom: 'm'
            } : 
            {
              borderBottomWidth: 1,
              borderBottomColor: 'highlightBackground'
            }
          )}
          {...rest} 
        />
      )
    case BottomModalItemSizes.Large:
      return (
        <LargeBottomModalItem 
          {...(isFirst && {
            borderTopLeftRadius: 's',
            borderTopRightRadius: 's'
          })} 
          {...(isLast && {
            borderBottomLeftRadius: 's',
            borderBottomRightRadius: 's'
          })} 
          {...(isAlone && {
            borderRadius: 's'
          })} 
          {...(
            Boolean(isLast || isAlone) ?
            {
              marginBottom: 'm'
            } : 
            {
              borderBottomWidth: 1,
              borderBottomColor: 'highlightBackground'
            }
          )}
          {...rest} 
        />
      )
    default:
      return null
  }
};

export default BottomModalItem;
