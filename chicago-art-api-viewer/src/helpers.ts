// Art Institute of Chicago API
// Quick start: https://api.artic.edu/docs/#quick-start

//
// Types
//

export type ArtworksApiResponse = {
  pagination: {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    next_url: string;
  };
  data: Array<{
    id: number;
    api_model: string;
    api_link: string;
    is_boosted: boolean;
    title: string;
    alt_titles: string[] | null;
    thumbnail: {
      lqip: string;
      width: number;
      height: number;
      alt_text: string;
    };
    main_reference_number: string;
    has_not_been_viewed_much: boolean;
    boost_rank: number | null;
    date_start: number;
    date_end: number;
    date_display: string;
    date_qualifier_title: string;
    date_qualifier_id: number | null;
    artist_display: string;
    place_of_origin: string;
    description: string | null;
    short_description: string | null;
    dimensions: string;
    dimensions_detail: Array<{
      depth: number | null;
      width: number | null;
      height: number | null;
      diameter: number | null;
      clarification: string | null;
    }>;
    medium_display: string;
    inscriptions: string | null;
    credit_line: string;
    catalogue_display: string | null;
    publication_history: string | null;
    exhibition_history: string | null;
    provenance_text: string | null;
    edition: string | null;
    publishing_verification_level: string;
    internal_department_id: number;
    fiscal_year: number;
    fiscal_year_deaccession: number | null;
    is_public_domain: boolean;
    is_zoomable: boolean;
    max_zoom_window_size: number;
    copyright_notice: string | null;
    has_multimedia_resources: boolean;
    has_educational_resources: boolean;
    has_advanced_imaging: boolean;
    colorfulness: number;
    color: {
      h: number;
      l: number;
      s: number;
      percentage: number;
      population: number;
    };
    latitude: number | null;
    longitude: number | null;
    latlon: string | null;
    is_on_view: boolean;
    on_loan_display: string | null;
    gallery_title: string;
    gallery_id: number;
    nomisma_id: string | null;
    artwork_type_title: string;
    artwork_type_id: number;
    department_title: string;
    department_id: string;
    artist_id: number;
    artist_title: string;
    alt_artist_ids: number[];
    artist_ids: number[];
    artist_titles: string[];
    category_ids: string[];
    category_titles: string[];
    term_titles: string[];
    style_id: number | null;
    style_title: string | null;
    alt_style_ids: number[];
    style_ids: number[];
    style_titles: string[];
    classification_id: string;
    classification_title: string;
    alt_classification_ids: string[];
    classification_ids: string[];
    classification_titles: string[];
    subject_id: number | null;
    alt_subject_ids: number[];
    subject_ids: number[];
    subject_titles: string[];
    material_id: string;
    alt_material_ids: string[];
    material_ids: string[];
    material_titles: string[];
    technique_id: number | null;
    alt_technique_ids: number[];
    technique_ids: number[];
    technique_titles: string[];
    theme_titles: string[];
    image_id: string;
    alt_image_ids: string[];
    document_ids: string[];
    sound_ids: string[];
    video_ids: string[];
    text_ids: string[];
    section_ids: string[];
    section_titles: string[];
    site_ids: string[];
    suggest_autocomplete_all: Array<{
      input: string[];
      weight?: number;
      contexts: {
        groupings: string[];
      };
    }>;
    source_updated_at: string;
    updated_at: string;
    timestamp: string;
  }>;
  info: {
    license_text: string;
    license_links: string[];
    version: string;
  };
  config: {
    iiif_url: string;
    website_url: string;
  };
};

//
// Helpers
//

const apiBaseUrl = "https://api.artic.edu/api/v1";

export const apiEndpoint = {
  artworks: `${apiBaseUrl}/artworks`,
};

export const buildArtworkImageUrl = (
  artworksResponse: ArtworksApiResponse,
  artworkId: string
) => {
  return `${artworksResponse.config.iiif_url}/${artworkId}/full/843,/0/default.jpg`;
};

export const buildArtworkDetailsUrl = (artworkId: string) => {
  return `${apiEndpoint.artworks}/${artworkId}`;
};
