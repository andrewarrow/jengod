import SafariServices

final class SafariWebExtensionHandler: NSObject, NSExtensionRequestHandling {
    func beginRequest(with context: NSExtensionContext) {
        // The page behavior lives in content.js. This handler is the bridge for
        // future messages from the extension to the containing iOS app.
        context.completeRequest(returningItems: nil)
    }
}
