# Mobile app development

At FOSSCell, we have faced shortage of developers interested in mobile platforms. Most just flock to web, even though phones are used much more than laptops. The entire native experience is lost on the browsers.

There is a noticeable lack of free and open source apps that are used for document scanning. Create a multiplatform app, targeted at mobile platforms (MUST work on Android 15+), that can be used for converting pictures of document (like camscanner does) to PDFs.

You can use [Flutter](https://flutter.dev/) or [Kotlin Multiplatform](https://kotlinlang.org/docs/multiplatform.html) or [Swift](https://github.com/swiftlang/swift-android-examples) or [Jetpack Compose](https://developer.android.com/compose). Bonus points are allocated in the order of compose > kotlin > swift > flutter.

## Requirements
1. App must be able to convert pictures of books/pages/documents into contrasted black and white/grayscale images, with proper edge detection.
2. Ideal flow must be that user opens app, camera opens, and user can take a picture of document. Picture gets added to queue, and when user is done taking pictures, they get converted into a multi-page PDF.
3. Additionally, attempt to implement live corner detection, so user can see the edges of the page while camera is open, as well as being able to edit PDF in place (manually adjusting borders, contrast, etc)
