# Rory: Catch content style guide violations

**Rory** finds style errors by comparing input text against a set of incorrect terms in the [retext-styleguide](https://github.com/Shopify/retext-styleguide) repo. **Rory** explains why your word choices are incorrect according to the Shopify [content](https://styleguide.myshopify.com/content/) and [documentation](https://vault.shopify.com/Documentation/Documentation-Style-Guide) style guides (for example, "avoid anthropomorphism"), and suggests alternatives.

![Rory logo](rorylogo.png)

You can run **rory** from the command line, or install a [plugin](https://github.com/Shopify/linter-rory) for the text editor [**Atom**](https://atom.io/) that checks your text as you type.

![Rory command line screenshot](rory-cmd-screenshot.png)

## Installing

1. Make sure you have [**node.js**](https://nodejs.org/en/download/) installed.
2. Open a Terminal window.
3. Run ```$ sudo npm install --global git+ssh://git@github.com:Shopify/rory``` to install **rory**, as well as installing **retext-styleguide** as a module within **rory**.

## Using the Atom linter

Install **rory**, then see the readme for [**linter-rory**](https://github.com/Shopify/linter-rory).

## Using the command line

You can run rory from the command line for extra functionality.

### Check a specific file

Say `example.md` contains the following text:

```md
Login to the Shopify Manual to customise colours in the Shopify point of sale application. 
```

Run **rory** on `example.md`:

```sh
$ rory example.md
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

You can run rory on any text file type, including Ruby.

### Check a directory

When no input files are given to **rory**, it searches for markdown and text files in the current directory.

If you want to search other types of files, you can use wildcards to create your rory command.

To search all Ruby files within your current directory, for example, run:

```sh
$ rory *.rb
```
### Write rory messages to a file

If you want to write the results of a rory check to a file, use the `tee` command.

```sh
$ rory *.rb | tee output.txt
```

### Check a string

If you want to check a string within your terminal:

```sh
$ echo "Login to the Shopify Manual to customise colours in the Shopify point of sale application." | rory
```

### Help

Run `$ rory --help` for more information. You can also check out Titus Wormer's [original **alex.js** application](https://github.com/wooorm/alex) for info about the API, which we haven't looked into yet.

## Contributing

### Adding rules

See the readme in [**retext-styleguide**](https://github.com/Shopify/retext-styleguide).

### Making changes to rory

Create an issue or pull request in this repo.

### Making changes to the Atom linter

See the readme for [**linter-rory**](https://github.com/Shopify/linter-rory).
