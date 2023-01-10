import { CommonIcons, IconProps, TwitchIcons } from "./Icon.types";

// icons from real twitch app
import ArrowLeftIcon from "../../../../assets/vectors/from_twitch_app/arrow_left.svg"
import ArrowRightIcon from "../../../../assets/vectors/from_twitch_app/arrow_right.svg"
import BanIcon from "../../../../assets/vectors/from_twitch_app/ban.svg"
import CelebrationIcon from "../../../../assets/vectors/from_twitch_app/celebration.svg"
import DiscordIcon from "../../../../assets/vectors/from_twitch_app/discord.svg"
import DropsIcon from "../../../../assets/vectors/from_twitch_app/drops.svg"
import FacebookIcon from "../../../../assets/vectors/from_twitch_app/facebook.svg"
import FollowIcon from "../../../../assets/vectors/from_twitch_app/follow.svg"
import GithubIcon from "../../../../assets/vectors/from_twitch_app/github.svg"
import InstagramIcon from "../../../../assets/vectors/from_twitch_app/instagram.svg"
import MoonFilledIcon from "../../../../assets/vectors/from_twitch_app/moon_filled.svg"
import NotInterestedIcon from "../../../../assets/vectors/from_twitch_app/not_interested.svg"
import ReportIcon from "../../../../assets/vectors/from_twitch_app/report.svg"
import SearchHistoryIcon from "../../../../assets/vectors/from_twitch_app/search_history.svg"
import SettingsIcon from "../../../../assets/vectors/from_twitch_app/settings.svg"
import SubStarIcon from "../../../../assets/vectors/from_twitch_app/sub_star.svg"
import TiktokIcon from "../../../../assets/vectors/from_twitch_app/tiktok.svg"
import TwitterIcon from "../../../../assets/vectors/from_twitch_app/twitter.svg"
import UnfollowIcon from "../../../../assets/vectors/from_twitch_app/unfollow.svg"
import UserChannelIcon from "../../../../assets/vectors/from_twitch_app/user_channel.svg"
import UserIcon from "../../../../assets/vectors/from_twitch_app/user.svg"
import WhisperIcon from "../../../../assets/vectors/from_twitch_app/whisper.svg"
import YoutubeIcon from "../../../../assets/vectors/from_twitch_app/youtube.svg"

// common icons
import OptionsIcon from "../../../../assets/vectors/options.svg"

export const Icons = Object.freeze({
  [TwitchIcons.ArrowLeft]: ArrowLeftIcon,
  [TwitchIcons.ArrowRight]: ArrowRightIcon,
  [TwitchIcons.Ban]: BanIcon,
  [TwitchIcons.Celebration]: CelebrationIcon,
  [TwitchIcons.Discord]: DiscordIcon,
  [TwitchIcons.Drops]: DropsIcon,
  [TwitchIcons.Facebook]: FacebookIcon,
  [TwitchIcons.Follow]: FollowIcon,
  [TwitchIcons.Github]: GithubIcon,
  [TwitchIcons.Instagram]: InstagramIcon,
  [TwitchIcons.MoonFilled]: MoonFilledIcon,
  [TwitchIcons.NotInterested]: NotInterestedIcon,
  [TwitchIcons.Report]: ReportIcon,
  [TwitchIcons.SearchHistory]: SearchHistoryIcon,
  [TwitchIcons.Settings]: SettingsIcon,
  [TwitchIcons.SubStar]: SubStarIcon,
  [TwitchIcons.Tiktok]: TiktokIcon,
  [TwitchIcons.Twitter]: TwitterIcon,
  [TwitchIcons.Unfollow]: UnfollowIcon,
  [TwitchIcons.UserChannel]: UserChannelIcon,
  [TwitchIcons.User]: UserIcon,
  [TwitchIcons.Whisper]: WhisperIcon,
  [TwitchIcons.Youtube]: YoutubeIcon,

  [CommonIcons.Options]: OptionsIcon
})

// const Icon = ({ name }: IconProps) => BanIcon

// export default Icon