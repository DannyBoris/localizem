class Locale {
  private localeName: string;

  private createConverter(type: Intl.DisplayNamesType) {
    return new Intl.DisplayNames(["en"], { type });
  }

  private CountryConverter = this.createConverter("region");
  private LanguageConverter = this.createConverter("language");

  constructor(localeName: string) {
    this.localeName = localeName;
  }

  public toCountry() {
    const countryCode = this.localeName.split("-")[1];
    const countryName = this.CountryConverter.of(countryCode);
    return countryName;
  }

  public toLanguage() {
    const languageCode = this.localeName.split("-")[0];
    return this.LanguageConverter.of(languageCode);
  }

  public languageCode() {
    return this.localeName.split("-")[0];
  }

  public countryCode() {
    return this.localeName.split("-")[1];
  }
}

module.exports = { Locale };
