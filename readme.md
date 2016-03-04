# Rory: Catch content style guide violations

![Rory logo](rorylogo.png)

## Installing

Make sure you have [node.js](https://nodejs.org/en/download/) installed, then run:

```sh
$ sudo npm install --global git+ssh://git@github.com:Shopify/rory
```

## Using the command line

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

When no input files are given to **rory**, it searches for markdown and text files in the current directory.

If you want to search all Ruby files within your current directory, run:

```sh
$ rory *.rb
```
If you want to write the results to a file, use the `tee` command.

```sh
$ rory *.rb | tee output.txt
```

If you want to check a string within your terminal:

```sh
$ echo "Login to the Shopify Manual to customise colours in the Shopify point of sale application." | rory
```

Run `$ rory --help` for more information. You can also check out Titus Wormer's [original alex.js application](https://github.com/wooorm/alex) for info about the API, which we haven't looked into yet.


