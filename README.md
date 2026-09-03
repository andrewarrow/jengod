# Capital Safari

A minimal iOS host app and Safari Web Extension that uppercases visible text on webpages.

## Run it

1. Open CapitalSafari.xcodeproj in Xcode.
2. Select the CapitalSafari scheme and an iPhone or iPad simulator (or a signed device), then Run.
3. In Safari, open Settings → Safari → Extensions → Capital Safari and allow access to the websites you want to transform.
4. Reload a webpage. Its visible text is converted to uppercase, including text added later by client-side rendering.

The extension uses a Manifest V3 content.js script and requests <all_urls> so Safari can offer per-site access controls. Browser-protected pages such as Safari's own settings pages cannot be modified.
