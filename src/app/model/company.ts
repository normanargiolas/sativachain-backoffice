export interface Company {
    id: number;
    name: string;
    legalOffice: string; // Sede legale
    representative: string; // Rappresenante legale
    vatNumber: string; // PI
    fiscalCode: string; // Codice fiscale
    pec: string;
    email: string;
    webSite: string;
    registrationLink: string;
    owner: number;
}
