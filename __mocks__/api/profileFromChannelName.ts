import { SocialMediaNames } from "../../src/components/screens/connected/ProfileScreen/ProfileHeader/ProfileHeader.data";
import { ProfileFromChannelNameQueryResponse } from "../../src/types/models/operations/queries/ProfileFromChannelNameQuery.types";

export const profileFromChannelName: ProfileFromChannelNameQueryResponse = {
  "data": {
    "user": {
      "__typename": "User",
      "stream": null,
      "channelId": "7601562",
      "profileViewCount": null,
      "followers": {
        "totalCount": 864851
      },
      "description": "Chess.com is the world’s #1 chess community with millions of chess players and fans. Join today!",
      "login": "chess",
      "displayName": "Chess",
      "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/e6bb8945-a942-498c-9ce3-6fa5b6367085-profile_image-300x300.png",
      "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/73861ee5-1231-4c22-b39f-543242e6dc29-profile_banner-480.png",
      "roles": {
        "isPartner": true,
        "isAffiliate": false
      },
      "lastBroadcast": {
        "startedAt": "2022-12-18T23:41:11.857821Z"
      },
      "broadcastSettings": {
        "isMature": false
      },
      "channelMetadata": {
        "__typename": "Channel",
        "socialMedias": [
          {
            "id": "235425e2-b009-44a0-a5dc-3b873cc61b3a",
            "name": "twitter" as SocialMediaNames,
            "title": "Twitter",
            "url": "https://twitter.com/chesscom"
          },
          {
            "id": "56a947a6-d2de-4f85-8d74-3b8c596858ca",
            "name": "facebook" as SocialMediaNames,
            "title": "Facebook",
            "url": "https://www.facebook.com/chess/"
          },
          {
            "id": "f53a5b25-fa27-4e89-890a-2de794af3367",
            "name": "instagram" as SocialMediaNames,
            "title": "Instagram",
            "url": "https://www.instagram.com/wwwchesscom/"
          },
          {
            "id": "7b6e0d3c-89b6-4f55-8724-db5cd02e5d8a",
            "name": "youtube" as SocialMediaNames,
            "title": "Youtube",
            "url": "https://www.youtube.com/chess"
          },
          {
            "id": "ca7a1dc9-e484-4836-aaf6-8edf05d1b0f6",
            "name": "discord" as SocialMediaNames,
            "title": "Discord",
            "url": "https://discord.gg/a8xdPNC"
          }
        ],
        "home": {
          "preferences": {
            "heroPreset": "PRESET_2"
          }
        }
      },
      "primaryColorHex": "529A2A"
    }
  },
  "extensions": {
    "durationMilliseconds": 49,
    "operationName": "ProfileFromChannelNameQuery",
    "requestID": "01GMTN4T8690PFM6ZMJTXSCXRV"
  }
}

export const profileFromChannelName2: ProfileFromChannelNameQueryResponse = {
  "data": {
    "user": {
      "__typename": "User",
      "stream": {
        "id": "40211597192",
        "game": {
          "id": "493549",
          "name": "Frostpunk"
        }
      },
      "channelId": "469724446",
      "profileViewCount": null,
      "followers": {
        "totalCount": 37459
      },
      "description": "Si vous souhaitez me saluer Pressez \"!A\" ",
      "login": "pressea",
      "displayName": "Pressea",
      "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/f0168ffa-1eb5-4540-b81c-d19dc32ad8ff-profile_image-300x300.png",
      "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/0ca75c2a-c7a3-42e4-b814-693155ac90d2-profile_banner-480.jpeg",
      "roles": {
        "isPartner": true,
        "isAffiliate": false
      },
      "lastBroadcast": {
        "startedAt": "2022-12-21T11:55:39.786214Z"
      },
      "broadcastSettings": {
        "isMature": false
      },
      "channelMetadata": {
        "__typename": "Channel",
        "socialMedias": [
          {
            "id": "7112b121-31cc-43b7-b8d4-759338399680",
            "name": "instagram" as SocialMediaNames,
            "title": "Instagram",
            "url": "https://www.instagram.com/_pressea/"
          },
          {
            "id": "424d167a-54d5-461f-9f58-c132dafcccd0",
            "name": "discord" as SocialMediaNames,
            "title": "Discord ",
            "url": "https://discord.gg/hN7EF2tECK"
          },
          {
            "id": "acc4778b-db52-43a9-b96c-69a636669f54",
            "name": "twitter" as SocialMediaNames,
            "title": "Twitter",
            "url": "https://twitter.com/Pressea_"
          },
          {
            "id": "d8e37478-334a-4b93-b93a-391789eb8e1b",
            "name": "youtube" as SocialMediaNames,
            "title": "Youtube",
            "url": "https://www.youtube.com/channel/UCaRxF7gpeg2KwfD7CRKtCFQ"
          }
        ],
        "home": {
          "preferences": {
            "heroPreset": "PRESET_2"
          }
        }
      },
      "primaryColorHex": "1F0000"
    }
  },
  "extensions": {
    "durationMilliseconds": 69,
    "operationName": "ProfileFromChannelIdQuery",
    "requestID": "01GMTN910T9YAJ5DF40S46M9P8"
  }
}