declare class Locale {
    private localeName;
    private createConverter;
    private CountryConverter;
    private LanguageConverter;
    constructor(localeName: string);
    toCountry(): string | undefined;
    toLanguage(): string | undefined;
    languageCode(): string;
    countryCode(): string;
}
