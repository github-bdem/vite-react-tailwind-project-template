# Personal Project Template (vite-react-tailwind-project-template)

While working on my [Food Roulette](https://github.com/github-bdem/food-roulette) project I decided that I really liked the config I had worked up there. I had the linting, prettier rules, aliasing, etc. all just how I liked them. So in order to speed up development using this tech stack, I created this [Template Repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) so that I can just spin up a new project and not have to re-configure everything.

![Basic project page](https://github.com/github-bdem/vite-react-tailwind-project-template/blob/main/public/project-preview.png?raw=true)

## Built Using

This project was created using:

- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI v5](https://daisyui.com/)
- [Vitest](https://vitest.dev/)

## Technical Features

This project has been extended from the original basic vite project and now has the following features:

- Examples of mocking out react context providers and consumers
- Eslint config expanded with vite recommended production options
- Pinned node version to ensure compatibility with dependencies
- Path aliases setup for easy importing of components and assets
- Minimum prettier configured
- Custom DaisyUI theme
- Configured Tailwind CSS name ordering
- Tailwind CSS name autocompletion in vscode

## Running

To run this project please refer to the [Vite rundocs](https://vite.dev/guide/)

## Testing

3 test commands are provided:

- `test` - runs the test suites in command line
- `coverage` - runs tests and generates our coverage files
- `test-with-ui` - runs the [Vitest UI](https://vitest.dev/guide/ui.html) (Note you have to have run the coverage command to get coverage displayed in the UI tool)
