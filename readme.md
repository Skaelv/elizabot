# rorybot: Catch content style guide violations

**rorybot** finds style errors by comparing input text against a set of incorrect terms in the [retext-shopify](https://github.com/Shopify/retext-shopify) repo. **rorybot** explains why your word choices are incorrect according to the Shopify content and documentation style guides (for example, "avoid anthropomorphism"), and suggests alternatives.

![rorybot logo](rorybotlogo.png)

You can run **rorybot** from the command line, or install plugins for the text editors [Atom](https://github.com/Shopify/linter-rorybot) and [Sublime Text](https://github.com/Shopify/sublimelinter-rorybot) that check your text as you type.

![rorybot command line screenshot](rorybot-cmd-screenshot.jpg)

## Installing

1. Make sure you have [**node.js**](https://nodejs.org/en/download/) installed.
2. Open a Terminal window.
3. Run ```$ npm install rorybot``` to install **rorybot**, which will also install **retext-shopify** as a module within **rorybot**.

## Using the Atom linter

Install **rorybot**, then see the readme for [**linter-rorybot**](https://github.com/Shopify/linter-rorybot).

## Using the Sublime Text linter

Install **rorybot**, then see the readme for [**sublimelinter-rorybot**](https://github.com/Shopify/sublimelinter-rorybot).

## Using the command line

You can run **rorybot** from the command line for extra functionality.

### Check a specific file

Say `example.md` contains the following text:

```md
Login to the Shopify Manual to customise the Shopify point of sale application. 
```

Run **rorybot** on `example.md`:

```sh
$ rorybot example.md
```

This yields:

```txt
example.md
    1:1-1:6  warning  `Login to` violates Shopify style: 'login is a noun, not a verb.' Use `Log into`.              login-to
  1:14-1:21  warning  `Shopify Manual` violates Shopify style: 'incorrect branded name.' Use `Shopify Help Center`.  help-centre
  1:32-1:41  warning  `customise` violates Shopify style: 'write with American spelling.' Use `customize`.           customise
  1:57-1:64  warning  `Shopify point of sale` violates Shopify style: 'incorrect branded name.' Use `Shopify POS`.   Shopify-point of sale

⚠ 4 warnings
```

You can run **rorybot** on any text file type, including Ruby.

### Check a directory

When no input files are given to **rorybot**, it searches for markdown and text files in the current directory.

If you want to search other types of files, you can use wildcards to create your **rorybot** command.

To search all Ruby files within your current directory, for example, run:

```sh
$ rorybot *.rb
```
### Write rorybot messages to a file

If you want to write the results of a **rorybot** check to a file, use the `tee` command.

```sh
$ rorybot *.rb | tee output.txt
```

### Check a string

If you want to check a string within your terminal:

```sh
$ echo "Login to the Shopify Manual to customise colours in the Shopify point of sale application." | rorybot
```

### Help

Run `$ rorybot --help` for more information. You can also check out Titus Wormer's [original **alex.js** application](https://github.com/wooorm/alex) for info about the API, which we haven't looked into yet.

## Contributing

### Adding rules

See the readme in [**retext-shopify**](https://github.com/Shopify/retext-shopify).

### Making changes to rorybot

Create an issue or pull request in this repo.

### Making changes to the Atom linter

See the readme for [**linter-rorybot**](https://github.com/Shopify/linter-rorybot).

### Making changes to the Sublime Text linter

See the readme for [**sublimelinter-rorybot**](https://github.com/Shopify/sublimelinter-rorybot).
