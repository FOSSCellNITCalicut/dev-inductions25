# Tasks For FOSSCell Dev Team Inductions


You MUST submit atleast one task. To submit, make a PR [here](https://github.com/FOSSCellNITCalicut/dev-inductions25/pulls). Ensure that you submit no later than 11:59PM IST, 8th January, 2026. No force pushes! 

Tasks -
1. [Task 1](#Task-1) - Open Source Web Development
2. [Task 2](#Task-2) - Mobile app development
3. [Task 3](#Task-3) - QT desktop app

## Task 1  

### Open Source Web Development Task  

The goal is to build an  **end-to-end open source web application**, fully self-hosted, that uses an **open source database**, is **containerized**, and is structured in a way that you can **contribute parts of it back to open source** (docs, tooling, integrations, or fixes).

You should design, build, deploy, and document the system like a real open-source maintainer.

Build a **Lightweight Issue & Task Tracking Platform** (think: a minimal GitHub Issues / Jira clone) with:

- A REST API backend
- A frontend web UI
- An open source database
- Authentication 
- Analytics (basic)
- Full containerized deployment
- Public documentation

The idea suggested is optional. You can implement whatever idea you have or problem you want to solve but it should contain all the above mentioned points. Minimal importance is given to frontend(but if it is creative, that will also be considered). However deployment is a must.  
Extra points will be given if an in-memory database is used to cache/queue.  
Similarly if services are decoupled and loosely connected i.e microservice architecture with kafka or rabbitMQ would be impressive.  

For Hosting it is recommended that you self host your services. You may use any containerization platform of your choice(however we may ask you why you chose the specific platform).  

### Do document all the steps.  

As for containerization, you **must**
- Write a `Dockerfile` for backend
- Write a `Dockerfile` for frontend
- Use **Docker Compose** to run:
  - Backend
  - Frontend
  - Database
  - Redis (if used)

Use industry best practices for environment and configuration

- Use `.env` files
- No secrets hardcoded
- Configurable DB host, port, credentials  


As for documentation, you must write:
- `README.md`
- `SETUP.md`
- `ARCHITECTURE.md`(Optional)
- `CONTRIBUTING.md`

Documentation should include:
- Local setup
- Deployment steps
- API overview
- DB schema explanation

Bonus (Optional but Impressive)
- GitHub Actions CI
- Rate limiting
- Role-based access
- Prometheus + Grafana
- Helm chart
- Kubernetes (later phase)


## Task 2

### Mobile app development

At FOSSCell, we have faced shortage of developers interested in mobile platforms. Most just flock to web, even though phones are used much more than laptops. The entire native experience is lost on the browsers.

There is a noticeable lack of free and open source apps that are used for document scanning. Create a multiplatform app, targeted at mobile platforms (MUST work on Android 15+), that can be used for converting pictures of document (like camscanner does) to PDFs.

You can use [Flutter](https://flutter.dev/) or [Kotlin Multiplatform](https://kotlinlang.org/docs/multiplatform.html) or [Swift](https://github.com/swiftlang/swift-android-examples) or [Jetpack Compose](https://developer.android.com/compose). Bonus points are allocated in the order of compose > kotlin > swift > flutter.

## Requirements
1. App must be able to convert pictures of books/pages/documents into contrasted black and white/grayscale images, with proper edge detection.
2. Ideal flow must be that user opens app, camera opens, and user can take a picture of document. Picture gets added to queue, and when user is done taking pictures, they get converted into a multi-page PDF.
3. Additionally, attempt to implement live corner detection, so user can see the edges of the page while camera is open, as well as being able to edit PDF in place (manually adjusting borders, contrast, etc)



## Task 3

### QT desktop app

Make a GUI frontend for [rclone](https://rclone.org/) using the [Qt6](https://www.qt.io/development/qt-framework/qt6) framework.

## Requirements

1. Use an open-source license (obviously :) )
2. App must support basic operations such as -
    - adding, removing, and editing remotes
    - file manager view for managing files
    - view associated metadata of each file
3. Additionally, try implementing the following features -
    - setting up cronjobs for periodic background sync operations
    - support for mounting and unmounting files
    - modifying rclone params

We prefer if you write your code in C++, but Python is also acceptable
