import { SearchSuggestionsQueryResponse } from "../../src/types/models/operations/SearchSuggestionsQuery.types";

export const searchSuggestions: SearchSuggestionsQueryResponse = {
  "data": {
    "searchSuggestions": {
      "edges": [
        {
          "node": {
            "content": {
              "__typename": "SearchSuggestionCategory",
              "id": "511748",
              "boxArtURL": "https://static-cdn.jtvnw.net/ttv-boxart/511748_IGDB-285x380.jpg",
              "game": {
                "__typename": "Game",
                "id": "511748",
                "name": "Auto Chess",
                "viewersCount": 343,
                "followersCount": 920066,
                "displayName": "Auto Chess",
                "broadcastersCount": 8,
                "boxArtURL": "https://static-cdn.jtvnw.net/ttv-boxart/511748_IGDB-285x380.jpg",
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
                    "id": "8d39b307-d3ad-4f4a-98a4-d1951f55ceb7",
                    "localizedName": "Card \u0026 Board Game",
                    "tagName": "Card \u0026 Board Game",
                    "isAutomated": false,
                    "isLanguageTag": false,
                    "localizedDescription": "For games that feature elements consistent with the Card \u0026 Board genre",
                    "scope": "CATEGORY"
                  }
                ],
                "coverURL": null
              }
            },
            "matchingCharacters": {
              "start": 5,
              "end": 10
            },
            "id": "58a6b0cd-6d72-4772-88ee-ff8d4c529e8b",
            "text": "Auto Chess"
          }
        },
        {
          "node": {
            "content": null,
            "matchingCharacters": {
              "start": 0,
              "end": 5
            },
            "id": "d29de8aa-633b-4ba8-a763-d73af2eadf5b",
            "text": "chess"
          }
        },
        {
          "node": {
            "content": null,
            "matchingCharacters": {
              "start": 0,
              "end": 5
            },
            "id": "c2199de8-79be-4025-905f-0f5dadabb15c",
            "text": "chess"
          }
        },
        {
          "node": {
            "content": null,
            "matchingCharacters": {
              "start": 0,
              "end": 5
            },
            "id": "b001aec4-e250-466c-8f33-bc9e0d0bf96a",
            "text": "chesscomfr"
          }
        },
        {
          "node": {
            "content": null,
            "matchingCharacters": {
              "start": 0,
              "end": 5
            },
            "id": "c982cae4-26c5-4264-a90f-89b47c898915",
            "text": "chessbrah"
          }
        },
        {
          "node": {
            "content": null,
            "matchingCharacters": {
              "start": 0,
              "end": 5
            },
            "id": "99d6c73a-5af6-4585-bec1-049d31892e96",
            "text": "chess24"
          }
        },
        {
          "node": {
            "content": null,
            "matchingCharacters": {
              "start": 0,
              "end": 5
            },
            "id": "ee28b9ca-6eee-4885-aee2-8965187ba4f1",
            "text": "chessivt"
          }
        }
      ],
      "tracking": {
        "modelTrackingID": "dadf3196467dfc568401a06da2193e35",
        "responseID": "97a699fa-7c71-4d32-8436-a2b54b194076"
      }
    }
  },
  "extensions": {
    "durationMilliseconds": 65,
    "operationName": "SearchSuggestionsQuery",
    "requestID": "01GMMZW7TE33T7KJB1F4HWY2T4"
  }
}