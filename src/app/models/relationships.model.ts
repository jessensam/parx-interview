import { Authors } from "./authors.model";
import { Publishers } from "./publishers.model";

export interface Relationships {
    authors: Authors;
    publishers: Publishers;
}