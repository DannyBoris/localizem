"use strict";
class Locale {
    createConverter(type) {
        return new Intl.DisplayNames(["en"], { type });
    }
    constructor(localeName) {
        this.CountryConverter = this.createConverter("region");
        this.LanguageConverter = this.createConverter("language");
        this.localeName = localeName;
    }
    toCountry() {
        const countryCode = this.localeName.split("-")[1];
        const countryName = this.CountryConverter.of(countryCode);
        return countryName;
    }
    toLanguage() {
        const languageCode = this.localeName.split("-")[0];
        return this.LanguageConverter.of(languageCode);
    }
    languageCode() {
        return this.localeName.split("-")[0];
    }
    countryCode() {
        return this.localeName.split("-")[1];
    }
}
module.exports = { Locale };
//# sourceMappingURL=index.js.map