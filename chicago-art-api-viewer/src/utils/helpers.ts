import type { ArtworkDetailsApiResponse, ArtworksApiResponse } from "./types";

// Art Institute of Chicago API
// Quick start: https://api.artic.edu/docs/#quick-start

const apiBaseUrl = "https://api.artic.edu/api/v1";

export const apiEndpoints = {
  getArtworks: () => `${apiBaseUrl}/artworks`,
  getArtworkDetails: (artworkId: string) =>
    `${apiBaseUrl}/artworks/${artworkId}`,
  getArtworkImageURL: (
    apiResponse: ArtworksApiResponse | ArtworkDetailsApiResponse,
    artworkId: string
  ) => `${apiResponse.config.iiif_url}/${artworkId}/full/843,/0/default.jpg`,
};
