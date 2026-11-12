// Types of the content service endpoint POST release/ondemand
// (ReleaseWithContentInputDTO / ReleaseAdhocOutput in the backend).

/** Reference to an existing library asset: by GUIBO link, or by custom ids. */
export interface OnDemandLibraryReference {
  link?: string;
  libraryCustomId?: string;
  customId?: string;
}

export interface OnDemandRouteContent {
  type: 'CYCLING' | 'HIKING' | 'WALKING' | 'DRIVING';
  name: string;
  description?: string;
  imageBase64?: string;
  waypoints: { lat: number; lon: number }[];
}

export interface OnDemandPoiContent {
  name: string;
  description?: string;
  imageBase64?: string;
  lat: number;
  lon: number;
  web?: string;
  phone?: string;
  type?: string;
}

export interface OnDemandTextContent {
  name: string;
  description?: string;
}

export interface OnDemandRoute {
  content?: OnDemandRouteContent;
  libraryReference?: OnDemandLibraryReference;
  group?: { name: string; parts: OnDemandLibraryReference[] };
}

export interface OnDemandPoi {
  content?: OnDemandPoiContent;
  libraryReference?: OnDemandLibraryReference;
}

export interface OnDemandText {
  content?: OnDemandTextContent;
  libraryReference?: OnDemandLibraryReference;
}

export interface OnDemandStage {
  number: number;
  title: string;
  routes?: OnDemandRoute[];
  pois?: OnDemandPoi[];
  texts?: OnDemandText[];
}

export interface OnDemandAccommodation {
  arrivalDate: string;
  departureDate: string;
  stageNumber: number;
  content?: { name: string; description?: string; imageBase64?: string; lat: number; lon: number };
  libraryReference?: OnDemandLibraryReference;
  comment?: string;
}

export interface OnDemandReleaseRequest {
  metadata: {
    operator: string;
    seller?: string;
    operatorCode?: number;
    sellerCode?: number;
    lang: string;
    guidebookTemplateCustomId?: string;
    translate?: boolean;
  };
  publish: {
    startDate: string;
    endDate: string;
    devices: number;
    app?: boolean;
    gpx?: boolean;
  };
  booking: {
    arrivalDate: string;
    departureDate: string;
    accommodation?: OnDemandAccommodation[];
  };
  guidebook: OnDemandGuidebook;
}

/** Guidebook part of an on-demand release request. */
export interface OnDemandGuidebook {
  title?: string;
  imageBase64?: string;
  stages: OnDemandStage[];
  generalInfo?: OnDemandText[];
  /** Geodata libraries to connect to the new guidebook. */
  connectedLibraries?: OnDemandLibraryReference[];
}

/** Response of POST release/ondemand (ReleaseAdhocOutput in the backend). */
export interface OnDemandReleaseResult {
  /** Link of the created release. */
  releaseId?: string;
  url?: string;
  message?: string;
  invalidReferences?: any[];
}
