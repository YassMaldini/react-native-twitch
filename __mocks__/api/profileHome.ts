import { ProfileHomeQueryResponse } from "../../src/types/models/operations/queries/ProfileHomeQuery.types";

export const profileHome: ProfileHomeQueryResponse = {
  "data": {
    "user": {
      "displayName": "Chess",
      "login": "chess",
      "self": {
        "follower": {
          "followedAt": "2022-12-09T10:18:09Z"
        },
        "subscriptionBenefit": null
      },
      "channel": {
        "trailer": {
          "video": {
            "__typename": "Video",
            "id": "1189307475",
            "broadcastType": "UPLOAD",
            "vodDate": "2021-10-28T14:15:57Z",
            "owner": {
              "__typename": "User",
              "stream": null,
              "channelId": "7601562",
              "profileViewCount": null,
              "followers": {
                "totalCount": 864864
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
              }
            },
            "game": null,
            "self": {
              "isRestricted": false,
              "viewingHistory": {
                "position": null,
                "updatedAt": null
              }
            },
            "lengthSeconds": 35,
            "previewThumbnailURLMedium": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/chess/1189307475/f5510d0b-400b-4614-a804-2fa29ce88bba/thumb/index-0000000000-320x180.jpg",
            "previewThumbnailURLLarge": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/chess/1189307475/f5510d0b-400b-4614-a804-2fa29ce88bba/thumb/index-0000000000-640x360.jpg",
            "publishedAt": "2021-10-28T14:30:33Z",
            "vodTitle": "Chess's Channel Trailer",
            "vodViewCount": 330476,
            "contentTags": [

            ],
            "resourceRestriction": null
          }
        },
        "home": {
          "shelves": {
            "categoryShelf": {
              "edges": [
                {
                  "node": {
                    "__typename": "Game",
                    "id": "743",
                    "name": "Chess",
                    "viewersCount": 5688,
                    "followersCount": 2181287,
                    "displayName": "Chess",
                    "broadcastersCount": 69,
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
                  }
                }
              ]
            },
            "streamerShelf": {
              "type": "TEAM",
              "edges": [
                {
                  "node": {
                    "__typename": "User",
                    "id": "562291990",
                    "login": "chesskid",
                    "displayName": "ChessKid",
                    "chatColor": "#008000",
                    "description": "ChessKid.com is the world's #1 scholastic chess site. Solve puzzles, watch lessons and play against kids worldwide. Sign up today - it's FREE!",
                    "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/ab728325-b68c-4bd6-b86f-46231c75be85-profile_image-300x300.png",
                    "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/1bf5036d-1e71-4aa0-a710-e59049d4df8a-profile_banner-480.png",
                    "roles": {
                      "isStaff": null
                    },
                    "createdAt": "2020-08-03T20:29:34.916938Z",
                    "hasTurbo": false,
                    "stream": null
                  }
                },
                {
                  "node": {
                    "__typename": "User",
                    "id": "410720291",
                    "login": "alessiasanteramo",
                    "displayName": "AlessiaSanteramo",
                    "chatColor": "#AB00B5",
                    "description": "Ciao, I'm Alessia from Italy. I love chess and I want to spread a fun and positive image of chess. While streaming, I try to bring all my energy and my enthusiasm. I struggle every day to become the best version of myself and I try to improve my stream equally.",
                    "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/3ec876d9-5ec5-4c9f-bf9a-2a691dbbf32f-profile_image-300x300.png",
                    "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/6c9a975e-7f21-49a3-a12c-60df0917db13-profile_banner-480.png",
                    "roles": {
                      "isStaff": null
                    },
                    "createdAt": "2019-01-19T19:24:47.964643Z",
                    "hasTurbo": false,
                    "stream": {
                      "viewersCount": 1081
                    }
                  }
                },
                {
                  "node": {
                    "__typename": "User",
                    "id": "12742307",
                    "login": "vallabh",
                    "displayName": "Vallabh",
                    "chatColor": "#1E90FF",
                    "description": "Professional heckler, mediocre wood pusher, and bringer of good vibes. Inquiries: vallabhtft@gmail.com",
                    "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/3dbe741f-7425-428e-a35c-9ba0012f5098-profile_image-300x300.png",
                    "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/13e6c436-3f9f-45a6-8b48-13a428cd5b4b-profile_banner-480.png",
                    "roles": {
                      "isStaff": null
                    },
                    "createdAt": "2010-05-23T02:12:16.582907Z",
                    "hasTurbo": false,
                    "stream": {
                      "viewersCount": 569
                    }
                  }
                },
                {
                  "node": {
                    "__typename": "User",
                    "id": "422592911",
                    "login": "chessmood",
                    "displayName": "chessmood",
                    "chatColor": "#D2691E",
                    "description": "At Chessmood, grandmasters stream chess to help chess lovers and ambitious players improve their game. Discover new openings. Learn how a GM thinks during a practical game and speed up your growth in chess. ",
                    "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/071b4c86-05c6-4a07-ac25-a7b9a0a286ac-profile_image-300x300.png",
                    "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/b505335e-6be8-4a1f-a38e-98f6bffd19df-profile_banner-480.png",
                    "roles": {
                      "isStaff": null
                    },
                    "createdAt": "2019-03-10T11:56:35.0622Z",
                    "hasTurbo": false,
                    "stream": null
                  }
                },
                {
                  "node": {
                    "__typename": "User",
                    "id": "67912257",
                    "login": "gmhess",
                    "displayName": "GMHess",
                    "chatColor": "#0000FF",
                    "description": "Chess Grandmaster Robert Hess",
                    "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/95efb696-8da9-4e6e-8a5a-2f0cb01bb4f9-profile_image-300x300.png",
                    "bannerImageURL": null,
                    "roles": {
                      "isStaff": null
                    },
                    "createdAt": "2014-08-01T18:30:17.417821Z",
                    "hasTurbo": false,
                    "stream": null
                  }
                },
                {
                  "node": {
                    "__typename": "User",
                    "id": "78804355",
                    "login": "chesskingt",
                    "displayName": "ChessKingT",
                    "chatColor": "#00FF7F",
                    "description": "",
                    "profileImageURL": "https://static-cdn.jtvnw.net/user-default-pictures-uv/294c98b5-e34d-42cd-a8f0-140b72fba9b0-profile_image-300x300.png",
                    "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/0efe3bba-644c-4fea-92d0-f30f4098d26f-profile_banner-480.png",
                    "roles": {
                      "isStaff": null
                    },
                    "createdAt": "2015-01-03T20:14:13.887606Z",
                    "hasTurbo": false,
                    "stream": null
                  }
                },
                {
                  "node": {
                    "__typename": "User",
                    "id": "47516972",
                    "login": "danielrensch",
                    "displayName": "danielrensch",
                    "chatColor": null,
                    "description": "International Master Danny Rensch. Chief Chess Officer for Chess.com.",
                    "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/e5039704-555a-43ad-aa3a-d8255e841436-profile_image-300x300.jpg",
                    "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/f97abee1-3847-4f5e-ba6b-6944d511ad1a-profile_banner-480.png",
                    "roles": {
                      "isStaff": null
                    },
                    "createdAt": "2013-08-12T22:30:37.711363Z",
                    "hasTurbo": false,
                    "stream": null
                  }
                },
                {
                  "node": {
                    "__typename": "User",
                    "id": "7601562",
                    "login": "chess",
                    "displayName": "Chess",
                    "chatColor": "#008000",
                    "description": "Chess.com is the world’s #1 chess community with millions of chess players and fans. Join today!",
                    "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/e6bb8945-a942-498c-9ce3-6fa5b6367085-profile_image-300x300.png",
                    "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/73861ee5-1231-4c22-b39f-543242e6dc29-profile_banner-480.png",
                    "roles": {
                      "isStaff": null
                    },
                    "createdAt": "2009-08-06T19:59:14.118428Z",
                    "hasTurbo": false,
                    "stream": null
                  }
                },
                {
                  "node": {
                    "__typename": "User",
                    "id": "25259668",
                    "login": "chessbrah",
                    "displayName": "chessbrah",
                    "chatColor": "#0000FF",
                    "description": "Pushing the boundaries of chess entertainment...",
                    "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/91f1172a-1c41-4c5b-a526-1bc16ce4cee5-profile_image-300x300.png",
                    "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/291d3839-03e6-42b0-9336-8ed19c97c60a-profile_banner-480.png",
                    "roles": {
                      "isStaff": null
                    },
                    "createdAt": "2011-10-05T02:18:38.501736Z",
                    "hasTurbo": false,
                    "stream": null
                  }
                },
                {
                  "node": {
                    "__typename": "User",
                    "id": "171314218",
                    "login": "chessnerdbird",
                    "displayName": "chessnerdbird",
                    "chatColor": "#1E90FF",
                    "description": "I am striving for my Expert title. I've created this community as a place where other adults can come and improve at chess too. Many people have told me that adults cannot continue to improve and I don't believe it. Let's improve our chess together.",
                    "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/f8b3ee0b-e29a-40b1-bc98-67f621838fca-profile_image-300x300.png",
                    "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/2cc73678-c40f-45cc-a021-1f0de18d3af6-profile_banner-480.png",
                    "roles": {
                      "isStaff": null
                    },
                    "createdAt": "2017-08-25T02:26:59.801688Z",
                    "hasTurbo": false,
                    "stream": null
                  }
                },
                {
                  "node": {
                    "__typename": "User",
                    "id": "144329553",
                    "login": "johnurschel",
                    "displayName": "JohnUrschel",
                    "chatColor": null,
                    "description": "MIT Mathematics PhD student. Former NFL offensive lineman. Amateur chess player.",
                    "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/8cd53170e66990a3-profile_image-300x300.jpeg",
                    "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/ca36703b98bb6261-profile_banner-480.jpeg",
                    "roles": {
                      "isStaff": null
                    },
                    "createdAt": "2017-01-09T17:51:22.514219Z",
                    "hasTurbo": false,
                    "stream": null
                  }
                },
                {
                  "node": {
                    "__typename": "User",
                    "id": "41719683",
                    "login": "chesscoachnet",
                    "displayName": "ChessCoachNET",
                    "chatColor": "#8A2BE2",
                    "description": "Twitch Ambassador/Partner and Chess.com Partnered streamer, USCF Expert chess player and certified USCF chess coach. Thanks for checking me out.",
                    "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/1a686794-cd84-4978-bf51-78af0353b19b-profile_image-300x300.png",
                    "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/fbe13592-e28f-47f7-acfb-16c5d9d68ac1-profile_banner-480.png",
                    "roles": {
                      "isStaff": null
                    },
                    "createdAt": "2013-03-26T00:07:51.107636Z",
                    "hasTurbo": false,
                    "stream": null
                  }
                },
                {
                  "node": {
                    "__typename": "User",
                    "id": "60546880",
                    "login": "bikfoot",
                    "displayName": "Bikfoot",
                    "chatColor": "#FF4500",
                    "description": "Esport producer for chess.com where I produce and commentate on high stakes events! Streaming a ton of chess with the occasional sighting of a puppy ",
                    "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/468d25ee-ae49-4a07-ae8a-9a37c8fc79b9-profile_image-300x300.png",
                    "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/e5d96322-d3a2-4e29-8aa8-80b346c29576-profile_banner-480.png",
                    "roles": {
                      "isStaff": null
                    },
                    "createdAt": "2014-04-10T02:39:44.545264Z",
                    "hasTurbo": false,
                    "stream": null
                  }
                },
                {
                  "node": {
                    "__typename": "User",
                    "id": "194430943",
                    "login": "gmbenjaminfinegold",
                    "displayName": "GMBenjaminFinegold",
                    "chatColor": "#8A2BE2",
                    "description": "Grandmaster Ben Finegold. I stream blitz, bullet, puzzle rush, and tactics trainer. I try to connect with the viewers and talk some trash and have a comedic touch, along with chess! Please consider a donation - https://atlchessclub.com/donate/",
                    "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/e9c778ca-9f65-4b90-abbb-70f63844253a-profile_image-300x300.jpg",
                    "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/9544a423-d5d6-4cb8-ac28-e69fccb32eb9-profile_banner-480.jpeg",
                    "roles": {
                      "isStaff": null
                    },
                    "createdAt": "2018-02-02T22:11:43.98135Z",
                    "hasTurbo": false,
                    "stream": null
                  }
                },
                {
                  "node": {
                    "__typename": "User",
                    "id": "180765288",
                    "login": "mostrovski",
                    "displayName": "mostrovski",
                    "chatColor": null,
                    "description": "Andrey Ostrovskiy. International chess master, originally from Ukraine. I try to make my streams as instructive as possible! I am happy if somebody becomes a better player because of my content!",
                    "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/dcbf6a372c4605de-profile_image-300x300.png",
                    "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/3b8072e0-912c-4187-a42e-d0bca7d6c4ef-profile_banner-480.png",
                    "roles": {
                      "isStaff": null
                    },
                    "createdAt": "2017-11-07T00:21:48.689723Z",
                    "hasTurbo": false,
                    "stream": null
                  }
                },
                {
                  "node": {
                    "__typename": "User",
                    "id": "177468304",
                    "login": "myteachersam",
                    "displayName": "myteachersam",
                    "chatColor": "#FF4500",
                    "description": "Chess + Diablo 3 + Overwatch = Love",
                    "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/d16d1c21-fbaf-4d1b-b126-d44d4c5808c6-profile_image-300x300.png",
                    "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/256acd95-c2a1-4e8f-8318-7f0c935d6f79-profile_banner-480.jpg",
                    "roles": {
                      "isStaff": null
                    },
                    "createdAt": "2017-10-12T22:21:13.127702Z",
                    "hasTurbo": false,
                    "stream": null
                  }
                },
                {
                  "node": {
                    "__typename": "User",
                    "id": "176591516",
                    "login": "ellipaehtz",
                    "displayName": "ElliPaehtz",
                    "chatColor": null,
                    "description": "My name is Elisabeth Paehtz. I am top ranked Women of my country at chess. Women's Grandmaster and currently Women's European Rapid Champion. I am streaming for chess.com in between my tournaments. My content will concentrate on improving positional understanding and blitz chess streams. ",
                    "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/310a094435f4bffd-profile_image-300x300.png",
                    "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/075273ae-b329-48b6-89d6-dcb4949eea5c-profile_banner-480.png",
                    "roles": {
                      "isStaff": null
                    },
                    "createdAt": "2017-10-05T16:28:37.040337Z",
                    "hasTurbo": false,
                    "stream": null
                  }
                },
                {
                  "node": {
                    "__typename": "User",
                    "id": "125693585",
                    "login": "trentosk",
                    "displayName": "trentosk",
                    "chatColor": null,
                    "description": "Lawrence Trent. International Master. Author. Fish. Overrated Commentator. Hopeless card player. Love a bit of banter.",
                    "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/trentosk-profile_image-e07f6a5eb105e859-300x300.jpeg",
                    "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/trentosk-profile_banner-30780b65a26b0137-480.jpeg",
                    "roles": {
                      "isStaff": null
                    },
                    "createdAt": "2016-06-01T23:13:33.417779Z",
                    "hasTurbo": false,
                    "stream": null
                  }
                },
                {
                  "node": {
                    "__typename": "User",
                    "id": "151338358",
                    "login": "imvoja",
                    "displayName": "imvoja",
                    "chatColor": null,
                    "description": "www.chess-lectures.com ",
                    "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/3d542a0907d7fd9e-profile_image-300x300.jpeg",
                    "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/19b2de75-7fac-445b-b6c0-dea431bd1244-profile_banner-480.png",
                    "roles": {
                      "isStaff": null
                    },
                    "createdAt": "2017-03-24T15:11:40.347949Z",
                    "hasTurbo": false,
                    "stream": null
                  }
                },
                {
                  "node": {
                    "__typename": "User",
                    "id": "196755932",
                    "login": "aranhawaii",
                    "displayName": "aranhawaii",
                    "chatColor": "#FF69B4",
                    "description": "Chill streams where you and I talk about whatever you want!",
                    "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/f0b1c181-e54e-48d5-b71d-68cfc4f4912d-profile_image-300x300.png",
                    "bannerImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/cb7fcdc7-0cb6-4ccd-b587-9960d4962419-profile_banner-480.jpeg",
                    "roles": {
                      "isStaff": null
                    },
                    "createdAt": "2018-02-16T20:44:43.876064Z",
                    "hasTurbo": false,
                    "stream": null
                  }
                }
              ]
            }
          }
        }
      },
      // "endorsedChannels": {
      //   "edges": [
      //     {
      //       "node": {
      //         "owner": {
      //           "stream": null
      //         }
      //       }
      //     },
      //     {
      //       "node": {
      //         "owner": {
      //           "stream": null
      //         }
      //       }
      //     }
      //   ]
      // },
      "recentHighlight": {
        "edges": [
          {
            "node": {
              "__typename": "Video",
              "id": "1683327211",
              "broadcastType": "HIGHLIGHT",
              "vodDate": "2022-12-19T16:48:01Z",
              "owner": {
                "__typename": "User",
                "stream": null,
                "channelId": "7601562",
                "profileViewCount": null,
                "followers": {
                  "totalCount": 864864
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
                }
              },
              "game": {
                "id": "743",
                "name": "Chess",
                "displayName": "Chess",
                "tags": [
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
                ]
              },
              "self": {
                "isRestricted": false,
                "viewingHistory": {
                  "position": null
                }
              },
              "lengthSeconds": 1351,
              "previewThumbnailURLMedium": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/55df67587e0ddffdabe2_chess_82830090395_3450811509//thumb/thumb1683327211-320x180.jpg",
              "previewThumbnailURLLarge": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/55df67587e0ddffdabe2_chess_82830090395_3450811509//thumb/thumb1683327211-640x360.jpg",
              "publishedAt": "2022-12-19T16:48:01Z",
              "vodTitle": "Magnus Interview",
              "vodViewCount": 16,
              "contentTags": [
                {
                  "__typename": "Tag",
                  "id": "36a89a80-4fcd-4b74-b3d2-2c6fd9b30c95",
                  "localizedName": "Esports",
                  "tagName": "Esports",
                  "isAutomated": false,
                  "isLanguageTag": false,
                  "localizedDescription": "For channels that have been verified to belong to an organizer or official broadcaster of an esports event",
                  "scope": "ALL"
                },
                {
                  "__typename": "Tag",
                  "id": "6ea6bca4-4712-4ab9-a906-e3336a9d8039",
                  "localizedName": "English",
                  "tagName": "auto___lang_en",
                  "isAutomated": true,
                  "isLanguageTag": true,
                  "localizedDescription": "For streams featuring the use of English",
                  "scope": "ALL"
                }
              ],
              "resourceRestriction": null
            }
          }
        ]
      },
      "pastBroadcasts": {
        "edges": [
          {
            "node": {
              "__typename": "Video",
              "id": "1682553945",
              "broadcastType": "ARCHIVE",
              "vodDate": "2022-12-18T18:37:38Z",
              "owner": {
                "__typename": "User",
                "stream": null,
                "channelId": "7601562",
                "profileViewCount": null,
                "followers": {
                  "totalCount": 864864
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
                }
              },
              "game": {
                "id": "743",
                "name": "Chess",
                "displayName": "Chess",
                "tags": [
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
                ]
              },
              "self": {
                "isRestricted": false,
                "viewingHistory": {
                  "position": null
                }
              },
              "lengthSeconds": 18211,
              "previewThumbnailURLMedium": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/afd83f88ad01e932c478_chess_41623287003_1671388653//thumb/thumb0-320x180.jpg",
              "previewThumbnailURLLarge": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/afd83f88ad01e932c478_chess_41623287003_1671388653//thumb/thumb0-640x360.jpg",
              "publishedAt": "2022-12-18T18:37:38Z",
              "vodTitle": "Magnus vs Hikaru: The Speed Chess Championship Match for $20K | SCC 2022",
              "vodViewCount": 709902,
              "contentTags": [
                {
                  "__typename": "Tag",
                  "id": "36a89a80-4fcd-4b74-b3d2-2c6fd9b30c95",
                  "localizedName": "Esports",
                  "tagName": "Esports",
                  "isAutomated": false,
                  "isLanguageTag": false,
                  "localizedDescription": "For channels that have been verified to belong to an organizer or official broadcaster of an esports event",
                  "scope": "ALL"
                },
                {
                  "__typename": "Tag",
                  "id": "6ea6bca4-4712-4ab9-a906-e3336a9d8039",
                  "localizedName": "English",
                  "tagName": "auto___lang_en",
                  "isAutomated": true,
                  "isLanguageTag": true,
                  "localizedDescription": "For streams featuring the use of English",
                  "scope": "ALL"
                }
              ],
              "resourceRestriction": null
            }
          },
          {
            "node": {
              "__typename": "Video",
              "id": "1680697492",
              "broadcastType": "ARCHIVE",
              "vodDate": "2022-12-16T17:41:51Z",
              "owner": {
                "__typename": "User",
                "stream": null,
                "channelId": "7601562",
                "profileViewCount": null,
                "followers": {
                  "totalCount": 864864
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
                }
              },
              "game": {
                "id": "743",
                "name": "Chess",
                "displayName": "Chess",
                "tags": [
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
                ]
              },
              "self": {
                "isRestricted": false,
                "viewingHistory": {
                  "position": 4630
                }
              },
              "lengthSeconds": 15303,
              "previewThumbnailURLMedium": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/6faafd70898904a112e8_chess_41615932619_1671212506//thumb/thumb0-320x180.jpg",
              "previewThumbnailURLLarge": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/6faafd70898904a112e8_chess_41615932619_1671212506//thumb/thumb0-640x360.jpg",
              "publishedAt": "2022-12-16T17:41:51Z",
              "vodTitle": "Magnus v. MVL | World Blitz Champion Versus World Chess Champion: Winner Goes To The Finals... | SCC 2022",
              "vodViewCount": 350253,
              "contentTags": [
                {
                  "__typename": "Tag",
                  "id": "36a89a80-4fcd-4b74-b3d2-2c6fd9b30c95",
                  "localizedName": "Esports",
                  "tagName": "Esports",
                  "isAutomated": false,
                  "isLanguageTag": false,
                  "localizedDescription": "For channels that have been verified to belong to an organizer or official broadcaster of an esports event",
                  "scope": "ALL"
                },
                {
                  "__typename": "Tag",
                  "id": "6ea6bca4-4712-4ab9-a906-e3336a9d8039",
                  "localizedName": "English",
                  "tagName": "auto___lang_en",
                  "isAutomated": true,
                  "isLanguageTag": true,
                  "localizedDescription": "For streams featuring the use of English",
                  "scope": "ALL"
                }
              ],
              "resourceRestriction": null
            }
          },
          {
            "node": {
              "__typename": "Video",
              "id": "1680079872",
              "broadcastType": "ARCHIVE",
              "vodDate": "2022-12-15T23:03:53Z",
              "owner": {
                "__typename": "User",
                "stream": null,
                "channelId": "7601562",
                "profileViewCount": null,
                "followers": {
                  "totalCount": 864864
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
                }
              },
              "game": {
                "id": "743",
                "name": "Chess",
                "displayName": "Chess",
                "tags": [
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
                ]
              },
              "self": {
                "isRestricted": false,
                "viewingHistory": {
                  "position": null
                }
              },
              "lengthSeconds": 18829,
              "previewThumbnailURLMedium": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/a538c5831f1d4c50d036_chess_41613338779_1671145428//thumb/thumb0-320x180.jpg",
              "previewThumbnailURLLarge": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/a538c5831f1d4c50d036_chess_41613338779_1671145428//thumb/thumb0-640x360.jpg",
              "publishedAt": "2022-12-15T23:03:53Z",
              "vodTitle": "[Rebroadcast] Hikaru v. Nihal | Can One Of Chess’ Brightest Young Stars Defeat The Reigning Speed Chess Champion?",
              "vodViewCount": 139186,
              "contentTags": [
                {
                  "__typename": "Tag",
                  "id": "36a89a80-4fcd-4b74-b3d2-2c6fd9b30c95",
                  "localizedName": "Esports",
                  "tagName": "Esports",
                  "isAutomated": false,
                  "isLanguageTag": false,
                  "localizedDescription": "For channels that have been verified to belong to an organizer or official broadcaster of an esports event",
                  "scope": "ALL"
                },
                {
                  "__typename": "Tag",
                  "id": "6ea6bca4-4712-4ab9-a906-e3336a9d8039",
                  "localizedName": "English",
                  "tagName": "auto___lang_en",
                  "isAutomated": true,
                  "isLanguageTag": true,
                  "localizedDescription": "For streams featuring the use of English",
                  "scope": "ALL"
                }
              ],
              "resourceRestriction": null
            }
          }
        ]
      },
      "clips": {
        "edges": [
          {
            "node": {
              "__typename": "Clip",
              "url": "https://clips.twitch.tv/SleepyGracefulChickpeaDBstyle",
              "slug": "SleepyGracefulChickpeaDBstyle",
              "createdAt": "2020-06-09T21:03:15Z",
              "title": "xQc literally lost the first  minute ",
              "id": "2092437113",
              "durationSeconds": 30,
              "viewCount": 1997652,
              "creationState": "CREATED",
              "tiny": "https://clips-media-assets2.twitch.tv/38577601712-offset-4944-preview-86x45.jpg",
              "small": "https://clips-media-assets2.twitch.tv/38577601712-offset-4944-preview-260x147.jpg",
              "medium": "https://clips-media-assets2.twitch.tv/38577601712-offset-4944-preview-480x272.jpg",
              "game": {
                "name": "Chess",
                "displayName": "Chess"
              },
              "broadcaster": {
                "displayName": "Chess",
                "login": "chess",
                "id": "7601562",
                "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/e6bb8945-a942-498c-9ce3-6fa5b6367085-profile_image-150x150.png",
                "roles": {
                  "isPartner": true
                },
                "stream": null
              },
              "curator": {
                "displayName": "Toosks",
                "id": "42334002",
                "profileImageURL": "https://static-cdn.jtvnw.net/jtv_user_pictures/bf4110a2-49e4-4086-84bc-7708d2e02a66-profile_image-150x150.png"
              },
              "broadcast": {
                "id": "38577601712"
              },
              "videoQualities": [
                {
                  "quality": "1080",
                  "frameRate": 30,
                  "sourceURL": "https://production.assets.clips.twitchcdn.net/38577601712-offset-4944.mp4"
                },
                {
                  "quality": "720",
                  "frameRate": 30,
                  "sourceURL": "https://production.assets.clips.twitchcdn.net/AT-cm%7C38577601712-offset-4944-720.mp4"
                },
                {
                  "quality": "480",
                  "frameRate": 30,
                  "sourceURL": "https://production.assets.clips.twitchcdn.net/AT-cm%7C38577601712-offset-4944-480.mp4"
                },
                {
                  "quality": "360",
                  "frameRate": 30,
                  "sourceURL": "https://production.assets.clips.twitchcdn.net/AT-cm%7C38577601712-offset-4944-360.mp4"
                }
              ],
              "video": {
                "id": "646080904"
              },
              "playbackAccessToken": {
                "value": "{\"authorization\":{\"forbidden\":false,\"reason\":\"\"},\"clip_uri\":\"https://production.assets.clips.twitchcdn.net/38577601712-offset-4944.mp4\",\"device_id\":\"e97eab12f58b44f294bbbfa6559d07b3\",\"expires\":1671710685,\"user_id\":\"855484619\",\"version\":2}",
                "signature": "d35a620b5f9ee8aeca7aac87ff1d25578e610796"
              },
              "videoOffsetSeconds": 4920
            }
          }
        ]
      },
      "videoShelves": {
        "edges": [
          {
            "node": {
              "title": "Recent broadcasts",
              "items": [
                {
                  "__typename": "Video",
                  "id": "1682553945",
                  "broadcastType": "ARCHIVE",
                  "vodDate": "2022-12-18T18:37:38Z",
                  "owner": {
                    "__typename": "User",
                    "stream": null,
                    "channelId": "7601562",
                    "profileViewCount": null,
                    "followers": {
                      "totalCount": 864864
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
                    }
                  },
                  "game": {
                    "id": "743",
                    "name": "Chess",
                    "displayName": "Chess",
                    "tags": [
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
                    ]
                  },
                  "self": {
                    "isRestricted": false,
                    "viewingHistory": {
                      "position": null
                    }
                  },
                  "lengthSeconds": 18211,
                  "previewThumbnailURLMedium": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/afd83f88ad01e932c478_chess_41623287003_1671388653//thumb/thumb0-320x180.jpg",
                  "previewThumbnailURLLarge": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/afd83f88ad01e932c478_chess_41623287003_1671388653//thumb/thumb0-640x360.jpg",
                  "publishedAt": "2022-12-18T18:37:38Z",
                  "vodTitle": "Magnus vs Hikaru: The Speed Chess Championship Match for $20K | SCC 2022",
                  "vodViewCount": 709902,
                  "contentTags": [
                    {
                      "__typename": "Tag",
                      "id": "36a89a80-4fcd-4b74-b3d2-2c6fd9b30c95",
                      "localizedName": "Esports",
                      "tagName": "Esports",
                      "isAutomated": false,
                      "isLanguageTag": false,
                      "localizedDescription": "For channels that have been verified to belong to an organizer or official broadcaster of an esports event",
                      "scope": "ALL"
                    },
                    {
                      "__typename": "Tag",
                      "id": "6ea6bca4-4712-4ab9-a906-e3336a9d8039",
                      "localizedName": "English",
                      "tagName": "auto___lang_en",
                      "isAutomated": true,
                      "isLanguageTag": true,
                      "localizedDescription": "For streams featuring the use of English",
                      "scope": "ALL"
                    }
                  ],
                  "resourceRestriction": null
                },
                {
                  "__typename": "Video",
                  "id": "1680697492",
                  "broadcastType": "ARCHIVE",
                  "vodDate": "2022-12-16T17:41:51Z",
                  "owner": {
                    "__typename": "User",
                    "stream": null,
                    "channelId": "7601562",
                    "profileViewCount": null,
                    "followers": {
                      "totalCount": 864864
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
                    }
                  },
                  "game": {
                    "id": "743",
                    "name": "Chess",
                    "displayName": "Chess",
                    "tags": [
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
                    ]
                  },
                  "self": {
                    "isRestricted": false,
                    "viewingHistory": {
                      "position": 4630
                    }
                  },
                  "lengthSeconds": 15303,
                  "previewThumbnailURLMedium": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/6faafd70898904a112e8_chess_41615932619_1671212506//thumb/thumb0-320x180.jpg",
                  "previewThumbnailURLLarge": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/6faafd70898904a112e8_chess_41615932619_1671212506//thumb/thumb0-640x360.jpg",
                  "publishedAt": "2022-12-16T17:41:51Z",
                  "vodTitle": "Magnus v. MVL | World Blitz Champion Versus World Chess Champion: Winner Goes To The Finals... | SCC 2022",
                  "vodViewCount": 350253,
                  "contentTags": [
                    {
                      "__typename": "Tag",
                      "id": "36a89a80-4fcd-4b74-b3d2-2c6fd9b30c95",
                      "localizedName": "Esports",
                      "tagName": "Esports",
                      "isAutomated": false,
                      "isLanguageTag": false,
                      "localizedDescription": "For channels that have been verified to belong to an organizer or official broadcaster of an esports event",
                      "scope": "ALL"
                    },
                    {
                      "__typename": "Tag",
                      "id": "6ea6bca4-4712-4ab9-a906-e3336a9d8039",
                      "localizedName": "English",
                      "tagName": "auto___lang_en",
                      "isAutomated": true,
                      "isLanguageTag": true,
                      "localizedDescription": "For streams featuring the use of English",
                      "scope": "ALL"
                    }
                  ],
                  "resourceRestriction": null
                },
                {
                  "__typename": "Video",
                  "id": "1680079872",
                  "broadcastType": "ARCHIVE",
                  "vodDate": "2022-12-15T23:03:53Z",
                  "owner": {
                    "__typename": "User",
                    "stream": null,
                    "channelId": "7601562",
                    "profileViewCount": null,
                    "followers": {
                      "totalCount": 864864
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
                    }
                  },
                  "game": {
                    "id": "743",
                    "name": "Chess",
                    "displayName": "Chess",
                    "tags": [
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
                    ]
                  },
                  "self": {
                    "isRestricted": false,
                    "viewingHistory": {
                      "position": null
                    }
                  },
                  "lengthSeconds": 18829,
                  "previewThumbnailURLMedium": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/a538c5831f1d4c50d036_chess_41613338779_1671145428//thumb/thumb0-320x180.jpg",
                  "previewThumbnailURLLarge": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/a538c5831f1d4c50d036_chess_41613338779_1671145428//thumb/thumb0-640x360.jpg",
                  "publishedAt": "2022-12-15T23:03:53Z",
                  "vodTitle": "[Rebroadcast] Hikaru v. Nihal | Can One Of Chess’ Brightest Young Stars Defeat The Reigning Speed Chess Champion?",
                  "vodViewCount": 139186,
                  "contentTags": [
                    {
                      "__typename": "Tag",
                      "id": "36a89a80-4fcd-4b74-b3d2-2c6fd9b30c95",
                      "localizedName": "Esports",
                      "tagName": "Esports",
                      "isAutomated": false,
                      "isLanguageTag": false,
                      "localizedDescription": "For channels that have been verified to belong to an organizer or official broadcaster of an esports event",
                      "scope": "ALL"
                    },
                    {
                      "__typename": "Tag",
                      "id": "6ea6bca4-4712-4ab9-a906-e3336a9d8039",
                      "localizedName": "English",
                      "tagName": "auto___lang_en",
                      "isAutomated": true,
                      "isLanguageTag": true,
                      "localizedDescription": "For streams featuring the use of English",
                      "scope": "ALL"
                    }
                  ],
                  "resourceRestriction": null
                },
                {
                  "__typename": "Video",
                  "id": "1679681615",
                  "broadcastType": "ARCHIVE",
                  "vodDate": "2022-12-15T13:39:32Z",
                  "owner": {
                    "__typename": "User",
                    "stream": null,
                    "channelId": "7601562",
                    "profileViewCount": null,
                    "followers": {
                      "totalCount": 864864
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
                    }
                  },
                  "game": {
                    "id": "743",
                    "name": "Chess",
                    "displayName": "Chess",
                    "tags": [
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
                    ]
                  },
                  "self": {
                    "isRestricted": false,
                    "viewingHistory": {
                      "position": null
                    }
                  },
                  "lengthSeconds": 16456,
                  "previewThumbnailURLMedium": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/2f239a70ea189f4b71f0_chess_41612357243_1671111567//thumb/thumb0-320x180.jpg",
                  "previewThumbnailURLLarge": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/2f239a70ea189f4b71f0_chess_41612357243_1671111567//thumb/thumb0-640x360.jpg",
                  "publishedAt": "2022-12-15T13:39:32Z",
                  "vodTitle": "Hikaru v. Nihal | Can One Of Chess’ Brightest Young Stars Defeat The Reigning Speed Chess Champion?",
                  "vodViewCount": 343881,
                  "contentTags": [
                    {
                      "__typename": "Tag",
                      "id": "36a89a80-4fcd-4b74-b3d2-2c6fd9b30c95",
                      "localizedName": "Esports",
                      "tagName": "Esports",
                      "isAutomated": false,
                      "isLanguageTag": false,
                      "localizedDescription": "For channels that have been verified to belong to an organizer or official broadcaster of an esports event",
                      "scope": "ALL"
                    },
                    {
                      "__typename": "Tag",
                      "id": "6ea6bca4-4712-4ab9-a906-e3336a9d8039",
                      "localizedName": "English",
                      "tagName": "auto___lang_en",
                      "isAutomated": true,
                      "isLanguageTag": true,
                      "localizedDescription": "For streams featuring the use of English",
                      "scope": "ALL"
                    }
                  ],
                  "resourceRestriction": null
                },
                {
                  "__typename": "Video",
                  "id": "1678967256",
                  "broadcastType": "ARCHIVE",
                  "vodDate": "2022-12-14T17:46:18Z",
                  "owner": {
                    "__typename": "User",
                    "stream": null,
                    "channelId": "7601562",
                    "profileViewCount": null,
                    "followers": {
                      "totalCount": 864864
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
                    }
                  },
                  "game": {
                    "id": "743",
                    "name": "Chess",
                    "displayName": "Chess",
                    "tags": [
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
                    ]
                  },
                  "self": {
                    "isRestricted": false,
                    "viewingHistory": {
                      "position": null
                    }
                  },
                  "lengthSeconds": 16329,
                  "previewThumbnailURLMedium": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/92d4cc5e12b6988452e0_chess_41608998603_1671039973//thumb/thumb0-320x180.jpg",
                  "previewThumbnailURLLarge": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/92d4cc5e12b6988452e0_chess_41608998603_1671039973//thumb/thumb0-640x360.jpg",
                  "publishedAt": "2022-12-14T17:46:18Z",
                  "vodTitle": "MVL v. So | Can A World Chess Champion Take Down The First Global Chess Champion? | SCC 2022!",
                  "vodViewCount": 224654,
                  "contentTags": [
                    {
                      "__typename": "Tag",
                      "id": "36a89a80-4fcd-4b74-b3d2-2c6fd9b30c95",
                      "localizedName": "Esports",
                      "tagName": "Esports",
                      "isAutomated": false,
                      "isLanguageTag": false,
                      "localizedDescription": "For channels that have been verified to belong to an organizer or official broadcaster of an esports event",
                      "scope": "ALL"
                    },
                    {
                      "__typename": "Tag",
                      "id": "6ea6bca4-4712-4ab9-a906-e3336a9d8039",
                      "localizedName": "English",
                      "tagName": "auto___lang_en",
                      "isAutomated": true,
                      "isLanguageTag": true,
                      "localizedDescription": "For streams featuring the use of English",
                      "scope": "ALL"
                    }
                  ],
                  "resourceRestriction": null
                },
                {
                  "__typename": "Video",
                  "id": "1678090017",
                  "broadcastType": "ARCHIVE",
                  "vodDate": "2022-12-13T17:39:47Z",
                  "owner": {
                    "__typename": "User",
                    "stream": null,
                    "channelId": "7601562",
                    "profileViewCount": null,
                    "followers": {
                      "totalCount": 864864
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
                    }
                  },
                  "game": {
                    "id": "743",
                    "name": "Chess",
                    "displayName": "Chess",
                    "tags": [
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
                    ]
                  },
                  "self": {
                    "isRestricted": false,
                    "viewingHistory": {
                      "position": null
                    }
                  },
                  "lengthSeconds": 16564,
                  "previewThumbnailURLMedium": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/9a25130a57cc6faae1a5_chess_41605214955_1670953182//thumb/thumb0-320x180.jpg",
                  "previewThumbnailURLLarge": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/9a25130a57cc6faae1a5_chess_41605214955_1670953182//thumb/thumb0-640x360.jpg",
                  "publishedAt": "2022-12-13T17:39:47Z",
                  "vodTitle": "Carlsen v. Caruana | A World Chess Championship REMATCH In The Speed Chess Championship! | SCC 2022",
                  "vodViewCount": 317795,
                  "contentTags": [
                    {
                      "__typename": "Tag",
                      "id": "36a89a80-4fcd-4b74-b3d2-2c6fd9b30c95",
                      "localizedName": "Esports",
                      "tagName": "Esports",
                      "isAutomated": false,
                      "isLanguageTag": false,
                      "localizedDescription": "For channels that have been verified to belong to an organizer or official broadcaster of an esports event",
                      "scope": "ALL"
                    },
                    {
                      "__typename": "Tag",
                      "id": "6ea6bca4-4712-4ab9-a906-e3336a9d8039",
                      "localizedName": "English",
                      "tagName": "auto___lang_en",
                      "isAutomated": true,
                      "isLanguageTag": true,
                      "localizedDescription": "For streams featuring the use of English",
                      "scope": "ALL"
                    }
                  ],
                  "resourceRestriction": null
                },
                {
                  "__typename": "Video",
                  "id": "1677322299",
                  "broadcastType": "ARCHIVE",
                  "vodDate": "2022-12-12T19:40:23Z",
                  "owner": {
                    "__typename": "User",
                    "stream": null,
                    "channelId": "7601562",
                    "profileViewCount": null,
                    "followers": {
                      "totalCount": 864864
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
                    }
                  },
                  "game": {
                    "id": "743",
                    "name": "Chess",
                    "displayName": "Chess",
                    "tags": [
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
                    ]
                  },
                  "self": {
                    "isRestricted": false,
                    "viewingHistory": {
                      "position": null
                    }
                  },
                  "lengthSeconds": 15750,
                  "previewThumbnailURLMedium": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/ba3ef801bfd3f9221bca_chess_41601776059_1670874018//thumb/thumb0-320x180.jpg",
                  "previewThumbnailURLLarge": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/ba3ef801bfd3f9221bca_chess_41601776059_1670874018//thumb/thumb0-640x360.jpg",
                  "publishedAt": "2022-12-12T19:40:23Z",
                  "vodTitle": "Hikaru vs. Aronian | Will Levon Aronian End Hikaru's SCC Title Defense? | 2022 SCC",
                  "vodViewCount": 279157,
                  "contentTags": [
                    {
                      "__typename": "Tag",
                      "id": "36a89a80-4fcd-4b74-b3d2-2c6fd9b30c95",
                      "localizedName": "Esports",
                      "tagName": "Esports",
                      "isAutomated": false,
                      "isLanguageTag": false,
                      "localizedDescription": "For channels that have been verified to belong to an organizer or official broadcaster of an esports event",
                      "scope": "ALL"
                    },
                    {
                      "__typename": "Tag",
                      "id": "6ea6bca4-4712-4ab9-a906-e3336a9d8039",
                      "localizedName": "English",
                      "tagName": "auto___lang_en",
                      "isAutomated": true,
                      "isLanguageTag": true,
                      "localizedDescription": "For streams featuring the use of English",
                      "scope": "ALL"
                    }
                  ],
                  "resourceRestriction": null
                },
                {
                  "__typename": "Video",
                  "id": "1675439259",
                  "broadcastType": "ARCHIVE",
                  "vodDate": "2022-12-10T16:35:52Z",
                  "owner": {
                    "__typename": "User",
                    "stream": null,
                    "channelId": "7601562",
                    "profileViewCount": null,
                    "followers": {
                      "totalCount": 864864
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
                    }
                  },
                  "game": {
                    "id": "743",
                    "name": "Chess",
                    "displayName": "Chess",
                    "tags": [
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
                    ]
                  },
                  "self": {
                    "isRestricted": false,
                    "viewingHistory": {
                      "position": null
                    }
                  },
                  "lengthSeconds": 14046,
                  "previewThumbnailURLMedium": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/28c06045401e95ab668a_chess_41594304235_1670690147//thumb/thumb0-320x180.jpg",
                  "previewThumbnailURLLarge": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/28c06045401e95ab668a_chess_41594304235_1670690147//thumb/thumb0-640x360.jpg",
                  "publishedAt": "2022-12-10T16:35:52Z",
                  "vodTitle": "[Rebroadcast] Goryachkina vs. Tan: Who Will BREAK The Tie And Move To The Women’s Candidates Finals?",
                  "vodViewCount": 129582,
                  "contentTags": [
                    {
                      "__typename": "Tag",
                      "id": "36a89a80-4fcd-4b74-b3d2-2c6fd9b30c95",
                      "localizedName": "Esports",
                      "tagName": "Esports",
                      "isAutomated": false,
                      "isLanguageTag": false,
                      "localizedDescription": "For channels that have been verified to belong to an organizer or official broadcaster of an esports event",
                      "scope": "ALL"
                    },
                    {
                      "__typename": "Tag",
                      "id": "6ea6bca4-4712-4ab9-a906-e3336a9d8039",
                      "localizedName": "English",
                      "tagName": "auto___lang_en",
                      "isAutomated": true,
                      "isLanguageTag": true,
                      "localizedDescription": "For streams featuring the use of English",
                      "scope": "ALL"
                    }
                  ],
                  "resourceRestriction": null
                },
                {
                  "__typename": "Video",
                  "id": "1675214657",
                  "broadcastType": "ARCHIVE",
                  "vodDate": "2022-12-10T09:33:37Z",
                  "owner": {
                    "__typename": "User",
                    "stream": null,
                    "channelId": "7601562",
                    "profileViewCount": null,
                    "followers": {
                      "totalCount": 864864
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
                    }
                  },
                  "game": {
                    "id": "743",
                    "name": "Chess",
                    "displayName": "Chess",
                    "tags": [
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
                    ]
                  },
                  "self": {
                    "isRestricted": false,
                    "viewingHistory": {
                      "position": null
                    }
                  },
                  "lengthSeconds": 14117,
                  "previewThumbnailURLMedium": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/ab8043574b20e9a58200_chess_41593610155_1670664812//thumb/thumb0-320x180.jpg",
                  "previewThumbnailURLLarge": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/ab8043574b20e9a58200_chess_41593610155_1670664812//thumb/thumb0-640x360.jpg",
                  "publishedAt": "2022-12-10T09:33:37Z",
                  "vodTitle": "Goryachkina vs. Tan: Who Will BREAK The Tie And Move To The Women’s Candidates Finals?",
                  "vodViewCount": 157183,
                  "contentTags": [
                    {
                      "__typename": "Tag",
                      "id": "36a89a80-4fcd-4b74-b3d2-2c6fd9b30c95",
                      "localizedName": "Esports",
                      "tagName": "Esports",
                      "isAutomated": false,
                      "isLanguageTag": false,
                      "localizedDescription": "For channels that have been verified to belong to an organizer or official broadcaster of an esports event",
                      "scope": "ALL"
                    },
                    {
                      "__typename": "Tag",
                      "id": "6ea6bca4-4712-4ab9-a906-e3336a9d8039",
                      "localizedName": "English",
                      "tagName": "auto___lang_en",
                      "isAutomated": true,
                      "isLanguageTag": true,
                      "localizedDescription": "For streams featuring the use of English",
                      "scope": "ALL"
                    }
                  ],
                  "resourceRestriction": null
                },
                {
                  "__typename": "Video",
                  "id": "1674602150",
                  "broadcastType": "ARCHIVE",
                  "vodDate": "2022-12-09T18:37:04Z",
                  "owner": {
                    "__typename": "User",
                    "stream": null,
                    "channelId": "7601562",
                    "profileViewCount": null,
                    "followers": {
                      "totalCount": 864864
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
                    }
                  },
                  "game": {
                    "id": "743",
                    "name": "Chess",
                    "displayName": "Chess",
                    "tags": [
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
                    ]
                  },
                  "self": {
                    "isRestricted": false,
                    "viewingHistory": {
                      "position": null
                    }
                  },
                  "lengthSeconds": 11697,
                  "previewThumbnailURLMedium": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/9f69328edd49356bf5d7_chess_41590704107_1670611020//thumb/thumb0-320x180.jpg",
                  "previewThumbnailURLLarge": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/9f69328edd49356bf5d7_chess_41590704107_1670611020//thumb/thumb0-640x360.jpg",
                  "publishedAt": "2022-12-09T18:37:04Z",
                  "vodTitle": "REBROADCAST: Goryachkina vs. Tan: Who Will Advance To The FINALS?! | Women’s Candidates",
                  "vodViewCount": 39802,
                  "contentTags": [
                    {
                      "__typename": "Tag",
                      "id": "36a89a80-4fcd-4b74-b3d2-2c6fd9b30c95",
                      "localizedName": "Esports",
                      "tagName": "Esports",
                      "isAutomated": false,
                      "isLanguageTag": false,
                      "localizedDescription": "For channels that have been verified to belong to an organizer or official broadcaster of an esports event",
                      "scope": "ALL"
                    },
                    {
                      "__typename": "Tag",
                      "id": "6ea6bca4-4712-4ab9-a906-e3336a9d8039",
                      "localizedName": "English",
                      "tagName": "auto___lang_en",
                      "isAutomated": true,
                      "isLanguageTag": true,
                      "localizedDescription": "For streams featuring the use of English",
                      "scope": "ALL"
                    }
                  ],
                  "resourceRestriction": null
                },
                {
                  "__typename": "Video",
                  "id": "1674419558",
                  "broadcastType": "ARCHIVE",
                  "vodDate": "2022-12-09T13:42:07Z",
                  "owner": {
                    "__typename": "User",
                    "stream": null,
                    "channelId": "7601562",
                    "profileViewCount": null,
                    "followers": {
                      "totalCount": 864864
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
                    }
                  },
                  "game": {
                    "id": "743",
                    "name": "Chess",
                    "displayName": "Chess",
                    "tags": [
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
                    ]
                  },
                  "self": {
                    "isRestricted": false,
                    "viewingHistory": {
                      "position": null
                    }
                  },
                  "lengthSeconds": 15808,
                  "previewThumbnailURLMedium": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/0fdc60fd87b4f2850d05_chess_41590266075_1670593323//thumb/thumb0-320x180.jpg",
                  "previewThumbnailURLLarge": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/0fdc60fd87b4f2850d05_chess_41590266075_1670593323//thumb/thumb0-640x360.jpg",
                  "publishedAt": "2022-12-09T13:42:07Z",
                  "vodTitle": "Ding vs. Nihal | World Number TWO vs. Young Speed Chess Star! | 2022 SCC",
                  "vodViewCount": 254658,
                  "contentTags": [
                    {
                      "__typename": "Tag",
                      "id": "36a89a80-4fcd-4b74-b3d2-2c6fd9b30c95",
                      "localizedName": "Esports",
                      "tagName": "Esports",
                      "isAutomated": false,
                      "isLanguageTag": false,
                      "localizedDescription": "For channels that have been verified to belong to an organizer or official broadcaster of an esports event",
                      "scope": "ALL"
                    },
                    {
                      "__typename": "Tag",
                      "id": "6ea6bca4-4712-4ab9-a906-e3336a9d8039",
                      "localizedName": "English",
                      "tagName": "auto___lang_en",
                      "isAutomated": true,
                      "isLanguageTag": true,
                      "localizedDescription": "For streams featuring the use of English",
                      "scope": "ALL"
                    }
                  ],
                  "resourceRestriction": null
                },
                {
                  "__typename": "Video",
                  "id": "1674319378",
                  "broadcastType": "ARCHIVE",
                  "vodDate": "2022-12-09T09:35:51Z",
                  "owner": {
                    "__typename": "User",
                    "stream": null,
                    "channelId": "7601562",
                    "profileViewCount": null,
                    "followers": {
                      "totalCount": 864864
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
                    }
                  },
                  "game": {
                    "id": "743",
                    "name": "Chess",
                    "displayName": "Chess",
                    "tags": [
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
                    ]
                  },
                  "self": {
                    "isRestricted": false,
                    "viewingHistory": {
                      "position": null
                    }
                  },
                  "lengthSeconds": 11890,
                  "previewThumbnailURLMedium": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/71a00a91cc3314db5701_chess_41589853163_1670578546//thumb/thumb0-320x180.jpg",
                  "previewThumbnailURLLarge": "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/71a00a91cc3314db5701_chess_41589853163_1670578546//thumb/thumb0-640x360.jpg",
                  "publishedAt": "2022-12-09T09:35:51Z",
                  "vodTitle": "Goryachkina vs. Tan: Who Will Advance To The FINALS?! | Women’s Candidates",
                  "vodViewCount": 144797,
                  "contentTags": [
                    {
                      "__typename": "Tag",
                      "id": "36a89a80-4fcd-4b74-b3d2-2c6fd9b30c95",
                      "localizedName": "Esports",
                      "tagName": "Esports",
                      "isAutomated": false,
                      "isLanguageTag": false,
                      "localizedDescription": "For channels that have been verified to belong to an organizer or official broadcaster of an esports event",
                      "scope": "ALL"
                    },
                    {
                      "__typename": "Tag",
                      "id": "6ea6bca4-4712-4ab9-a906-e3336a9d8039",
                      "localizedName": "English",
                      "tagName": "auto___lang_en",
                      "isAutomated": true,
                      "isLanguageTag": true,
                      "localizedDescription": "For streams featuring the use of English",
                      "scope": "ALL"
                    }
                  ],
                  "resourceRestriction": null
                }
              ]
            }
          }
        ]
      },
      "primaryTeam": {
        "displayName": "Chess.com"
      },
      "stream": null
    }
  },
  "extensions": {
    "durationMilliseconds": 298,
    "operationName": "ProfileHomeQuery",
    "requestID": "01GMTPW5SFECP54T90HK3NN898"
  }
}