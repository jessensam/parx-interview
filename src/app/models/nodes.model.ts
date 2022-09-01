import { Attributes } from "./attributes.model";
import { Link } from "./link.model";
import { Relationships } from "./relationships.model";

export interface Nodes {
    id: string,
    type: string,
    links: Link,
    attributes: Attributes,
    relationships: Relationships;
}
