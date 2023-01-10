import { SocialMediaNames } from "../../../components/screens/connected/ProfileScreen/ProfileHeader/ProfileHeader.data"

export type Channel = {
  __typename: "Channel",
  socialMedias: ChannelSocialMedia[],
  home: {
    preferences: {
      heroPreset: string
    }
  }
}

export type ChannelSocialMedia = {
  id: string,
  name: SocialMediaNames,
  title: string,
  url: string
}