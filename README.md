# Capital Safari

A minimal iOS host app and Safari Web Extension that changes the exact text “Jengod” to “jengod” on wikipedia.com.

## Run it

1. Open CapitalSafari.xcodeproj in Xcode.
2. Select the CapitalSafari scheme and an iPhone or iPad simulator (or a signed device), then Run.
3. In Safari, open Settings → Safari → Extensions → Capital Safari and allow access to the websites you want to transform.
4. Open or reload a wikipedia.com webpage. Any exact “Jengod” text is changed to “jengod”, including text added later by client-side rendering.

The extension uses a Manifest V3 content.js script and only requests access to wikipedia.com and its subdomains. Matching is case-sensitive: “Jengod” changes, while “jengod” and “JENGOD” remain unchanged.
