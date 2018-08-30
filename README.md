# style-dictionary-demo
This project is a demonstration of a (possible) setup of [Style Dictionary](https://github.com/amzn/style-dictionary) for the generation of design tokens. It's been created as a companion to [a Medium article](https://medium.com/@didoo/how-to-manage-your-design-tokens-with-style-dictionary-98c795b938aa) that I have written to share my experience in setting up Style Dictionary for our [Cosmos Design System](http://medium.com/badoo-developers/from-zero-to-cosmos-part-1-2d080fe35bf2) in Badoo.


**Notice**: *Feel free to use this code as reference, or clone it and tailor it to your needs. But keep in mind that I have done in this project is not what I suggest you to do, unless you have a very clear idea of what you need and what you want to achieve. Style Dictionary comes with [a lot of pre-defined defaults](https://amzn.github.io/style-dictionary/), that most probably will work for you. Before starting to dig into all the possible customisations that you can have, try the default settings offered by the library, look at the output files, and see if they can suit your needs. Probably they will do. If they don't, think how you want the output files generated, and see which one of the [API methods](https://amzn.github.io/style-dictionary/#/api) you can use for that specific scope.*

## Initial setup
Install the project dependencies via the CLI command:

```
npm install
```

## Project structure
The project is made of these files and folders:

* `/src` contains the design tokens input files (in JSON format)
* `/templates` contains the templates used to generate the output files
* `/dist` contains the generated output files (in different formats)
* `build.js` is the script used to generate the output files

## Running the project
You can build the design tokens from the `/src/` folder using the CLI command:

```
npm run build
```
of you can automatically re-build the tokens at every change using the command:

```
npm run watch
```

The generated tokens are saved in the `/dist` folder, and organised by target platform.

## License

This project is under [MIT license](https://github.com/didoo/style-dictionary-demo/blob/master/LICENSE).

