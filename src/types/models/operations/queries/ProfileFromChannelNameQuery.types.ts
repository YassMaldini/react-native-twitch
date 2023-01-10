import { Channel } from "../../gql/channel.types"
import { ResponseExtensions } from "../../gql/extensions.types"
import { User } from "../../gql/user.types"

export interface ProfileFromChannelNameQueryResponse extends ResponseExtensions {
  data: {
    user: ProfileFromChannelNameUser,
  }
}

export interface ProfileFromChannelNameUser extends User {
  channelMetadata: Channel;
  primaryColorHex: string;
}