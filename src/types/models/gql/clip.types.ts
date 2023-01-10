export type Clip = {
  __typename: "Clip",
  url: string,
  slug: string,
  createdAt: string,
  title: string,
  id: string,
  durationSeconds: number,
  viewCount: number,
  creationState: string,
  tiny: string,
  small: string,
  medium: string,
  game: {
    name: string,
    displayName: string
  },
  broadcaster: {
    displayName: string,
    login: string,
    id: string,
    profileImageURL: string,
    roles: {
      isPartner: boolean
    },
    stream: {
      id: string,
      viewersCount: number
    } | null
  },
  curator: {
    displayName: string,
    id: string,
    profileImageURL: string
  },
  broadcast: {
    id: string
  },
  videoQualities: {
    quality: string,
    frameRate: number,
    sourceURL: string
  }[],
  video: {
    id: string
  } | null,
  playbackAccessToken: {
    value: string | object,
    signature: string
  },
  videoOffsetSeconds: number | null
}