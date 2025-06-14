# 3dWeb

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## requirement 
[x] create a BoxGeometry with an initial size of 1×1×1
[x] Center the box in a scene with basic ambient and directional lighting (no external models).
[x] Enable the box to slowly auto-rotate around its Y-axis.
[] Provide six file input fields (one for each face) allowing the user to upload custom PNG/JPG images.
[] Upon image upload, map each texture to the corresponding face of the box in real time.
[x] Sliders (or number inputs) to adjust the Width, Height, and Depth of the box, with a range from 0.2 to 2.0. Changing the box's dimensions should rebuild the geometry while preserving the current textures and material settings
[] control to start/stop the box's rotation.
[] Include a UI toggle to switch between Matte (high roughness) and Glossy (low roughness with clear-coat) finishes.
[] control to modify the sharpness of the scene.
