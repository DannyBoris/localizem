# Small util class for handling coutry language localization

> Example:
```
import { Locale } from "localizem"

const locale = new Locale('en-US')
const language = locale.toLanguage()
const country = locale.toCountry()
const langugeCode = locale.languageCode()
const countryCode = locale.countryCode()

```