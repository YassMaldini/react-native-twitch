import { CollectionsQueryResponse } from "../../src/types/models/operations/queries/CollectionsQuery.types";

export const collections: CollectionsQueryResponse = {
  "data": {
    "user": {
      "collections": {
        "pageInfo": {
          "hasNextPage": false
        },
        "edges": [
          {
            "cursor": "",
            "node": {
              "__typename": "Collection",
              "id": "wJZfkLH4OxbqFg",
              "description": "",
              "lengthSeconds": 4427,
              "thumbnailURL": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/blitzstream/764071712/2ce9eed1-bf49-4be2-a611-b88e17ac0d89/thumb/index-0000000000-300x300.jpg",
              "title": "Masterclass",
              "updatedAt": "2020-10-08T14:17:05.608Z",
              "viewCount": 0,
              "items": {
                "totalCount": 1,
                "pageInfo": {
                  "hasNextPage": false
                },
                "edges": [
                  {
                    "cursor": "MQ==",
                    "node": {
                      "__typename": "Video",
                      "id": "764071712",
                      "broadcastType": "UPLOAD",
                      "vodDate": "2020-10-08T08:59:20Z",
                      "owner": {
                        "__typename": "User",
                        "stream": null,
                        "channelId": "49632767",
                        "profileViewCount": null,
                        "followers": {
                          "totalCount": 163808
                        },
                        "description": "La chaîne Twitch de Blitzstream ! Commentaires d'échecs en direct et jeu en parties blitz.",
                        "login": "blitzstream",
                        "displayName": "BlitzStream",
                        "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/f338a550-1963-4449-ab31-e99d30cd4876-profile_image-300x300.png",
                        "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/98cfd70d-9229-4f0a-b06a-339d0087b008-profile_banner-480.png",
                        "roles": {
                          "isPartner": true,
                          "isAffiliate": false
                        },
                        "lastBroadcast": {
                          "startedAt": "2022-12-22T01:13:40.218792Z"
                        },
                        "broadcastSettings": {
                          "isMature": false
                        }
                      },
                      "game": null,
                      "self": {
                        "isRestricted": false,
                        "viewingHistory": {
                          "position": null
                        }
                      },
                      "lengthSeconds": 4427,
                      "previewThumbnailURLMedium": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/blitzstream/764071712/2ce9eed1-bf49-4be2-a611-b88e17ac0d89/thumb/index-0000000000-320x180.jpg",
                      "previewThumbnailURLLarge": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/blitzstream/764071712/2ce9eed1-bf49-4be2-a611-b88e17ac0d89/thumb/index-0000000000-640x360.jpg",
                      "publishedAt": "2020-10-08T14:16:18Z",
                      "vodTitle": "MasterClass de fab sur les attaques en h7.mp4",
                      "vodViewCount": 4572,
                      "contentTags": [

                      ],
                      "resourceRestriction": null
                    }
                  }
                ]
              },
              "owner": {
                "__typename": "User",
                "stream": null,
                "channelId": "49632767",
                "profileViewCount": null,
                "followers": {
                  "totalCount": 163808
                },
                "description": "La chaîne Twitch de Blitzstream ! Commentaires d'échecs en direct et jeu en parties blitz.",
                "login": "blitzstream",
                "displayName": "BlitzStream",
                "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/f338a550-1963-4449-ab31-e99d30cd4876-profile_image-300x300.png",
                "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/98cfd70d-9229-4f0a-b06a-339d0087b008-profile_banner-480.png",
                "roles": {
                  "isPartner": true,
                  "isAffiliate": false
                },
                "lastBroadcast": {
                  "startedAt": "2022-12-22T01:13:40.218792Z"
                },
                "broadcastSettings": {
                  "isMature": false
                }
              }
            }
          }
        ]
      }
    }
  },
  "extensions": {
    "durationMilliseconds": 89,
    "operationName": "CollectionsQuery",
    "requestID": "01GMXBXVXXBNTBFJ60NP40MDZQ"
  }
}