import { DisplayProperties } from "./display-properties.model";

export interface Attributes {
    urn: string;
    created_at: string;
    updated_at: string;
    content: string;
    properties?: any;
    display_properties: DisplayProperties;
}