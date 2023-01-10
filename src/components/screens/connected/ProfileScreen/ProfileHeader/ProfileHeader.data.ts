import { ChannelSocialMedia } from "../../../../../types/models/gql/channel.types"

import TwitterIcon from "../../../../../../assets/vectors/from_twitch_app/twitter.svg"
import FacebookIcon from "../../../../../../assets/vectors/from_twitch_app/facebook.svg"
import DiscordIcon from "../../../../../../assets/vectors/from_twitch_app/discord.svg"
import InstagramIcon from "../../../../../../assets/vectors/from_twitch_app/instagram.svg"
import YoutubeIcon from "../../../../../../assets/vectors/from_twitch_app/youtube.svg"
import TiktokIcon from "../../../../../../assets/vectors/from_twitch_app/tiktok.svg"

export enum SocialMediaNames {
  Instagram = 'instagram',
  Facebook = 'facebook',
  Twitter = 'twitter',
  Discord = 'discord',
  Youtube = 'youtube',
  Tiktok = 'tiktok'
}

export const SocialMediaIcons = Object.freeze({
  [SocialMediaNames.Twitter]: TwitterIcon,
  [SocialMediaNames.Facebook]: FacebookIcon,
  [SocialMediaNames.Discord]: DiscordIcon,
  [SocialMediaNames.Instagram]: InstagramIcon,
  [SocialMediaNames.Youtube]: YoutubeIcon,
  [SocialMediaNames.Tiktok]: TiktokIcon
})