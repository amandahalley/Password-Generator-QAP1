#!/usr/bin/env node

//Function to generate random password
function generatePassword(length, includeNumbers, includeCapitals, includeSymbols) {

    //character sets
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?-";
    
    //Base character set of password (lower case only)
    let characterSet = lowercase;

    //customizations
    //Add numbers to character set
    if (includeNumbers) {
        characterSet += numbers;
    }

    //Add capital letters to character set
    if (includeCapitals) {
        characterSet += capitals;
    }
    
    // Symbols feature implemented
    //Add symbols to character set
    if (includeSymbols) {
        characterSet += symbols;
    }


    //Generate password, selects characters from character set
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    return password;
}

// Help message - instructions for user

function showHelp() {
    console.log(`
Password Generator CLI Tool

Usage:
  password-generator options

Options:
  --help, -h          Show help message
  --length, -l        Set password length (default is 8)
  --numbers, -n       Include numbers in the password
  --capitals, -c      Include capital letters in the password
  --symbols, -s        Include symbols in the password

  Example: password-generator --length 10 --numbers --capitals --symbols
  (this will give a password containing numbers, capital letters, and symbols and a length of 10 characters.)
`);
    }

//set default values and generate password
function run() {
    const args = process.argv.slice(2); //grabs command line arguments  passed in the terminal.
    
    let length = 8; //Default password length
    let includeNumbers = false;
    let includeCapitals = false;
    let includeSymbols = false;

    //Check for flags by looping through arguments
    function handleArguments(args) {
        let i = 0;

        while (i < args.length) {
            switch (args[i]) {
                case '--help':
                case '-h':
                    showHelp();
                    return; 
                
                case '--length':
                case '-l':
                    const nextArg = args [i + 1] //This gets next argument
                    const parsedLength = parseInt(nextArg); // Parse length
                    if (!isNaN(parsedLength) && parsedLength > 0) {
                        length = parsedLength; //Set length if valid
                        i++; //Skips next arguements since its the length value
                    } else {
                        console.error('Error: Please enter a valid length')
                        return;
                    }
                    break;

                case '--numbers':
                case '-n':
                    includeNumbers = true; //include numbers
                    break;

                case '--capitals':
                case '-c':
                    includeCapitals = true; //include capitals
                    break;

                case '--symbols':
                case '-s':
                    includeSymbols = true; //include symbols
                    break;

                // Option not recognized, show default help message
                default:
                    console.error(`Unknown arugment: ${args[i]}`);
                    showHelp();
                    return;
            }
            i++ // move to next argument
        }
    }
    //handle command line arguments
    handleArguments(args);

    //Generate and print the password based on options chosen
    const password = generatePassword(length, includeNumbers, includeCapitals, includeSymbols);
    console.log(`Generate Password: ${password}`);
}

//execute run function
run();
 


