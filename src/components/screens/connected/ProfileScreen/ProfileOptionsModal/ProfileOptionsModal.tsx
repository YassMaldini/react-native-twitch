import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useContext, useRef } from "react";
import BottomModalItem from "../../../../commons/BottomModalItem/BottomModalItem"
import { BottomModalItemSizes } from "../../../../commons/BottomModalItem/BottomModalItem.types";
import BottomModal from "../../../../designSystem/BottomModal/BottomModal"
import { ProfileScreenContext } from "../ProfileScreen.context";

import WhisperIcon from "../../../../../../assets/vectors/from_twitch_app/whisper.svg"
import { ProfileOptionsModalProps } from "./ProfileOptionsModal.types";

const ProfileOptionsModal = ({ ref }: ProfileOptionsModalProps) => {
  const { user } = useContext(ProfileScreenContext)

  return (
    <BottomModal snapPoints={['80%']} {...{ ref }}>
      <BottomModalItem 
        icon={WhisperIcon} 
        size={BottomModalItemSizes.Small}
        isFirst
      >
        {`Whisper ${user?.displayName}`}
      </BottomModalItem>
    </BottomModal>
  )
}

export default ProfileOptionsModal