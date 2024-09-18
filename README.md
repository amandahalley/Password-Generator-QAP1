# Password Generator CLI Tool

This is a command-line interface (CLI) tool for generating random passwords and allows you to customize the password by including numbers, capital letters, and symbols.

## Features

- Generate random passwords of any length
- Option to include numbers 
- Option to include capital letters
- Option to include symbols

## Usage

The CLI tool is run from the terminal by using the following command

    password-generator [options]

## Options

* --help, -h: Show help message.
* --length, -l: Set password length (default is 8).
* --numbers, -n: Include numbers in the password.
* --capitals, -c: Include capital letters in the password.
* --symbols, -s: Include symbols in the password (symbols feature).

## Example

password-generator --length 12 --numbers --capitals --symbols

This command will generate a password of 12 characters that includes numbers, capital letters, and symbols.


