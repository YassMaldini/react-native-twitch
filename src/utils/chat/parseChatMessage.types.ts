export interface ParsedMessage {
  "tags": ParsedMessageTags | null,
  "source": ParsedMessageSource | null,
  "command": ParsedMessageCommand | null,
  "parameters": string | null
}

export type ParsedMessageTags = {
  "badge-info": {
    "subscriber": string
  },
  "badges": {
    "subscriber": string,
    "premium": string
  },
  "color": string,
  "display-name": string,
  "emotes": string | null,
  "first-msg": string,
  "id": string,
  "mod": string,
  "returning-chatter": string,
  "room-id": string,
  "subscriber": string,
  "tmi-sent-ts": string,
  "turbo": string,
  "user-id": string,
  "user-type": string | null
}

export type ParsedMessageSource = {
  "nick": string,
  "host": string
}

export type ParsedMessageCommand = {
  "command": string,
  "channel": string,
  "botCommand"?: string,
  "botCommandParams"?: string
}