import { Stream } from "./stream.types"
import { ViewedVideosConnection } from "./video.types"

export type User = {
  __typename: "User",
  bannerImageURL: string | null,
  chatColor?: string | null,
  createdAt?: string,
  description: string | null,
  displayName: string,
  channelId?: string,
  hasTurbo?: boolean,
  id?: string,
  login: string,
  profileImageURL: string,
  roles: {
    isStaff?: string | null,
    isPartner?: boolean,
    isAffiliate?: boolean
  },
  accountHealth?: {
    isVerifiedEmail: boolean,
    isEmailReusable: boolean
  },
  phoneNumber?: string | null,
  hasStreamed?: boolean,
  creatorReferralLinks?: string | null,
  settings?: {
    hasTwoFactorEnabled: boolean
  },
  chatUISettings?: {
    isReadableChatColorsEnabled: null,
    isEmoteAnimationsEnabled: null,
    isEmoteAnimationsSettingCalloutDismissed: null
  },
  stream?: Stream | Partial<Stream> | null,
  viewedVideos?: ViewedVideosConnection,
  profileViewCount?: number | null,
  followers?: {
    totalCount: number
  }
  lastBroadcast?: {
    startedAt: string | Date | null
  }
  broadcastSettings?: {
    isMature?: boolean
  }
  self?: {
    follower?: {
      notificationSettings?: {
        isEnabled: boolean
      },
      followedAt?: string
    } | null,
    canFollow?: boolean,
    subscriptionBenefit?: any | null
  }
}

export type UserEdge = {
  node: User;
}