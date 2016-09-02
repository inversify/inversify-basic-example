# inversify-basic-example
A basic example that showcases how to setup InversifyJS

This is a very basic InversifyJS example. 

This program declares: 
- Two interfaces `Warrior` and `Weapon`
- Two implementations of `Weapon`: `Katana` and `Shuriken`
- Two implementations of `Warrior`: `Ninja` and `Samurai`

The warriors own a weapon and are tagged with some metadata.

![](uml.png)

The metadata is used to link a warrior to a civilization: `japanese` or `chinese`.

We use some constraints `whenTargetNamed` and `whenParentNamed` to indicate which
`Weapon` should be injected into and implementation of `Warrior` and which implementation
of `Warrior` should be returned we we request an instance:

```ts
kernel.bind<Warrior>(SERVICE_IDENTIFIER.WARRIOR).to(Ninja).whenTargetNamed(TAG.CHINESE);
kernel.bind<Warrior>(SERVICE_IDENTIFIER.WARRIOR).to(Samurai).whenTargetNamed(TAG.JAPANESE);
kernel.bind<Weapon>(SERVICE_IDENTIFIER.WEAPON).to(Shuriken).whenParentNamed(TAG.CHINESE);
kernel.bind<Weapon>(SERVICE_IDENTIFIER.WEAPON).to(Katana).whenParentNamed(TAG.JAPANESE);
```

# How can I run it?
You can clone it using:

```
$ git clone https://github.com/inversify/inversify-basic-example.git
```

To run this example you need to install some dependencies:

```
$ cd inversify-basic-example
$ npm install
```

And compile the TypeScript code into JavaScript code:

```
$ gulp
```

At this point you are ready to run the example:

```
$ node dist/main.js
```
