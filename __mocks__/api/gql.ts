import { ConsentQueryResponse } from "../../src/types/models/operations/ConsentQuery.types";
import { CurrentUserFollowsResponse } from "../../src/types/models/operations/CurrentUserFollows.types";
import { FollowedContentFirstPageQueryResponse } from "../../src/types/models/operations/FollowedContentFirstPageQuery.types";
import { GetBlockedUsersResponse } from "../../src/types/models/operations/GetBlockedUsers";
import { GlobalBadgesResponse } from "../../src/types/models/operations/GlobalBadges.types";
import { LoggedInUserQueryResponse } from "../../src/types/models/operations/LoggedInUserQuery.types";
import { OnsiteNotificationsSummaryQueryResponse } from "../../src/types/models/operations/OnsiteNotificationsSummaryQuery.types";
import { StreamModelQueryResponse } from "../../src/types/models/operations/StreamModelQuery.types";
import { UnacknowledgedSubscriptionsQueryResponse } from "../../src/types/models/operations/UnacknowledgedSubscriptionsQuery.types";
import { UserbyLoginQueryResponse } from "../../src/types/models/operations/UserbyLoginQuery.types";

export const res: Array<
  FollowedContentFirstPageQueryResponse |
  LoggedInUserQueryResponse |
  GlobalBadgesResponse |
  GetBlockedUsersResponse |
  StreamModelQueryResponse |
  CurrentUserFollowsResponse |
  UserbyLoginQueryResponse |
  OnsiteNotificationsSummaryQueryResponse |
  ConsentQueryResponse |
  UnacknowledgedSubscriptionsQueryResponse
> = [
  {
    "data": {
      "currentUser": {
        "followedGames": {
          "nodes": [
            {
              "__typename": "Game",
              "id": "1678052513",
              "name": "Call of Duty: Modern Warfare II",
              "viewersCount": 12665,
              "followersCount": 995799,
              "displayName": "Call of Duty: Modern Warfare II",
              "broadcastersCount": 3534,
              "boxArtURL": "https://static-cdn.jtvnw.net/ttv-boxart/1678052513_IGDB-285x380.jpg",
              "gameTags": [
                {
                  "__typename": "Tag",
                  "id": "523fe736-fa95-44c7-b22f-13008ca2172c",
                  "localizedName": "Shooter",
                  "tagName": "Shooter",
                  "isAutomated": false,
                  "isLanguageTag": false,
                  "localizedDescription": "For games that feature elements consistent with the Shooter genre",
                  "scope": "CATEGORY"
                },
                {
                  "__typename": "Tag",
                  "id": "4d1eaa36-f750-4862-b7e9-d0a13970d535",
                  "localizedName": "Action",
                  "tagName": "Action",
                  "isAutomated": false,
                  "isLanguageTag": false,
                  "localizedDescription": "For games that feature elements consistent with the Action genre",
                  "scope": "CATEGORY"
                },
                {
                  "__typename": "Tag",
                  "id": "a69f7ffb-ddda-4c05-8d7d-f0b24975a2c3",
                  "localizedName": "FPS",
                  "tagName": "FPS",
                  "isAutomated": false,
                  "isLanguageTag": false,
                  "localizedDescription": "For games that feature elements consistent with the First-Person Shooter genre",
                  "scope": "CATEGORY"
                },
                {
                  "__typename": "Tag",
                  "id": "19bd45f9-3e97-4913-993d-6ec0bd914b66",
                  "localizedName": "gameawardnominees",
                  "tagName": "gameawardnominees",
                  "isAutomated": false,
                  "isLanguageTag": false,
                  "localizedDescription": "internal do not translate",
                  "scope": "CATEGORY"
                }
              ],
              "coverURL": null
            },
            {
              "__typename": "Game",
              "id": "743",
              "name": "Chess",
              "viewersCount": 2615,
              "followersCount": 2166975,
              "displayName": "Chess",
              "broadcastersCount": 62,
              "boxArtURL": "https://static-cdn.jtvnw.net/ttv-boxart/743-285x380.jpg",
              "gameTags": [
                {
                  "__typename": "Tag",
                  "id": "857fce92-df0c-4c8c-8c60-28e0c5f7d8ae",
                  "localizedName": "Strategy",
                  "tagName": "Strategy",
                  "isAutomated": false,
                  "isLanguageTag": false,
                  "localizedDescription": "For games that feature elements consistent with the Strategy genre",
                  "scope": "CATEGORY"
                },
                {
                  "__typename": "Tag",
                  "id": "4d1eaa36-f750-4862-b7e9-d0a13970d535",
                  "localizedName": "Action",
                  "tagName": "Action",
                  "isAutomated": false,
                  "isLanguageTag": false,
                  "localizedDescription": "For games that feature elements consistent with the Action genre",
                  "scope": "CATEGORY"
                }
              ],
              "coverURL": null
            },
            {
              "__typename": "Game",
              "id": "512953",
              "name": "Elden Ring",
              "viewersCount": 5252,
              "followersCount": 886487,
              "displayName": "Elden Ring",
              "broadcastersCount": 447,
              "boxArtURL": "https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-285x380.jpg",
              "gameTags": [
                {
                  "__typename": "Tag",
                  "id": "9d38085e-ee62-4203-877b-81797052a18b",
                  "localizedName": "RPG",
                  "tagName": "RPG",
                  "isAutomated": false,
                  "isLanguageTag": false,
                  "localizedDescription": "For games that feature elements consistent with the Role-Playing Games genre",
                  "scope": "CATEGORY"
                },
                {
                  "__typename": "Tag",
                  "id": "4d1eaa36-f750-4862-b7e9-d0a13970d535",
                  "localizedName": "Action",
                  "tagName": "Action",
                  "isAutomated": false,
                  "isLanguageTag": false,
                  "localizedDescription": "For games that feature elements consistent with the Action genre",
                  "scope": "CATEGORY"
                },
                {
                  "__typename": "Tag",
                  "id": "a682f560-5186-4871-b97a-8d8e3f4308e9",
                  "localizedName": "Open World",
                  "tagName": "Open World",
                  "isAutomated": false,
                  "isLanguageTag": false,
                  "localizedDescription": "For games that feature open world, non-linear level design",
                  "scope": "CATEGORY"
                },
                {
                  "__typename": "Tag",
                  "id": "19bd45f9-3e97-4913-993d-6ec0bd914b66",
                  "localizedName": "gameawardnominees",
                  "tagName": "gameawardnominees",
                  "isAutomated": false,
                  "isLanguageTag": false,
                  "localizedDescription": "internal do not translate",
                  "scope": "CATEGORY"
                },
                {
                  "__typename": "Tag",
                  "id": "80427d95-bb46-42d3-bf4d-408e9bdca49a",
                  "localizedName": "Adventure Game",
                  "tagName": "Adventure Game",
                  "isAutomated": false,
                  "isLanguageTag": false,
                  "localizedDescription": "For games that feature elements consistent with the Adventure genre",
                  "scope": "CATEGORY"
                }
              ],
              "coverURL": null
            }
          ]
        },
        "followedLiveUsers": {
          "pageInfo": {
            "hasNextPage": false
          },
          "edges": [

          ]
        }
      }
    },
    "extensions": {
      "durationMilliseconds": 65,
      "operationName": "FollowedContentFirstPageQuery",
      "requestID": "01GKYBENJ4BT4EFF3JDXADTGKR"
    }
  },
  {
    "data": {
      "currentUser": {
        "__typename": "User",
        "id": "855484619",
        "login": "yassinho00",
        "displayName": "yassinho00",
        "chatColor": null,
        "description": null,
        "profileImageURL": "https://static-cdn.jtvnw.net/user-default-pictures-uv/294c98b5-e34d-42cd-a8f0-140b72fba9b0-profile_image-300x300.png",
        "bannerImageURL": null,
        "roles": {
          "isStaff": null,
          "isPartner": false,
          "isAffiliate": false
        },
        "createdAt": "2022-12-09T10:17:12.932105Z",
        "hasTurbo": false,
        "accountHealth": {
          "isVerifiedEmail": true,
          "isEmailReusable": false
        },
        "email": "y.berkane123@outlook.fr",
        "phoneNumber": null,
        "hasStreamed": false,
        "creatorReferralLinks": null,
        "settings": {
          "hasTwoFactorEnabled": false
        },
        "chatUISettings": {
          "isReadableChatColorsEnabled": null,
          "isEmoteAnimationsEnabled": null,
          "isEmoteAnimationsSettingCalloutDismissed": null
        }
      }
    },
    "extensions": {
      "durationMilliseconds": 46,
      "operationName": "LoggedInUserQuery",
      "requestID": "01GKYBENJ4BT4EFF3JDXADTGKR"
    }
  },
  {
    "data": {
      "badges": [
        {
          "__typename": "Badge",
          "setID": "artist-badge",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/4300a897-03dc-4e83-8c0e-c332fee7057f/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/4300a897-03dc-4e83-8c0e-c332fee7057f/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/4300a897-03dc-4e83-8c0e-c332fee7057f/3",
          "version": "1",
          "title": "Artist"
        },
        {
          "__typename": "Badge",
          "setID": "moments",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/cb40eb03-1015-45ba-8793-51c66a24a3d5/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/cb40eb03-1015-45ba-8793-51c66a24a3d5/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/cb40eb03-1015-45ba-8793-51c66a24a3d5/3",
          "version": "14",
          "title": "Moments Badge - Tier 14"
        },
        {
          "__typename": "Badge",
          "setID": "moments",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/5684d1bc-8132-4a4f-850c-18d3c5bd04f3/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/5684d1bc-8132-4a4f-850c-18d3c5bd04f3/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/5684d1bc-8132-4a4f-850c-18d3c5bd04f3/3",
          "version": "16",
          "title": "Moments Badge - Tier 16"
        },
        {
          "__typename": "Badge",
          "setID": "moments",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/6100cc6f-6b4b-4a3d-a55b-a5b34edb5ea1/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/6100cc6f-6b4b-4a3d-a55b-a5b34edb5ea1/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/6100cc6f-6b4b-4a3d-a55b-a5b34edb5ea1/3",
          "version": "19",
          "title": "Moments Badge - Tier 19"
        },
        {
          "__typename": "Badge",
          "setID": "moments",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/f9e3b4e4-200e-4045-bd71-3a6b480c23ae/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/f9e3b4e4-200e-4045-bd71-3a6b480c23ae/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/f9e3b4e4-200e-4045-bd71-3a6b480c23ae/3",
          "version": "6",
          "title": "Moments Badge - Tier 6"
        },
        {
          "__typename": "Badge",
          "setID": "moments",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/5cb2e584-1efd-469b-ab1d-4d1b59a944e7/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/5cb2e584-1efd-469b-ab1d-4d1b59a944e7/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/5cb2e584-1efd-469b-ab1d-4d1b59a944e7/3",
          "version": "9",
          "title": "Moments Badge - Tier 9"
        },
        {
          "__typename": "Badge",
          "setID": "moments",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/35eb3395-a1d3-4170-969a-86402ecfb11a/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/35eb3395-a1d3-4170-969a-86402ecfb11a/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/35eb3395-a1d3-4170-969a-86402ecfb11a/3",
          "version": "13",
          "title": "Moments Badge - Tier 13"
        },
        {
          "__typename": "Badge",
          "setID": "moments",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/3b08c1ee-0f77-451b-9226-b5b22d7f023c/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/3b08c1ee-0f77-451b-9226-b5b22d7f023c/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/3b08c1ee-0f77-451b-9226-b5b22d7f023c/3",
          "version": "17",
          "title": "Moments Badge - Tier 17"
        },
        {
          "__typename": "Badge",
          "setID": "moments",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/43399796-e74c-4741-a975-56202f0af30e/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/43399796-e74c-4741-a975-56202f0af30e/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/43399796-e74c-4741-a975-56202f0af30e/3",
          "version": "20",
          "title": "Moments Badge - Tier 20"
        },
        {
          "__typename": "Badge",
          "setID": "moments",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/d08658d7-205f-4f75-ad44-8c6e0acd8ef6/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/d08658d7-205f-4f75-ad44-8c6e0acd8ef6/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/d08658d7-205f-4f75-ad44-8c6e0acd8ef6/3",
          "version": "3",
          "title": "Moments Badge - Tier 3"
        },
        {
          "__typename": "Badge",
          "setID": "moments",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/fe5b5ddc-93e7-4aaf-9b3e-799cd41808b1/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/fe5b5ddc-93e7-4aaf-9b3e-799cd41808b1/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/fe5b5ddc-93e7-4aaf-9b3e-799cd41808b1/3",
          "version": "4",
          "title": "Moments Badge - Tier 4"
        },
        {
          "__typename": "Badge",
          "setID": "moments",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/f22286cd-6aa3-42ce-b3fb-10f5d18c4aa0/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/f22286cd-6aa3-42ce-b3fb-10f5d18c4aa0/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/f22286cd-6aa3-42ce-b3fb-10f5d18c4aa0/3",
          "version": "8",
          "title": "Moments Badge - Tier 8"
        },
        {
          "__typename": "Badge",
          "setID": "moments",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/bf370830-d79a-497b-81c6-a365b2b60dda/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/bf370830-d79a-497b-81c6-a365b2b60dda/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/bf370830-d79a-497b-81c6-a365b2b60dda/3",
          "version": "1",
          "title": "Moments Badge - Tier 1"
        },
        {
          "__typename": "Badge",
          "setID": "moments",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/f2c91d14-85c8-434b-a6c0-6d7930091150/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/f2c91d14-85c8-434b-a6c0-6d7930091150/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/f2c91d14-85c8-434b-a6c0-6d7930091150/3",
          "version": "12",
          "title": "Moments Badge - Tier 12"
        },
        {
          "__typename": "Badge",
          "setID": "moments",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/14057e75-080c-42da-a412-6232c6f33b68/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/14057e75-080c-42da-a412-6232c6f33b68/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/14057e75-080c-42da-a412-6232c6f33b68/3",
          "version": "18",
          "title": "Moments Badge - Tier 18"
        },
        {
          "__typename": "Badge",
          "setID": "moments",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/9c13f2b6-69cd-4537-91b4-4a8bd8b6b1fd/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/9c13f2b6-69cd-4537-91b4-4a8bd8b6b1fd/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/9c13f2b6-69cd-4537-91b4-4a8bd8b6b1fd/3",
          "version": "10",
          "title": "Moments Badge - Tier 10"
        },
        {
          "__typename": "Badge",
          "setID": "moments",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/7573e7a2-0f1f-4508-b833-d822567a1e03/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/7573e7a2-0f1f-4508-b833-d822567a1e03/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/7573e7a2-0f1f-4508-b833-d822567a1e03/3",
          "version": "11",
          "title": "Moments Badge - Tier 11"
        },
        {
          "__typename": "Badge",
          "setID": "moments",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/b241d667-280b-4183-96ae-2d0053631186/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/b241d667-280b-4183-96ae-2d0053631186/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/b241d667-280b-4183-96ae-2d0053631186/3",
          "version": "15",
          "title": "Moments Badge - Tier 15"
        },
        {
          "__typename": "Badge",
          "setID": "moments",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/fc46b10c-5b45-43fd-81ad-d5cb0de6d2f4/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/fc46b10c-5b45-43fd-81ad-d5cb0de6d2f4/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/fc46b10c-5b45-43fd-81ad-d5cb0de6d2f4/3",
          "version": "2",
          "title": "Moments Badge - Tier 2"
        },
        {
          "__typename": "Badge",
          "setID": "moments",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/c8a0d95a-856e-4097-9fc0-7765300a4f58/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/c8a0d95a-856e-4097-9fc0-7765300a4f58/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/c8a0d95a-856e-4097-9fc0-7765300a4f58/3",
          "version": "5",
          "title": "Moments Badge - Tier 5"
        },
        {
          "__typename": "Badge",
          "setID": "moments",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/a90a26a4-fdf7-4ac3-a782-76a413da16c1/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/a90a26a4-fdf7-4ac3-a782-76a413da16c1/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/a90a26a4-fdf7-4ac3-a782-76a413da16c1/3",
          "version": "7",
          "title": "Moments Badge - Tier 7"
        },
        {
          "__typename": "Badge",
          "setID": "anonymous-cheerer",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/ca3db7f7-18f5-487e-a329-cd0b538ee979/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/ca3db7f7-18f5-487e-a329-cd0b538ee979/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/ca3db7f7-18f5-487e-a329-cd0b538ee979/3",
          "version": "1",
          "title": "Anonymous Cheerer"
        },
        {
          "__typename": "Badge",
          "setID": "no_audio",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/aef2cd08-f29b-45a1-8c12-d44d7fd5e6f0/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/aef2cd08-f29b-45a1-8c12-d44d7fd5e6f0/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/aef2cd08-f29b-45a1-8c12-d44d7fd5e6f0/3",
          "version": "1",
          "title": "Watching without audio"
        },
        {
          "__typename": "Badge",
          "setID": "darkest-dungeon_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/52a98ddd-cc79-46a8-9fe3-30f8c719bc2d/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/52a98ddd-cc79-46a8-9fe3-30f8c719bc2d/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/52a98ddd-cc79-46a8-9fe3-30f8c719bc2d/3",
          "version": "1",
          "title": "Darkest Dungeon"
        },
        {
          "__typename": "Badge",
          "setID": "psychonauts_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/a9811799-dce3-475f-8feb-3745ad12b7ea/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/a9811799-dce3-475f-8feb-3745ad12b7ea/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/a9811799-dce3-475f-8feb-3745ad12b7ea/3",
          "version": "1",
          "title": "Psychonauts"
        },
        {
          "__typename": "Badge",
          "setID": "partner",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/3",
          "version": "1",
          "title": "Verified"
        },
        {
          "__typename": "Badge",
          "setID": "devil-may-cry-hd_2",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/408548fe-aa74-4d53-b5e9-960103d9b865/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/408548fe-aa74-4d53-b5e9-960103d9b865/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/408548fe-aa74-4d53-b5e9-960103d9b865/3",
          "version": "1",
          "title": "Devil May Cry HD Collection"
        },
        {
          "__typename": "Badge",
          "setID": "devil-may-cry-hd_3",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/df84c5bf-8d66-48e2-b9fb-c014cc9b3945/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/df84c5bf-8d66-48e2-b9fb-c014cc9b3945/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/df84c5bf-8d66-48e2-b9fb-c014cc9b3945/3",
          "version": "1",
          "title": "Devil May Cry HD Collection"
        },
        {
          "__typename": "Badge",
          "setID": "duelyst_6",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/c5e54a4b-0bf1-463a-874a-38524579aed0/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/c5e54a4b-0bf1-463a-874a-38524579aed0/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/c5e54a4b-0bf1-463a-874a-38524579aed0/3",
          "version": "1",
          "title": "Duelyst"
        },
        {
          "__typename": "Badge",
          "setID": "glhf-pledge",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/3158e758-3cb4-43c5-94b3-7639810451c5/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/3158e758-3cb4-43c5-94b3-7639810451c5/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/3158e758-3cb4-43c5-94b3-7639810451c5/3",
          "version": "1",
          "title": "GLHF Pledge"
        },
        {
          "__typename": "Badge",
          "setID": "duelyst_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/7d9c12f4-a2ac-4e88-8026-d1a330468282/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/7d9c12f4-a2ac-4e88-8026-d1a330468282/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/7d9c12f4-a2ac-4e88-8026-d1a330468282/3",
          "version": "1",
          "title": "Duelyst"
        },
        {
          "__typename": "Badge",
          "setID": "samusoffer_beta",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/aa960159-a7b8-417e-83c1-035e4bc2deb5/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/aa960159-a7b8-417e-83c1-035e4bc2deb5/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/aa960159-a7b8-417e-83c1-035e4bc2deb5/3",
          "version": "0",
          "title": "beta_title1"
        },
        {
          "__typename": "Badge",
          "setID": "tyranny_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/0c79afdf-28ce-4b0b-9e25-4f221c30bfde/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/0c79afdf-28ce-4b0b-9e25-4f221c30bfde/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/0c79afdf-28ce-4b0b-9e25-4f221c30bfde/3",
          "version": "1",
          "title": "Tyranny"
        },
        {
          "__typename": "Badge",
          "setID": "user-anniversary",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/ccbbedaa-f4db-4d0b-9c2a-375de7ad947c/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/ccbbedaa-f4db-4d0b-9c2a-375de7ad947c/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/ccbbedaa-f4db-4d0b-9c2a-375de7ad947c/3",
          "version": "1",
          "title": "Twitchiversary Badge"
        },
        {
          "__typename": "Badge",
          "setID": "axiom-verge_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/f209b747-45ee-42f6-8baf-ea7542633d10/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/f209b747-45ee-42f6-8baf-ea7542633d10/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/f209b747-45ee-42f6-8baf-ea7542633d10/3",
          "version": "1",
          "title": "Axiom Verge"
        },
        {
          "__typename": "Badge",
          "setID": "battlechefbrigade_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/24e32e67-33cd-4227-ad96-f0a7fc836107/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/24e32e67-33cd-4227-ad96-f0a7fc836107/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/24e32e67-33cd-4227-ad96-f0a7fc836107/3",
          "version": "1",
          "title": "Battle Chef Brigade"
        },
        {
          "__typename": "Badge",
          "setID": "this-war-of-mine_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/6a20f814-cb2c-414e-89cc-f8dd483e1785/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/6a20f814-cb2c-414e-89cc-f8dd483e1785/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/6a20f814-cb2c-414e-89cc-f8dd483e1785/3",
          "version": "1",
          "title": "This War of Mine"
        },
        {
          "__typename": "Badge",
          "setID": "moderator",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/3",
          "version": "1",
          "title": "Moderator"
        },
        {
          "__typename": "Badge",
          "setID": "twitchconNA2020",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/ed917c9a-1a45-4340-9c64-ca8be4348c51/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/ed917c9a-1a45-4340-9c64-ca8be4348c51/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/ed917c9a-1a45-4340-9c64-ca8be4348c51/3",
          "version": "1",
          "title": "TwitchCon 2020 - North America"
        },
        {
          "__typename": "Badge",
          "setID": "vip",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/3",
          "version": "1",
          "title": "VIP"
        },
        {
          "__typename": "Badge",
          "setID": "glitchcon2020",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/1d4b03b9-51ea-42c9-8f29-698e3c85be3d/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/1d4b03b9-51ea-42c9-8f29-698e3c85be3d/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/1d4b03b9-51ea-42c9-8f29-698e3c85be3d/3",
          "version": "1",
          "title": "GlitchCon 2020"
        },
        {
          "__typename": "Badge",
          "setID": "jackbox-party-pack_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/0f964fc1-f439-485f-a3c0-905294ee70e8/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/0f964fc1-f439-485f-a3c0-905294ee70e8/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/0f964fc1-f439-485f-a3c0-905294ee70e8/3",
          "version": "1",
          "title": "Jackbox Party Pack"
        },
        {
          "__typename": "Badge",
          "setID": "the-surge_3",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/0a8fc2d4-3125-4ccb-88db-e970dfbee189/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/0a8fc2d4-3125-4ccb-88db-e970dfbee189/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/0a8fc2d4-3125-4ccb-88db-e970dfbee189/3",
          "version": "1",
          "title": "The Surge"
        },
        {
          "__typename": "Badge",
          "setID": "bubsy-the-woolies_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/c8129382-1f4e-4d15-a8d2-48bdddba9b81/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/c8129382-1f4e-4d15-a8d2-48bdddba9b81/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/c8129382-1f4e-4d15-a8d2-48bdddba9b81/3",
          "version": "1",
          "title": "Bubsy: The Woolies Strike Back"
        },
        {
          "__typename": "Badge",
          "setID": "founder",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/511b78a9-ab37-472f-9569-457753bbe7d3/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/511b78a9-ab37-472f-9569-457753bbe7d3/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/511b78a9-ab37-472f-9569-457753bbe7d3/3",
          "version": "0",
          "title": "Founder"
        },
        {
          "__typename": "Badge",
          "setID": "bits-charity",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/a539dc18-ae19-49b0-98c4-8391a594332b/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/a539dc18-ae19-49b0-98c4-8391a594332b/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/a539dc18-ae19-49b0-98c4-8391a594332b/3",
          "version": "1",
          "title": "Direct Relief - Charity 2018"
        },
        {
          "__typename": "Badge",
          "setID": "okhlos_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/dc088bd6-8965-4907-a1a2-c0ba83874a7d/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/dc088bd6-8965-4907-a1a2-c0ba83874a7d/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/dc088bd6-8965-4907-a1a2-c0ba83874a7d/3",
          "version": "1",
          "title": "Okhlos"
        },
        {
          "__typename": "Badge",
          "setID": "60-seconds_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/1e7252f9-7e80-4d3d-ae42-319f030cca99/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/1e7252f9-7e80-4d3d-ae42-319f030cca99/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/1e7252f9-7e80-4d3d-ae42-319f030cca99/3",
          "version": "1",
          "title": "60 Seconds!"
        },
        {
          "__typename": "Badge",
          "setID": "hello_neighbor_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/030cab2c-5d14-11e7-8d91-43a5a4306286/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/030cab2c-5d14-11e7-8d91-43a5a4306286/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/030cab2c-5d14-11e7-8d91-43a5a4306286/3",
          "version": "1",
          "title": "Hello Neighbor"
        },
        {
          "__typename": "Badge",
          "setID": "twitchconNA2022",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/344d429a-0b34-48e5-a84c-14a1b5772a3a/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/344d429a-0b34-48e5-a84c-14a1b5772a3a/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/344d429a-0b34-48e5-a84c-14a1b5772a3a/3",
          "version": "1",
          "title": "TwitchCon 2022 - San Diego"
        },
        {
          "__typename": "Badge",
          "setID": "ambassador",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/2cbc339f-34f4-488a-ae51-efdf74f4e323/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/2cbc339f-34f4-488a-ae51-efdf74f4e323/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/2cbc339f-34f4-488a-ae51-efdf74f4e323/3",
          "version": "1",
          "title": "Twitch Ambassador"
        },
        {
          "__typename": "Badge",
          "setID": "brawlhalla_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/bf6d6579-ab02-4f0a-9f64-a51c37040858/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/bf6d6579-ab02-4f0a-9f64-a51c37040858/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/bf6d6579-ab02-4f0a-9f64-a51c37040858/3",
          "version": "1",
          "title": "Brawlhalla"
        },
        {
          "__typename": "Badge",
          "setID": "the-surge_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/c9f69d89-31c8-41aa-843b-fee956dfbe23/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/c9f69d89-31c8-41aa-843b-fee956dfbe23/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/c9f69d89-31c8-41aa-843b-fee956dfbe23/3",
          "version": "1",
          "title": "The Surge"
        },
        {
          "__typename": "Badge",
          "setID": "60-seconds_2",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/64513f7d-21dd-4a05-a699-d73761945cf9/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/64513f7d-21dd-4a05-a699-d73761945cf9/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/64513f7d-21dd-4a05-a699-d73761945cf9/3",
          "version": "1",
          "title": "60 Seconds!"
        },
        {
          "__typename": "Badge",
          "setID": "chatter-cs-go-2022",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/57b6bd6b-a1b5-4204-9e6c-eb8ed5831603/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/57b6bd6b-a1b5-4204-9e6c-eb8ed5831603/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/57b6bd6b-a1b5-4204-9e6c-eb8ed5831603/3",
          "version": "1",
          "title": "CS:GO Week Brazil 2022"
        },
        {
          "__typename": "Badge",
          "setID": "devil-may-cry-hd_4",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/af836b94-8ffd-4c0a-b7d8-a92fad5e3015/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/af836b94-8ffd-4c0a-b7d8-a92fad5e3015/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/af836b94-8ffd-4c0a-b7d8-a92fad5e3015/3",
          "version": "1",
          "title": "Devil May Cry HD Collection"
        },
        {
          "__typename": "Badge",
          "setID": "duelyst_5",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/290419b6-484a-47da-ad14-a99d6581f758/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/290419b6-484a-47da-ad14-a99d6581f758/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/290419b6-484a-47da-ad14-a99d6581f758/3",
          "version": "1",
          "title": "Duelyst"
        },
        {
          "__typename": "Badge",
          "setID": "rift_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/f939686b-2892-46a4-9f0d-5f582578173e/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/f939686b-2892-46a4-9f0d-5f582578173e/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/f939686b-2892-46a4-9f0d-5f582578173e/3",
          "version": "1",
          "title": "RIFT"
        },
        {
          "__typename": "Badge",
          "setID": "twitchcon2017",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/0964bed0-5c31-11e7-a90b-0739918f1d9b/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/0964bed0-5c31-11e7-a90b-0739918f1d9b/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/0964bed0-5c31-11e7-a90b-0739918f1d9b/3",
          "version": "1",
          "title": "TwitchCon 2017 - Long Beach"
        },
        {
          "__typename": "Badge",
          "setID": "1979-revolution_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/7833bb6e-d20d-48ff-a58d-67fe827a4f84/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/7833bb6e-d20d-48ff-a58d-67fe827a4f84/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/7833bb6e-d20d-48ff-a58d-67fe827a4f84/3",
          "version": "1",
          "title": "1979 Revolution"
        },
        {
          "__typename": "Badge",
          "setID": "admin",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/9ef7e029-4cdf-4d4d-a0d5-e2b3fb2583fe/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/9ef7e029-4cdf-4d4d-a0d5-e2b3fb2583fe/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/9ef7e029-4cdf-4d4d-a0d5-e2b3fb2583fe/3",
          "version": "1",
          "title": "Admin"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/4a0b90c4-e4ef-407f-84fe-36b14aebdbb6/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/4a0b90c4-e4ef-407f-84fe-36b14aebdbb6/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/4a0b90c4-e4ef-407f-84fe-36b14aebdbb6/3",
          "version": "200000",
          "title": "cheer 200000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/c3d218f5-1e45-419d-9c11-033a1ae54d3a/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/c3d218f5-1e45-419d-9c11-033a1ae54d3a/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/c3d218f5-1e45-419d-9c11-033a1ae54d3a/3",
          "version": "3500000",
          "title": "cheer 3500000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/79fe642a-87f3-40b1-892e-a341747b6e08/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/79fe642a-87f3-40b1-892e-a341747b6e08/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/79fe642a-87f3-40b1-892e-a341747b6e08/3",
          "version": "4000000",
          "title": "cheer 4000000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/73b5c3fb-24f9-4a82-a852-2f475b59411c/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/73b5c3fb-24f9-4a82-a852-2f475b59411c/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/73b5c3fb-24f9-4a82-a852-2f475b59411c/3",
          "version": "1",
          "title": "cheer 1"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/183f1fd8-aaf4-450c-a413-e53f839f0f82/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/183f1fd8-aaf4-450c-a413-e53f839f0f82/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/183f1fd8-aaf4-450c-a413-e53f839f0f82/3",
          "version": "1750000",
          "title": "cheer 1750000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/57cd97fc-3e9e-4c6d-9d41-60147137234e/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/57cd97fc-3e9e-4c6d-9d41-60147137234e/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/57cd97fc-3e9e-4c6d-9d41-60147137234e/3",
          "version": "5000",
          "title": "cheer 5000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/96f0540f-aa63-49e1-a8b3-259ece3bd098/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/96f0540f-aa63-49e1-a8b3-259ece3bd098/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/96f0540f-aa63-49e1-a8b3-259ece3bd098/3",
          "version": "100000",
          "title": "cheer 100000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/c4eba5b4-17a7-40a1-a668-bc1972c1e24d/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/c4eba5b4-17a7-40a1-a668-bc1972c1e24d/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/c4eba5b4-17a7-40a1-a668-bc1972c1e24d/3",
          "version": "1500000",
          "title": "cheer 1500000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/cf061daf-d571-4811-bcc2-c55c8792bc8f/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/cf061daf-d571-4811-bcc2-c55c8792bc8f/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/cf061daf-d571-4811-bcc2-c55c8792bc8f/3",
          "version": "2500000",
          "title": "cheer 2500000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/5671797f-5e9f-478c-a2b5-eb086c8928cf/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/5671797f-5e9f-478c-a2b5-eb086c8928cf/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/5671797f-5e9f-478c-a2b5-eb086c8928cf/3",
          "version": "3000000",
          "title": "cheer 3000000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/736d4156-ac67-4256-a224-3e6e915436db/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/736d4156-ac67-4256-a224-3e6e915436db/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/736d4156-ac67-4256-a224-3e6e915436db/3",
          "version": "4500000",
          "title": "cheer 4500000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/4d908059-f91c-4aef-9acb-634434f4c32e/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/4d908059-f91c-4aef-9acb-634434f4c32e/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/4d908059-f91c-4aef-9acb-634434f4c32e/3",
          "version": "600000",
          "title": "cheer 600000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/5ec2ee3e-5633-4c2a-8e77-77473fe409e6/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/5ec2ee3e-5633-4c2a-8e77-77473fe409e6/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/5ec2ee3e-5633-4c2a-8e77-77473fe409e6/3",
          "version": "800000",
          "title": "cheer 800000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/68af213b-a771-4124-b6e3-9bb6d98aa732/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/68af213b-a771-4124-b6e3-9bb6d98aa732/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/68af213b-a771-4124-b6e3-9bb6d98aa732/3",
          "version": "10000",
          "title": "cheer 10000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/ce217209-4615-4bf8-81e3-57d06b8b9dc7/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/ce217209-4615-4bf8-81e3-57d06b8b9dc7/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/ce217209-4615-4bf8-81e3-57d06b8b9dc7/3",
          "version": "1250000",
          "title": "cheer 1250000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/ac13372d-2e94-41d1-ae11-ecd677f69bb6/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/ac13372d-2e94-41d1-ae11-ecd677f69bb6/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/ac13372d-2e94-41d1-ae11-ecd677f69bb6/3",
          "version": "300000",
          "title": "cheer 300000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/7ea89c53-1a3b-45f9-9223-d97ae19089f2/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/7ea89c53-1a3b-45f9-9223-d97ae19089f2/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/7ea89c53-1a3b-45f9-9223-d97ae19089f2/3",
          "version": "2000000",
          "title": "cheer 2000000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/494d1c8e-c3b2-4d88-8528-baff57c9bd3f/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/494d1c8e-c3b2-4d88-8528-baff57c9bd3f/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/494d1c8e-c3b2-4d88-8528-baff57c9bd3f/3",
          "version": "1000000",
          "title": "cheer 1000000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/0d85a29e-79ad-4c63-a285-3acd2c66f2ba/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/0d85a29e-79ad-4c63-a285-3acd2c66f2ba/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/0d85a29e-79ad-4c63-a285-3acd2c66f2ba/3",
          "version": "1000",
          "title": "cheer 1000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/a8f393af-76e6-4aa2-9dd0-7dcc1c34f036/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/a8f393af-76e6-4aa2-9dd0-7dcc1c34f036/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/a8f393af-76e6-4aa2-9dd0-7dcc1c34f036/3",
          "version": "400000",
          "title": "cheer 400000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/088c58c6-7c38-45ba-8f73-63ef24189b84/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/088c58c6-7c38-45ba-8f73-63ef24189b84/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/088c58c6-7c38-45ba-8f73-63ef24189b84/3",
          "version": "900000",
          "title": "cheer 900000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/62310ba7-9916-4235-9eba-40110d67f85d/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/62310ba7-9916-4235-9eba-40110d67f85d/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/62310ba7-9916-4235-9eba-40110d67f85d/3",
          "version": "50000",
          "title": "cheer 50000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/a1d2a824-f216-4b9f-9642-3de8ed370957/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/a1d2a824-f216-4b9f-9642-3de8ed370957/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/a1d2a824-f216-4b9f-9642-3de8ed370957/3",
          "version": "700000",
          "title": "cheer 700000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/3f085f85-8d15-4a03-a829-17fca7bf1bc2/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/3f085f85-8d15-4a03-a829-17fca7bf1bc2/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/3f085f85-8d15-4a03-a829-17fca7bf1bc2/3",
          "version": "5000000",
          "title": "cheer 5000000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/ce491fa4-b24f-4f3b-b6ff-44b080202792/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/ce491fa4-b24f-4f3b-b6ff-44b080202792/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/ce491fa4-b24f-4f3b-b6ff-44b080202792/3",
          "version": "75000",
          "title": "cheer 75000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/09d93036-e7ce-431c-9a9e-7044297133f2/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/09d93036-e7ce-431c-9a9e-7044297133f2/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/09d93036-e7ce-431c-9a9e-7044297133f2/3",
          "version": "100",
          "title": "cheer 100"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/64ca5920-c663-4bd8-bfb1-751b4caea2dd/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/64ca5920-c663-4bd8-bfb1-751b4caea2dd/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/64ca5920-c663-4bd8-bfb1-751b4caea2dd/3",
          "version": "25000",
          "title": "cheer 25000"
        },
        {
          "__typename": "Badge",
          "setID": "bits",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/f6932b57-6a6e-4062-a770-dfbd9f4302e5/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/f6932b57-6a6e-4062-a770-dfbd9f4302e5/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/f6932b57-6a6e-4062-a770-dfbd9f4302e5/3",
          "version": "500000",
          "title": "cheer 500000"
        },
        {
          "__typename": "Badge",
          "setID": "broken-age_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/56885ed2-9a09-4c8e-8131-3eb9ec15af94/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/56885ed2-9a09-4c8e-8131-3eb9ec15af94/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/56885ed2-9a09-4c8e-8131-3eb9ec15af94/3",
          "version": "1",
          "title": "Broken Age"
        },
        {
          "__typename": "Badge",
          "setID": "twitchconEU2019",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/590eee9e-f04d-474c-90e7-b304d9e74b32/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/590eee9e-f04d-474c-90e7-b304d9e74b32/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/590eee9e-f04d-474c-90e7-b304d9e74b32/3",
          "version": "1",
          "title": "TwitchCon 2019 - Berlin"
        },
        {
          "__typename": "Badge",
          "setID": "battlechefbrigade_3",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/107ebb20-4fcd-449a-9931-cd3f81b84c70/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/107ebb20-4fcd-449a-9931-cd3f81b84c70/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/107ebb20-4fcd-449a-9931-cd3f81b84c70/3",
          "version": "1",
          "title": "Battle Chef Brigade"
        },
        {
          "__typename": "Badge",
          "setID": "broadcaster",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3",
          "version": "1",
          "title": "Broadcaster"
        },
        {
          "__typename": "Badge",
          "setID": "cuphead_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/4384659a-a2e3-11e7-a564-87f6b1288bab/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/4384659a-a2e3-11e7-a564-87f6b1288bab/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/4384659a-a2e3-11e7-a564-87f6b1288bab/3",
          "version": "1",
          "title": "Cuphead"
        },
        {
          "__typename": "Badge",
          "setID": "devil-may-cry-hd_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/633877d4-a91c-4c36-b75b-803f82b1352f/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/633877d4-a91c-4c36-b75b-803f82b1352f/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/633877d4-a91c-4c36-b75b-803f82b1352f/3",
          "version": "1",
          "title": "Devil May Cry HD Collection"
        },
        {
          "__typename": "Badge",
          "setID": "firewatch_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/b6bf4889-4902-49e2-9658-c0132e71c9c4/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/b6bf4889-4902-49e2-9658-c0132e71c9c4/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/b6bf4889-4902-49e2-9658-c0132e71c9c4/3",
          "version": "1",
          "title": "Firewatch"
        },
        {
          "__typename": "Badge",
          "setID": "turbo",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/bd444ec6-8f34-4bf9-91f4-af1e3428d80f/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/bd444ec6-8f34-4bf9-91f4-af1e3428d80f/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/bd444ec6-8f34-4bf9-91f4-af1e3428d80f/3",
          "version": "1",
          "title": "Turbo"
        },
        {
          "__typename": "Badge",
          "setID": "devilian_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/3cb92b57-1eef-451c-ac23-4d748128b2c5/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/3cb92b57-1eef-451c-ac23-4d748128b2c5/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/3cb92b57-1eef-451c-ac23-4d748128b2c5/3",
          "version": "1",
          "title": "Devilian"
        },
        {
          "__typename": "Badge",
          "setID": "duelyst_4",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/39e717a8-00bc-49cc-b6d4-3ea91ee1be25/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/39e717a8-00bc-49cc-b6d4-3ea91ee1be25/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/39e717a8-00bc-49cc-b6d4-3ea91ee1be25/3",
          "version": "1",
          "title": "Duelyst"
        },
        {
          "__typename": "Badge",
          "setID": "innerspace_2",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/fc7d6018-657a-40e4-9246-0acdc85886d1/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/fc7d6018-657a-40e4-9246-0acdc85886d1/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/fc7d6018-657a-40e4-9246-0acdc85886d1/3",
          "version": "1",
          "title": "Innerspace"
        },
        {
          "__typename": "Badge",
          "setID": "titan-souls_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/092a7ce2-709c-434f-8df4-a6b075ef867d/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/092a7ce2-709c-434f-8df4-a6b075ef867d/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/092a7ce2-709c-434f-8df4-a6b075ef867d/3",
          "version": "1",
          "title": "Titan Souls"
        },
        {
          "__typename": "Badge",
          "setID": "treasure-adventure-world_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/59810027-2988-4b0d-b88d-fc414c751305/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/59810027-2988-4b0d-b88d-fc414c751305/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/59810027-2988-4b0d-b88d-fc414c751305/3",
          "version": "1",
          "title": "Treasure Adventure World"
        },
        {
          "__typename": "Badge",
          "setID": "extension",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/ea8b0f8c-aa27-11e8-ba0c-1370ffff3854/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/ea8b0f8c-aa27-11e8-ba0c-1370ffff3854/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/ea8b0f8c-aa27-11e8-ba0c-1370ffff3854/3",
          "version": "1",
          "title": "Extension"
        },
        {
          "__typename": "Badge",
          "setID": "heavy-bullets_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/fc83b76b-f8b2-4519-9f61-6faf84eef4cd/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/fc83b76b-f8b2-4519-9f61-6faf84eef4cd/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/fc83b76b-f8b2-4519-9f61-6faf84eef4cd/3",
          "version": "1",
          "title": "Heavy Bullets"
        },
        {
          "__typename": "Badge",
          "setID": "overwatch-league-insider_2019A",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/ca980da1-3639-48a6-95a3-a03b002eb0e5/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/ca980da1-3639-48a6-95a3-a03b002eb0e5/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/ca980da1-3639-48a6-95a3-a03b002eb0e5/3",
          "version": "1",
          "title": "OWL All-Access Pass 2019"
        },
        {
          "__typename": "Badge",
          "setID": "overwatch-league-insider_2019A",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/ab7fa7a7-c2d9-403f-9f33-215b29b43ce4/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/ab7fa7a7-c2d9-403f-9f33-215b29b43ce4/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/ab7fa7a7-c2d9-403f-9f33-215b29b43ce4/3",
          "version": "2",
          "title": "OWL All-Access Pass 2019"
        },
        {
          "__typename": "Badge",
          "setID": "hype-train",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/fae4086c-3190-44d4-83c8-8ef0cbe1a515/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/fae4086c-3190-44d4-83c8-8ef0cbe1a515/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/fae4086c-3190-44d4-83c8-8ef0cbe1a515/3",
          "version": "1",
          "title": "Current Hype Train Conductor"
        },
        {
          "__typename": "Badge",
          "setID": "hype-train",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/9c8d038a-3a29-45ea-96d4-5031fb1a7a81/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/9c8d038a-3a29-45ea-96d4-5031fb1a7a81/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/9c8d038a-3a29-45ea-96d4-5031fb1a7a81/3",
          "version": "2",
          "title": "Former Hype Train Conductor"
        },
        {
          "__typename": "Badge",
          "setID": "overwatch-league-insider_2019B",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/c5860811-d714-4413-9433-d6b1c9fc803c/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/c5860811-d714-4413-9433-d6b1c9fc803c/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/c5860811-d714-4413-9433-d6b1c9fc803c/3",
          "version": "1",
          "title": "OWL All-Access Pass 2019"
        },
        {
          "__typename": "Badge",
          "setID": "overwatch-league-insider_2019B",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/75f05d4b-3042-415c-8b0b-e87620a24daf/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/75f05d4b-3042-415c-8b0b-e87620a24daf/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/75f05d4b-3042-415c-8b0b-e87620a24daf/3",
          "version": "2",
          "title": "OWL All-Access Pass 2019"
        },
        {
          "__typename": "Badge",
          "setID": "overwatch-league-insider_2019B",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/765a0dcf-2a94-43ff-9b9c-ef6c209b90cd/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/765a0dcf-2a94-43ff-9b9c-ef6c209b90cd/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/765a0dcf-2a94-43ff-9b9c-ef6c209b90cd/3",
          "version": "3",
          "title": "OWL All-Access Pass 2019"
        },
        {
          "__typename": "Badge",
          "setID": "overwatch-league-insider_2019B",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/a8ae0ccd-783d-460d-93ee-57c485c558a6/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/a8ae0ccd-783d-460d-93ee-57c485c558a6/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/a8ae0ccd-783d-460d-93ee-57c485c558a6/3",
          "version": "4",
          "title": "OWL All-Access Pass 2019"
        },
        {
          "__typename": "Badge",
          "setID": "overwatch-league-insider_2019B",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/be87fd6d-1560-4e33-9ba4-2401b58d901f/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/be87fd6d-1560-4e33-9ba4-2401b58d901f/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/be87fd6d-1560-4e33-9ba4-2401b58d901f/3",
          "version": "5",
          "title": "OWL All-Access Pass 2019"
        },
        {
          "__typename": "Badge",
          "setID": "staff",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/d97c37bd-a6f5-4c38-8f57-4e4bef88af34/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/d97c37bd-a6f5-4c38-8f57-4e4bef88af34/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/d97c37bd-a6f5-4c38-8f57-4e4bef88af34/3",
          "version": "1",
          "title": "Staff"
        },
        {
          "__typename": "Badge",
          "setID": "twitchcon2018",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/e68164e4-087d-4f62-81da-d3557efae3cb/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/e68164e4-087d-4f62-81da-d3557efae3cb/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/e68164e4-087d-4f62-81da-d3557efae3cb/3",
          "version": "1",
          "title": "TwitchCon 2018 - San Jose"
        },
        {
          "__typename": "Badge",
          "setID": "power-rangers",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/8843d2de-049f-47d5-9794-b6517903db61/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/8843d2de-049f-47d5-9794-b6517903db61/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/8843d2de-049f-47d5-9794-b6517903db61/3",
          "version": "4",
          "title": "Red Ranger"
        },
        {
          "__typename": "Badge",
          "setID": "power-rangers",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/06c85e34-477e-4939-9537-fd9978976042/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/06c85e34-477e-4939-9537-fd9978976042/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/06c85e34-477e-4939-9537-fd9978976042/3",
          "version": "5",
          "title": "White Ranger"
        },
        {
          "__typename": "Badge",
          "setID": "power-rangers",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/d6dca630-1ca4-48de-94e7-55ed0a24d8d1/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/d6dca630-1ca4-48de-94e7-55ed0a24d8d1/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/d6dca630-1ca4-48de-94e7-55ed0a24d8d1/3",
          "version": "6",
          "title": "Yellow Ranger"
        },
        {
          "__typename": "Badge",
          "setID": "power-rangers",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/9edf3e7f-62e4-40f5-86ab-7a646b10f1f0/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/9edf3e7f-62e4-40f5-86ab-7a646b10f1f0/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/9edf3e7f-62e4-40f5-86ab-7a646b10f1f0/3",
          "version": "0",
          "title": "Black Ranger"
        },
        {
          "__typename": "Badge",
          "setID": "power-rangers",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/1eeae8fe-5bc6-44ed-9c88-fb84d5e0df52/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/1eeae8fe-5bc6-44ed-9c88-fb84d5e0df52/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/1eeae8fe-5bc6-44ed-9c88-fb84d5e0df52/3",
          "version": "1",
          "title": "Blue Ranger"
        },
        {
          "__typename": "Badge",
          "setID": "power-rangers",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/21bbcd6d-1751-4d28-a0c3-0b72453dd823/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/21bbcd6d-1751-4d28-a0c3-0b72453dd823/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/21bbcd6d-1751-4d28-a0c3-0b72453dd823/3",
          "version": "2",
          "title": "Green Ranger"
        },
        {
          "__typename": "Badge",
          "setID": "power-rangers",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/5c58cb40-9028-4d16-af67-5bc0c18b745e/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/5c58cb40-9028-4d16-af67-5bc0c18b745e/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/5c58cb40-9028-4d16-af67-5bc0c18b745e/3",
          "version": "3",
          "title": "Pink Ranger"
        },
        {
          "__typename": "Badge",
          "setID": "battlerite_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/484ebda9-f7fa-4c67-b12b-c80582f3cc61/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/484ebda9-f7fa-4c67-b12b-c80582f3cc61/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/484ebda9-f7fa-4c67-b12b-c80582f3cc61/3",
          "version": "1",
          "title": "Battlerite"
        },
        {
          "__typename": "Badge",
          "setID": "getting-over-it_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/8d4e178c-81ec-4c71-af68-745b40733984/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/8d4e178c-81ec-4c71-af68-745b40733984/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/8d4e178c-81ec-4c71-af68-745b40733984/3",
          "version": "1",
          "title": "Getting Over It"
        },
        {
          "__typename": "Badge",
          "setID": "kingdom-new-lands_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/e3c2a67e-ef80-4fe3-ae41-b933cd11788a/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/e3c2a67e-ef80-4fe3-ae41-b933cd11788a/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/e3c2a67e-ef80-4fe3-ae41-b933cd11788a/3",
          "version": "1",
          "title": "Kingdom: New Lands"
        },
        {
          "__typename": "Badge",
          "setID": "twitchconAmsterdam2020",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/ed917c9a-1a45-4340-9c64-ca8be4348c51/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/ed917c9a-1a45-4340-9c64-ca8be4348c51/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/ed917c9a-1a45-4340-9c64-ca8be4348c51/3",
          "version": "1",
          "title": "TwitchCon 2020 - Amsterdam"
        },
        {
          "__typename": "Badge",
          "setID": "anomaly-2_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/d1d1ad54-40a6-492b-882e-dcbdce5fa81e/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/d1d1ad54-40a6-492b-882e-dcbdce5fa81e/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/d1d1ad54-40a6-492b-882e-dcbdce5fa81e/3",
          "version": "1",
          "title": "Anomaly 2"
        },
        {
          "__typename": "Badge",
          "setID": "duelyst_7",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/cf508179-3183-4987-97e0-56ca44babb9f/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/cf508179-3183-4987-97e0-56ca44babb9f/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/cf508179-3183-4987-97e0-56ca44babb9f/3",
          "version": "1",
          "title": "Duelyst"
        },
        {
          "__typename": "Badge",
          "setID": "raiden-v-directors-cut_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/441b50ae-a2e3-11e7-8a3e-6bff0c840878/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/441b50ae-a2e3-11e7-8a3e-6bff0c840878/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/441b50ae-a2e3-11e7-8a3e-6bff0c840878/3",
          "version": "1",
          "title": "Raiden V"
        },
        {
          "__typename": "Badge",
          "setID": "duelyst_2",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/1938acd3-2d18-471d-b1af-44f2047c033c/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/1938acd3-2d18-471d-b1af-44f2047c033c/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/1938acd3-2d18-471d-b1af-44f2047c033c/3",
          "version": "1",
          "title": "Duelyst"
        },
        {
          "__typename": "Badge",
          "setID": "vga-champ-2017",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/03dca92e-dc69-11e7-ac5b-9f942d292dc7/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/03dca92e-dc69-11e7-ac5b-9f942d292dc7/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/03dca92e-dc69-11e7-ac5b-9f942d292dc7/3",
          "version": "1",
          "title": "2017 VGA Champ"
        },
        {
          "__typename": "Badge",
          "setID": "bits-leader",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/8bedf8c3-7a6d-4df2-b62f-791b96a5dd31/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/8bedf8c3-7a6d-4df2-b62f-791b96a5dd31/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/8bedf8c3-7a6d-4df2-b62f-791b96a5dd31/3",
          "version": "1",
          "title": "Bits Leader 1"
        },
        {
          "__typename": "Badge",
          "setID": "bits-leader",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/f04baac7-9141-4456-a0e7-6301bcc34138/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/f04baac7-9141-4456-a0e7-6301bcc34138/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/f04baac7-9141-4456-a0e7-6301bcc34138/3",
          "version": "2",
          "title": "Bits Leader 2"
        },
        {
          "__typename": "Badge",
          "setID": "bits-leader",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/f1d2aab6-b647-47af-965b-84909cf303aa/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/f1d2aab6-b647-47af-965b-84909cf303aa/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/f1d2aab6-b647-47af-965b-84909cf303aa/3",
          "version": "3",
          "title": "Bits Leader 3"
        },
        {
          "__typename": "Badge",
          "setID": "clip-champ",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/f38976e0-ffc9-11e7-86d6-7f98b26a9d79/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/f38976e0-ffc9-11e7-86d6-7f98b26a9d79/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/f38976e0-ffc9-11e7-86d6-7f98b26a9d79/3",
          "version": "1",
          "title": "Power Clipper"
        },
        {
          "__typename": "Badge",
          "setID": "getting-over-it_2",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/bb620b42-e0e1-4373-928e-d4a732f99ccb/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/bb620b42-e0e1-4373-928e-d4a732f99ccb/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/bb620b42-e0e1-4373-928e-d4a732f99ccb/3",
          "version": "1",
          "title": "Getting Over It"
        },
        {
          "__typename": "Badge",
          "setID": "twitchconEU2022",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/e4744003-50b7-4eb8-9b47-a7b1616a30c6/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/e4744003-50b7-4eb8-9b47-a7b1616a30c6/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/e4744003-50b7-4eb8-9b47-a7b1616a30c6/3",
          "version": "1",
          "title": "TwitchCon 2022 - Amsterdam"
        },
        {
          "__typename": "Badge",
          "setID": "twitchconNA2019",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/569c829d-c216-4f56-a191-3db257ed657c/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/569c829d-c216-4f56-a191-3db257ed657c/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/569c829d-c216-4f56-a191-3db257ed657c/3",
          "version": "1",
          "title": "TwitchCon 2019 - San Diego"
        },
        {
          "__typename": "Badge",
          "setID": "60-seconds_3",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/f4306617-0f96-476f-994e-5304f81bcc6e/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/f4306617-0f96-476f-994e-5304f81bcc6e/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/f4306617-0f96-476f-994e-5304f81bcc6e/3",
          "version": "1",
          "title": "60 Seconds!"
        },
        {
          "__typename": "Badge",
          "setID": "H1Z1_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/fc71386c-86cd-11e7-a55d-43f591dc0c71/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/fc71386c-86cd-11e7-a55d-43f591dc0c71/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/fc71386c-86cd-11e7-a55d-43f591dc0c71/3",
          "version": "1",
          "title": "H1Z1"
        },
        {
          "__typename": "Badge",
          "setID": "deceit_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/b14fef48-4ff9-4063-abf6-579489234fe9/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/b14fef48-4ff9-4063-abf6-579489234fe9/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/b14fef48-4ff9-4063-abf6-579489234fe9/3",
          "version": "1",
          "title": "Deceit"
        },
        {
          "__typename": "Badge",
          "setID": "eso_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/18647a68-a35f-48d7-bf97-ae5deb6b277d/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/18647a68-a35f-48d7-bf97-ae5deb6b277d/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/18647a68-a35f-48d7-bf97-ae5deb6b277d/3",
          "version": "1",
          "title": "Elder Scrolls Online"
        },
        {
          "__typename": "Badge",
          "setID": "no_video",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/199a0dba-58f3-494e-a7fc-1fa0a1001fb8/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/199a0dba-58f3-494e-a7fc-1fa0a1001fb8/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/199a0dba-58f3-494e-a7fc-1fa0a1001fb8/3",
          "version": "1",
          "title": "Listening only"
        },
        {
          "__typename": "Badge",
          "setID": "frozen-synapse_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/d4bd464d-55ea-4238-a11d-744f034e2375/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/d4bd464d-55ea-4238-a11d-744f034e2375/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/d4bd464d-55ea-4238-a11d-744f034e2375/3",
          "version": "1",
          "title": "Frozen Synapse"
        },
        {
          "__typename": "Badge",
          "setID": "overwatch-league-insider_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/51e9e0aa-12e3-48ce-b961-421af0787dad/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/51e9e0aa-12e3-48ce-b961-421af0787dad/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/51e9e0aa-12e3-48ce-b961-421af0787dad/3",
          "version": "1",
          "title": "OWL All-Access Pass 2018"
        },
        {
          "__typename": "Badge",
          "setID": "superhot_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/c5a06922-83b5-40cb-885f-bcffd3cd6c68/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/c5a06922-83b5-40cb-885f-bcffd3cd6c68/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/c5a06922-83b5-40cb-885f-bcffd3cd6c68/3",
          "version": "1",
          "title": "Superhot"
        },
        {
          "__typename": "Badge",
          "setID": "twitchbot",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/df9095f6-a8a0-4cc2-bb33-d908c0adffb8/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/df9095f6-a8a0-4cc2-bb33-d908c0adffb8/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/df9095f6-a8a0-4cc2-bb33-d908c0adffb8/3",
          "version": "1",
          "title": "AutoMod"
        },
        {
          "__typename": "Badge",
          "setID": "warcraft",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/c4816339-bad4-4645-ae69-d1ab2076a6b0/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/c4816339-bad4-4645-ae69-d1ab2076a6b0/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/c4816339-bad4-4645-ae69-d1ab2076a6b0/3",
          "version": "alliance",
          "title": "Alliance"
        },
        {
          "__typename": "Badge",
          "setID": "warcraft",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/de8b26b6-fd28-4e6c-bc89-3d597343800d/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/de8b26b6-fd28-4e6c-bc89-3d597343800d/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/de8b26b6-fd28-4e6c-bc89-3d597343800d/3",
          "version": "horde",
          "title": "Horde"
        },
        {
          "__typename": "Badge",
          "setID": "creator-cs-go-2022",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/a2ea6df9-ac0a-4956-bfe9-e931f50b94fa/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/a2ea6df9-ac0a-4956-bfe9-e931f50b94fa/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/a2ea6df9-ac0a-4956-bfe9-e931f50b94fa/3",
          "version": "1",
          "title": "CS:GO Week Brazil 2022"
        },
        {
          "__typename": "Badge",
          "setID": "duelyst_3",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/344c07fc-1632-47c6-9785-e62562a6b760/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/344c07fc-1632-47c6-9785-e62562a6b760/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/344c07fc-1632-47c6-9785-e62562a6b760/3",
          "version": "1",
          "title": "Duelyst"
        },
        {
          "__typename": "Badge",
          "setID": "innerspace_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/97532ccd-6a07-42b5-aecf-3458b6b3ebea/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/97532ccd-6a07-42b5-aecf-3458b6b3ebea/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/97532ccd-6a07-42b5-aecf-3458b6b3ebea/3",
          "version": "1",
          "title": "Innerspace"
        },
        {
          "__typename": "Badge",
          "setID": "overwatch-league-insider_2018B",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/34ec1979-d9bb-4706-ad15-464de814a79d/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/34ec1979-d9bb-4706-ad15-464de814a79d/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/34ec1979-d9bb-4706-ad15-464de814a79d/3",
          "version": "1",
          "title": "OWL All-Access Pass 2018"
        },
        {
          "__typename": "Badge",
          "setID": "starbound_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/e838e742-0025-4646-9772-18a87ba99358/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/e838e742-0025-4646-9772-18a87ba99358/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/e838e742-0025-4646-9772-18a87ba99358/3",
          "version": "1",
          "title": "Starbound"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/8343ada7-3451-434e-91c4-e82bdcf54460/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/8343ada7-3451-434e-91c4-e82bdcf54460/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/8343ada7-3451-434e-91c4-e82bdcf54460/3",
          "version": "100",
          "title": "100 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/b18852ba-65d2-4b84-97d2-aeb6c44a0956/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/b18852ba-65d2-4b84-97d2-aeb6c44a0956/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/b18852ba-65d2-4b84-97d2-aeb6c44a0956/3",
          "version": "3000",
          "title": "3000 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/6c4783cd-0aba-4e75-a7a4-f48a70b665b0/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/6c4783cd-0aba-4e75-a7a4-f48a70b665b0/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/6c4783cd-0aba-4e75-a7a4-f48a70b665b0/3",
          "version": "350",
          "title": "350 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/ee113e59-c839-4472-969a-1e16d20f3962/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/ee113e59-c839-4472-969a-1e16d20f3962/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/ee113e59-c839-4472-969a-1e16d20f3962/3",
          "version": "5",
          "title": "5 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/193d86f6-83e1-428c-9638-d6ca9e408166/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/193d86f6-83e1-428c-9638-d6ca9e408166/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/193d86f6-83e1-428c-9638-d6ca9e408166/3",
          "version": "900",
          "title": "900 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/7ce130bd-6f55-40cc-9231-e2a4cb712962/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/7ce130bd-6f55-40cc-9231-e2a4cb712962/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/7ce130bd-6f55-40cc-9231-e2a4cb712962/3",
          "version": "950",
          "title": "950 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/b593d68a-f8fb-4516-a09a-18cce955402c/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/b593d68a-f8fb-4516-a09a-18cce955402c/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/b593d68a-f8fb-4516-a09a-18cce955402c/3",
          "version": "450",
          "title": "450 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/60e9504c-8c3d-489f-8a74-314fb195ad8d/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/60e9504c-8c3d-489f-8a74-314fb195ad8d/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/60e9504c-8c3d-489f-8a74-314fb195ad8d/3",
          "version": "500",
          "title": "500 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/4a9acdc7-30be-4dd1-9898-fc9e42b3d304/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/4a9acdc7-30be-4dd1-9898-fc9e42b3d304/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/4a9acdc7-30be-4dd1-9898-fc9e42b3d304/3",
          "version": "700",
          "title": "700 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/cc924aaf-dfd4-4f3f-822a-f5a87eb24069/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/cc924aaf-dfd4-4f3f-822a-f5a87eb24069/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/cc924aaf-dfd4-4f3f-822a-f5a87eb24069/3",
          "version": "850",
          "title": "850 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/bfb7399a-c632-42f7-8d5f-154610dede81/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/bfb7399a-c632-42f7-8d5f-154610dede81/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/bfb7399a-c632-42f7-8d5f-154610dede81/3",
          "version": "1000",
          "title": "1000 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/4e8b3a32-1513-44ad-8a12-6c90232c77f9/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/4e8b3a32-1513-44ad-8a12-6c90232c77f9/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/4e8b3a32-1513-44ad-8a12-6c90232c77f9/3",
          "version": "2000",
          "title": "2000 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/052a5d41-f1cc-455c-bc7b-fe841ffaf17f/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/052a5d41-f1cc-455c-bc7b-fe841ffaf17f/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/052a5d41-f1cc-455c-bc7b-fe841ffaf17f/3",
          "version": "25",
          "title": "25 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/efbf3c93-ecfa-4b67-8d0a-1f732fb07397/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/efbf3c93-ecfa-4b67-8d0a-1f732fb07397/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/efbf3c93-ecfa-4b67-8d0a-1f732fb07397/3",
          "version": "4000",
          "title": "4000 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/d775275d-fd19-4914-b63a-7928a22135c3/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/d775275d-fd19-4914-b63a-7928a22135c3/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/d775275d-fd19-4914-b63a-7928a22135c3/3",
          "version": "5000",
          "title": "5000 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/eeabf43c-8e4c-448d-9790-4c2172c57944/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/eeabf43c-8e4c-448d-9790-4c2172c57944/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/eeabf43c-8e4c-448d-9790-4c2172c57944/3",
          "version": "650",
          "title": "650 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/9c1fb96d-0579-43d7-ba94-94672eaef63a/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/9c1fb96d-0579-43d7-ba94-94672eaef63a/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/9c1fb96d-0579-43d7-ba94-94672eaef63a/3",
          "version": "800",
          "title": "800 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/a5ef6c17-2e5b-4d8f-9b80-2779fd722414/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/a5ef6c17-2e5b-4d8f-9b80-2779fd722414/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/a5ef6c17-2e5b-4d8f-9b80-2779fd722414/3",
          "version": "1",
          "title": "Sub Gifter"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/d333288c-65d7-4c7b-b691-cdd7b3484bf8/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/d333288c-65d7-4c7b-b691-cdd7b3484bf8/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/d333288c-65d7-4c7b-b691-cdd7b3484bf8/3",
          "version": "10",
          "title": "10 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/024d2563-1794-43ed-b8dc-33df3efae900/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/024d2563-1794-43ed-b8dc-33df3efae900/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/024d2563-1794-43ed-b8dc-33df3efae900/3",
          "version": "550",
          "title": "550 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/ca17277c-53e5-422b-8bb4-7c5dcdb0ac67/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/ca17277c-53e5-422b-8bb4-7c5dcdb0ac67/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/ca17277c-53e5-422b-8bb4-7c5dcdb0ac67/3",
          "version": "750",
          "title": "750 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/514845ba-0fc3-4771-bce1-14d57e91e621/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/514845ba-0fc3-4771-bce1-14d57e91e621/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/514845ba-0fc3-4771-bce1-14d57e91e621/3",
          "version": "150",
          "title": "150 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/6f4cab6b-def9-4d99-ad06-90b0013b28c8/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/6f4cab6b-def9-4d99-ad06-90b0013b28c8/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/6f4cab6b-def9-4d99-ad06-90b0013b28c8/3",
          "version": "400",
          "title": "400 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/c4a29737-e8a5-4420-917a-314a447f083e/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/c4a29737-e8a5-4420-917a-314a447f083e/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/c4a29737-e8a5-4420-917a-314a447f083e/3",
          "version": "50",
          "title": "50 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/c6b1893e-8059-4024-b93c-39c84b601732/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/c6b1893e-8059-4024-b93c-39c84b601732/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/c6b1893e-8059-4024-b93c-39c84b601732/3",
          "version": "200",
          "title": "200 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/3ecc3aab-09bf-4823-905e-3a4647171fc1/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/3ecc3aab-09bf-4823-905e-3a4647171fc1/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/3ecc3aab-09bf-4823-905e-3a4647171fc1/3",
          "version": "600",
          "title": "600 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/cd479dc0-4a15-407d-891f-9fd2740bddda/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/cd479dc0-4a15-407d-891f-9fd2740bddda/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/cd479dc0-4a15-407d-891f-9fd2740bddda/3",
          "version": "250",
          "title": "250 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gifter",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/9e1bb24f-d238-4078-871a-ac401b76ecf2/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/9e1bb24f-d238-4078-871a-ac401b76ecf2/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/9e1bb24f-d238-4078-871a-ac401b76ecf2/3",
          "version": "300",
          "title": "300 Gift Subs"
        },
        {
          "__typename": "Badge",
          "setID": "subscriber",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/e8984705-d091-4e54-8241-e53b30a84b0e/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/e8984705-d091-4e54-8241-e53b30a84b0e/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/e8984705-d091-4e54-8241-e53b30a84b0e/3",
          "version": "3",
          "title": "3-Month Subscriber"
        },
        {
          "__typename": "Badge",
          "setID": "subscriber",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/2d2485f6-d19b-4daa-8393-9493b019156b/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/2d2485f6-d19b-4daa-8393-9493b019156b/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/2d2485f6-d19b-4daa-8393-9493b019156b/3",
          "version": "4",
          "title": "6-Month Subscriber"
        },
        {
          "__typename": "Badge",
          "setID": "subscriber",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/b4e6b13a-a76f-4c56-87e1-9375a7aaa610/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/b4e6b13a-a76f-4c56-87e1-9375a7aaa610/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/b4e6b13a-a76f-4c56-87e1-9375a7aaa610/3",
          "version": "5",
          "title": "9-Month Subscriber"
        },
        {
          "__typename": "Badge",
          "setID": "subscriber",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/ed51a614-2c44-4a60-80b6-62908436b43a/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/ed51a614-2c44-4a60-80b6-62908436b43a/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/ed51a614-2c44-4a60-80b6-62908436b43a/3",
          "version": "6",
          "title": "6-Month Subscriber"
        },
        {
          "__typename": "Badge",
          "setID": "subscriber",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/3",
          "version": "0",
          "title": "Subscriber"
        },
        {
          "__typename": "Badge",
          "setID": "subscriber",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/3",
          "version": "1",
          "title": "Subscriber"
        },
        {
          "__typename": "Badge",
          "setID": "subscriber",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/25a03e36-2bb2-4625-bd37-d6d9d406238d/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/25a03e36-2bb2-4625-bd37-d6d9d406238d/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/25a03e36-2bb2-4625-bd37-d6d9d406238d/3",
          "version": "2",
          "title": "2-Month Subscriber"
        },
        {
          "__typename": "Badge",
          "setID": "global_mod",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/9384c43e-4ce7-4e94-b2a1-b93656896eba/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/9384c43e-4ce7-4e94-b2a1-b93656896eba/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/9384c43e-4ce7-4e94-b2a1-b93656896eba/3",
          "version": "1",
          "title": "Global Moderator"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gift-leader",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/21656088-7da2-4467-acd2-55220e1f45ad/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/21656088-7da2-4467-acd2-55220e1f45ad/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/21656088-7da2-4467-acd2-55220e1f45ad/3",
          "version": "1",
          "title": "Gifter Leader 1"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gift-leader",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/0d9fe96b-97b7-4215-b5f3-5328ebad271c/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/0d9fe96b-97b7-4215-b5f3-5328ebad271c/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/0d9fe96b-97b7-4215-b5f3-5328ebad271c/3",
          "version": "2",
          "title": "Gifter Leader 2"
        },
        {
          "__typename": "Badge",
          "setID": "sub-gift-leader",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/4c6e4497-eed9-4dd3-ac64-e0599d0a63e5/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/4c6e4497-eed9-4dd3-ac64-e0599d0a63e5/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/4c6e4497-eed9-4dd3-ac64-e0599d0a63e5/3",
          "version": "3",
          "title": "Gifter Leader 3"
        },
        {
          "__typename": "Badge",
          "setID": "battlechefbrigade_2",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/ef1e96e8-a0f9-40b6-87af-2977d3c004bb/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/ef1e96e8-a0f9-40b6-87af-2977d3c004bb/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/ef1e96e8-a0f9-40b6-87af-2977d3c004bb/3",
          "version": "1",
          "title": "Battle Chef Brigade"
        },
        {
          "__typename": "Badge",
          "setID": "game-developer",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/85856a4a-eb7d-4e26-a43e-d204a977ade4/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/85856a4a-eb7d-4e26-a43e-d204a977ade4/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/85856a4a-eb7d-4e26-a43e-d204a977ade4/3",
          "version": "1",
          "title": "Game Developer"
        },
        {
          "__typename": "Badge",
          "setID": "the-surge_2",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/2c4d7e95-e138-4dde-a783-7956a8ecc408/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/2c4d7e95-e138-4dde-a783-7956a8ecc408/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/2c4d7e95-e138-4dde-a783-7956a8ecc408/3",
          "version": "1",
          "title": "The Surge"
        },
        {
          "__typename": "Badge",
          "setID": "enter-the-gungeon_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/53c9af0b-84f6-4f9d-8c80-4bc51321a37d/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/53c9af0b-84f6-4f9d-8c80-4bc51321a37d/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/53c9af0b-84f6-4f9d-8c80-4bc51321a37d/3",
          "version": "1",
          "title": "Enter The Gungeon"
        },
        {
          "__typename": "Badge",
          "setID": "frozen-cortext_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/2015f087-01b5-4a01-a2bb-ecb4d6be5240/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/2015f087-01b5-4a01-a2bb-ecb4d6be5240/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/2015f087-01b5-4a01-a2bb-ecb4d6be5240/3",
          "version": "1",
          "title": "Frozen Cortext"
        },
        {
          "__typename": "Badge",
          "setID": "predictions",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/df95317d-9568-46de-a421-a8520edb9349/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/df95317d-9568-46de-a421-a8520edb9349/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/df95317d-9568-46de-a421-a8520edb9349/3",
          "version": "blue-4",
          "title": "Predicted Blue (4)"
        },
        {
          "__typename": "Badge",
          "setID": "predictions",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/46b1537e-d8b0-4c0d-8fba-a652e57b9df0/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/46b1537e-d8b0-4c0d-8fba-a652e57b9df0/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/46b1537e-d8b0-4c0d-8fba-a652e57b9df0/3",
          "version": "blue-6",
          "title": "Predicted Blue (6)"
        },
        {
          "__typename": "Badge",
          "setID": "predictions",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/4416dfd7-db97-44a0-98e7-40b4e250615e/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/4416dfd7-db97-44a0-98e7-40b4e250615e/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/4416dfd7-db97-44a0-98e7-40b4e250615e/3",
          "version": "blue-8",
          "title": "Predicted Blue (8)"
        },
        {
          "__typename": "Badge",
          "setID": "predictions",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/fc74bd90-2b74-4f56-8e42-04d405e10fae/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/fc74bd90-2b74-4f56-8e42-04d405e10fae/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/fc74bd90-2b74-4f56-8e42-04d405e10fae/3",
          "version": "blue-9",
          "title": "Predicted Blue (9)"
        },
        {
          "__typename": "Badge",
          "setID": "predictions",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/144f77a2-e324-4a6b-9c17-9304fa193a27/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/144f77a2-e324-4a6b-9c17-9304fa193a27/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/144f77a2-e324-4a6b-9c17-9304fa193a27/3",
          "version": "gray-1",
          "title": "Predicted Gray (1)"
        },
        {
          "__typename": "Badge",
          "setID": "predictions",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/097a4b14-b458-47eb-91b6-fe74d3dbb3f5/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/097a4b14-b458-47eb-91b6-fe74d3dbb3f5/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/097a4b14-b458-47eb-91b6-fe74d3dbb3f5/3",
          "version": "gray-2",
          "title": "Predicted Gray (2)"
        },
        {
          "__typename": "Badge",
          "setID": "predictions",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/07cd34b2-c6a1-45f5-8d8a-131e3c8b2279/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/07cd34b2-c6a1-45f5-8d8a-131e3c8b2279/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/07cd34b2-c6a1-45f5-8d8a-131e3c8b2279/3",
          "version": "blue-7",
          "title": "Predicted Blue (7)"
        },
        {
          "__typename": "Badge",
          "setID": "predictions",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/4b76d5f2-91cc-4400-adf2-908a1e6cfd1e/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/4b76d5f2-91cc-4400-adf2-908a1e6cfd1e/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/4b76d5f2-91cc-4400-adf2-908a1e6cfd1e/3",
          "version": "pink-2",
          "title": "Predicted Pink (2)"
        },
        {
          "__typename": "Badge",
          "setID": "predictions",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/88758be8-de09-479b-9383-e3bb6d9e6f06/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/88758be8-de09-479b-9383-e3bb6d9e6f06/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/88758be8-de09-479b-9383-e3bb6d9e6f06/3",
          "version": "blue-5",
          "title": "Predicted Blue (5)"
        },
        {
          "__typename": "Badge",
          "setID": "predictions",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/e33d8b46-f63b-4e67-996d-4a7dcec0ad33/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/e33d8b46-f63b-4e67-996d-4a7dcec0ad33/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/e33d8b46-f63b-4e67-996d-4a7dcec0ad33/3",
          "version": "blue-1",
          "title": "Predicted Blue (1)"
        },
        {
          "__typename": "Badge",
          "setID": "predictions",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/072ae906-ecf7-44f1-ac69-a5b2261d8892/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/072ae906-ecf7-44f1-ac69-a5b2261d8892/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/072ae906-ecf7-44f1-ac69-a5b2261d8892/3",
          "version": "blue-10",
          "title": "Predicted Blue (10)"
        },
        {
          "__typename": "Badge",
          "setID": "predictions",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/ffdda3fe-8012-4db3-981e-7a131402b057/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/ffdda3fe-8012-4db3-981e-7a131402b057/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/ffdda3fe-8012-4db3-981e-7a131402b057/3",
          "version": "blue-2",
          "title": "Predicted Blue (2)"
        },
        {
          "__typename": "Badge",
          "setID": "predictions",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/f2ab9a19-8ef7-4f9f-bd5d-9cf4e603f845/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/f2ab9a19-8ef7-4f9f-bd5d-9cf4e603f845/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/f2ab9a19-8ef7-4f9f-bd5d-9cf4e603f845/3",
          "version": "blue-3",
          "title": "Predicted Blue (3)"
        },
        {
          "__typename": "Badge",
          "setID": "predictions",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/75e27613-caf7-4585-98f1-cb7363a69a4a/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/75e27613-caf7-4585-98f1-cb7363a69a4a/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/75e27613-caf7-4585-98f1-cb7363a69a4a/3",
          "version": "pink-1",
          "title": "Predicted Pink (1)"
        },
        {
          "__typename": "Badge",
          "setID": "strafe_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/0051508d-2d42-4e4b-a328-c86b04510ca4/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/0051508d-2d42-4e4b-a328-c86b04510ca4/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/0051508d-2d42-4e4b-a328-c86b04510ca4/3",
          "version": "1",
          "title": "Strafe"
        },
        {
          "__typename": "Badge",
          "setID": "anomaly-warzone-earth_1",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/858be873-fb1f-47e5-ad34-657f40d3d156/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/858be873-fb1f-47e5-ad34-657f40d3d156/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/858be873-fb1f-47e5-ad34-657f40d3d156/3",
          "version": "1",
          "title": "Anomaly Warzone Earth"
        },
        {
          "__typename": "Badge",
          "setID": "premium",
          "imageUrlNormal": "https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/1",
          "imageUrlDouble": "https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/2",
          "imageUrlQuadruple": "https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/3",
          "version": "1",
          "title": "Prime Gaming"
        }
      ]
    },
    "extensions": {
      "durationMilliseconds": 8,
      "operationName": "GlobalBadges",
      "requestID": "01GKYBENJ4BT4EFF3JDXADTGKR"
    }
  },
  {
    "data": {
      "currentUser": {
        "blockedUsers": [

        ]
      }
    },
    "extensions": {
      "durationMilliseconds": 26,
      "operationName": "GetBlockedUsers",
      "requestID": "01GKYBENJ4BT4EFF3JDXADTGKR"
    }
  },
  {
    "data": {
      "user": {
        "stream": null
      }
    },
    "extensions": {
      "durationMilliseconds": 38,
      "operationName": "StreamModelQuery",
      "requestID": "01GKYBENJ4BT4EFF3JDXADTGKR"
    }
  },
  {
    "data": {
      "currentUser": {
        "follows": {
          "pageInfo": {
            "hasNextPage": true
          },
          "edges": [
            {
              "cursor": "eyJ0cCI6InVzZXI6ODU1NDg0NjE5OmZvbGxvd3MiLCJ0cyI6InVzZXI6MTA5NTAwNzkyIiwiaXAiOiJ1c2VyOjg1NTQ4NDYxOTpmb2xsb3dzIiwiaXMiOiIxNjcwNTgxMDgyMTk4Nzc3NzAwIn0=",
              "node": {
                "id": "109500792",
                "login": "m4ll4ury",
                "displayName": "M4LL4URY",
                "followers": {
                  "totalCount": 31611
                },
                "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/3ad68843-aaee-47c0-8797-c62a1e1e3a1b-profile_image-300x300.png",
                "stream": null,
                "lastBroadcast": {
                  "startedAt": "2022-12-10T14:49:42.398394Z"
                }
              },
              "notificationSettings": {
                "isEnabled": true
              }
            }
          ]
        },
        "followedVideos": {
          "edges": [
            {
              "node": {
                "publishedAt": "2022-12-10T09:33:37Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-10T09:08:04Z",
                "owner": {
                  "id": "109500792",
                  "displayName": "M4LL4URY"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-09T18:37:04Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-09T15:39:02Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-09T15:27:40Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-09T14:50:00Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-09T13:42:07Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-09T09:35:51Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-09T09:01:54Z",
                "owner": {
                  "id": "109500792",
                  "displayName": "M4LL4URY"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-09T08:56:21Z",
                "owner": {
                  "id": "48759454",
                  "displayName": "Modiiie"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-08T18:09:28Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-08T15:57:36Z",
                "owner": {
                  "id": "48759454",
                  "displayName": "Modiiie"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-08T13:41:45Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-08T09:26:56Z",
                "owner": {
                  "id": "109500792",
                  "displayName": "M4LL4URY"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-07T15:40:12Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-07T13:26:49Z",
                "owner": {
                  "id": "48759454",
                  "displayName": "Modiiie"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-07T09:41:59Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-07T09:16:12Z",
                "owner": {
                  "id": "109500792",
                  "displayName": "M4LL4URY"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-06T20:50:49Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-06T20:47:00Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-06T20:37:24Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-06T20:30:19Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-06T20:22:12Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-06T20:10:37Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-06T19:54:51Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-06T19:44:04Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-06T19:18:45Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-06T19:17:30Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-06T19:06:21Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-06T18:57:55Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-06T18:21:23Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-06T16:57:48Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-06T16:07:42Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-06T15:42:31Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-06T09:43:55Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-06T09:10:05Z",
                "owner": {
                  "id": "109500792",
                  "displayName": "M4LL4URY"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-04T09:40:13Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-03T16:40:14Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-03T09:36:55Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-02T09:34:06Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-01T15:56:15Z",
                "owner": {
                  "id": "48759454",
                  "displayName": "Modiiie"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-01T12:08:57Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-12-01T08:57:39Z",
                "owner": {
                  "id": "109500792",
                  "displayName": "M4LL4URY"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-11-30T21:28:10Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-11-30T17:40:16Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-11-30T09:43:52Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-11-30T08:55:56Z",
                "owner": {
                  "id": "48759454",
                  "displayName": "Modiiie"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-11-30T08:50:14Z",
                "owner": {
                  "id": "109500792",
                  "displayName": "M4LL4URY"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-11-29T09:42:09Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-11-29T08:43:45Z",
                "owner": {
                  "id": "109500792",
                  "displayName": "M4LL4URY"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-11-29T07:55:13Z",
                "owner": {
                  "id": "48759454",
                  "displayName": "Modiiie"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-11-28T17:40:10Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-11-28T08:44:27Z",
                "owner": {
                  "id": "109500792",
                  "displayName": "M4LL4URY"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-11-27T17:06:59Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-11-27T14:33:40Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-11-27T13:45:25Z",
                "owner": {
                  "id": "7601562",
                  "displayName": "Chess"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            },
            {
              "node": {
                "publishedAt": "2022-11-26T18:56:44Z",
                "owner": {
                  "id": "48759454",
                  "displayName": "Modiiie"
                },
                "self": {
                  "viewingHistory": {
                    "position": null,
                    "updatedAt": null
                  }
                }
              }
            }
          ]
        }
      }
    },
    "extensions": {
      "durationMilliseconds": 137,
      "operationName": "CurrentUserFollows",
      "requestID": "01GKYBENJ4BT4EFF3JDXADTGKR"
    }
  },
  {
    "data": {
      "user": {
        "__typename": "User",
        "id": "855484619",
        "login": "yassinho00",
        "displayName": "yassinho00",
        "chatColor": null,
        "description": null,
        "profileImageURL": "https://static-cdn.jtvnw.net/user-default-pictures-uv/294c98b5-e34d-42cd-a8f0-140b72fba9b0-profile_image-300x300.png",
        "bannerImageURL": null,
        "roles": {
          "isStaff": null
        },
        "createdAt": "2022-12-09T10:17:12.932105Z",
        "hasTurbo": false
      }
    },
    "extensions": {
      "durationMilliseconds": 39,
      "operationName": "UserbyLoginQuery",
      "requestID": "01GKYBENJ4BT4EFF3JDXADTGKR"
    }
  },
  {
    "data": {
      "user": {
        "notifications": {
          "summary": {
            "lastSeenAt": null,
            "unseenCount": 0
          }
        }
      }
    },
    "extensions": {
      "durationMilliseconds": 23,
      "operationName": "OnsiteNotificationsSummaryQuery",
      "requestID": "01GKYBENJ4BT4EFF3JDXADTGKR"
    }
  },
  {
    "data": {
      "consent": {
        "__typename": "Consent",
        "id": "caf2a3504eae3f16b975903b5448ae9a",
        "isDeniedUnderage": false,
        "privacyLawName": "GDPR",
        "shouldShowDismissButton": true,
        "shouldShowNotification": false,
        "shouldShowSettingsPage": true,
        "vendorConsentStatus": {
          "__typename": "GDPRVendorConsent",
          "status": [
            {
              "__typename": "TCFCookieVendor",
              "consentStatus": "DENIED",
              "cookieVendorType": "ADVERTISING",
              "features": [
                "MATCH_COMBINE_OFFLINE_DATA_SOURCES",
                "LINK_DIFFERENT_DEVICES",
                "RECEIVE_USE_AUTO_SENT_DEVICE_CHARACTERISTICS_FOR_IDENTIFICATION"
              ],
              "hasUserSetConsent": true,
              "isVisible": true,
              "name": "COMSCORE",
              "policyURL": "https://www.scorecardresearch.com/privacy.aspx?newlanguage=1",
              "purposes": [
                "STORE_ACCESS_INFO_ON_DEVICE",
                "MEASURE_AD_PERFORMANCE",
                "MEASURE_CONTENT_PERFORMANCE",
                "APPLY_MARKET_RESEARCH_TO_GENERATE_AUDIENCE_INSIGHTS",
                "DEVELOP_IMPROVE_PRODUCTS"
              ],
              "specialFeatures": null,
              "specialPurposes": [
                "ENSURE_SECURITY_PREVENT_FRAUD_DEBUG"
              ],
              "cookieMaxAgeSeconds": 62208000
            },
            {
              "__typename": "TCFCookieVendor",
              "consentStatus": "DENIED",
              "cookieVendorType": "ADVERTISING",
              "features": [
                "MATCH_COMBINE_OFFLINE_DATA_SOURCES",
                "LINK_DIFFERENT_DEVICES"
              ],
              "hasUserSetConsent": true,
              "isVisible": true,
              "name": "GOOGLE",
              "policyURL": "https://policies.google.com/privacy",
              "purposes": [
                "STORE_ACCESS_INFO_ON_DEVICE",
                "CREATE_PERSONALISED_ADS_PROFILE",
                "SELECT_PERSONALISED_ADS"
              ],
              "specialFeatures": null,
              "specialPurposes": [
                "ENSURE_SECURITY_PREVENT_FRAUD_DEBUG",
                "TECHNICALLY_DELIVER_ADS_CONTENT"
              ],
              "cookieMaxAgeSeconds": 34190000
            },
            {
              "__typename": "TCFCookieVendor",
              "consentStatus": "DENIED",
              "cookieVendorType": "ADVERTISING",
              "features": null,
              "hasUserSetConsent": true,
              "isVisible": true,
              "name": "TWITCH_AMAZON",
              "policyURL": "https://www.amazon.co.uk/gp/help/customer/display.html?nodeId=201909010",
              "purposes": [
                "STORE_ACCESS_INFO_ON_DEVICE",
                "SELECT_BASIC_ADS",
                "CREATE_PERSONALISED_ADS_PROFILE",
                "SELECT_PERSONALISED_ADS",
                "MEASURE_AD_PERFORMANCE",
                "APPLY_MARKET_RESEARCH_TO_GENERATE_AUDIENCE_INSIGHTS",
                "DEVELOP_IMPROVE_PRODUCTS"
              ],
              "specialFeatures": null,
              "specialPurposes": [
                "ENSURE_SECURITY_PREVENT_FRAUD_DEBUG",
                "TECHNICALLY_DELIVER_ADS_CONTENT"
              ],
              "cookieMaxAgeSeconds": 34190000
            },
            {
              "__typename": "NonTCFCookieVendor",
              "consentStatus": "DENIED",
              "cookieVendorType": "ADVERTISING",
              "hasUserSetConsent": true,
              "isVisible": true,
              "name": "BRANCH",
              "policyURL": "https://branch.io/"
            },
            {
              "__typename": "NonTCFCookieVendor",
              "consentStatus": "DENIED",
              "cookieVendorType": "ANALYTICS",
              "hasUserSetConsent": false,
              "isVisible": true,
              "name": "GOOGLE_ANALYTICS_DEVELOPER_EXTENSIONS",
              "policyURL": "https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
            },
            {
              "__typename": "TCFCookieVendor",
              "consentStatus": "DENIED",
              "cookieVendorType": "ADVERTISING",
              "features": [
                "MATCH_COMBINE_OFFLINE_DATA_SOURCES",
                "LINK_DIFFERENT_DEVICES"
              ],
              "hasUserSetConsent": true,
              "isVisible": true,
              "name": "SALESFORCE_DMP",
              "policyURL": "https://www.salesforce.com/company/privacy/",
              "purposes": [
                "STORE_ACCESS_INFO_ON_DEVICE",
                "CREATE_PERSONALISED_ADS_PROFILE",
                "CREATE_PERSONALISED_CONTENT_PROFILE",
                "MEASURE_AD_PERFORMANCE",
                "MEASURE_CONTENT_PERFORMANCE",
                "APPLY_MARKET_RESEARCH_TO_GENERATE_AUDIENCE_INSIGHTS",
                "DEVELOP_IMPROVE_PRODUCTS"
              ],
              "specialFeatures": null,
              "specialPurposes": null,
              "cookieMaxAgeSeconds": 15552000
            },
            {
              "__typename": "TCFCookieVendor",
              "consentStatus": "DENIED",
              "cookieVendorType": "ADVERTISING",
              "features": null,
              "hasUserSetConsent": false,
              "isVisible": false,
              "name": "AMAZON",
              "policyURL": "https://www.amazon.co.uk/gp/help/customer/display.html?nodeId=201909010",
              "purposes": [
                "STORE_ACCESS_INFO_ON_DEVICE",
                "SELECT_BASIC_ADS",
                "CREATE_PERSONALISED_ADS_PROFILE",
                "SELECT_PERSONALISED_ADS",
                "MEASURE_AD_PERFORMANCE",
                "APPLY_MARKET_RESEARCH_TO_GENERATE_AUDIENCE_INSIGHTS",
                "DEVELOP_IMPROVE_PRODUCTS"
              ],
              "specialFeatures": null,
              "specialPurposes": [
                "ENSURE_SECURITY_PREVENT_FRAUD_DEBUG",
                "TECHNICALLY_DELIVER_ADS_CONTENT"
              ],
              "cookieMaxAgeSeconds": 34190000
            },
            {
              "__typename": "TCFCookieVendor",
              "consentStatus": "DENIED",
              "cookieVendorType": "ADVERTISING",
              "features": [
                "MATCH_COMBINE_OFFLINE_DATA_SOURCES",
                "LINK_DIFFERENT_DEVICES",
                "RECEIVE_USE_AUTO_SENT_DEVICE_CHARACTERISTICS_FOR_IDENTIFICATION"
              ],
              "hasUserSetConsent": true,
              "isVisible": true,
              "name": "NIELSEN",
              "policyURL": "https://www.nielsen.com/eu/en/legal/privacy-statement/digital-measurement/",
              "purposes": [
                "STORE_ACCESS_INFO_ON_DEVICE"
              ],
              "specialFeatures": null,
              "specialPurposes": [
                "ENSURE_SECURITY_PREVENT_FRAUD_DEBUG"
              ],
              "cookieMaxAgeSeconds": 33696000
            }
          ]
        }
      }
    },
    "extensions": {
      "durationMilliseconds": 40,
      "operationName": "ConsentQuery",
      "requestID": "01GKYBENJ4BT4EFF3JDXADTGKR"
    }
  },
  {
    "data": {
      "user": {
        "unacknowledgedSubscriptionEvents": null
      }
    },
    "extensions": {
      "durationMilliseconds": 22,
      "operationName": "UnacknowledgedSubscriptionsQuery",
      "requestID": "01GKYBENJ4BT4EFF3JDXADTGKR"
    }
  }
]