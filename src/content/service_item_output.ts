/** Service kind in guidebook output (`ServiceItemOutputDTO.Type`). */
export type ServiceItemOutputType = 'ACCOMMODATION' | 'ACTIVITY';

/**
 * Localized service (accommodation or activity) as returned by guidebook output
 * (`ServiceItemOutputDTO`). Dates are ISO `yyyy-MM-dd`.
 */
export interface ServiceItemOutputDTO {
    name?: string;
    description?: string;
    lat?: number;
    lng?: number;
    arrival?: string;
    departure?: string;
    images?: string[];
    phone?: string;
    web?: string;
    comment?: string;
    type?: ServiceItemOutputType;
}
