
const
    chalk = require('chalk'),
    shell = require('shelljs')
;

    console.log(chalk.green('------- CHECKING VERSION OF NODE ---------'))

    shell.exec(`
        export NODE_VERSION=$(node -v)
        echo "--*** : Your version of node you are on right now :" 
        node -v
        echo "Must be v14.15.5"
    `)

    if(process.env.NODE_VERSION !== 'v14.15.5'){
        console.log(chalk.red(`WRONG VERSION OF NODE`))
        console.log(chalk.magenta('------- setting node version via nvm ---------'))

        shell.exec(`
            . /usr/local/opt/nvm/nvm.sh
            nvm list
            nvm use v14.15.5 --version
            
            export NODE_VERSION=$(node -v)
            
            nodemon ../../index.js
        `)
    }

    // shell.exec(`
    //
    //     echo "---------- CHECK NODE VERSION"
    //
    //     export NODE_VERSION=$(node -v)
    //
    //     echo "NODE VERSION CURRENTLY RUNNING = $NODE_VERSION"
    //
    //     echo "If not 14.15.5 ... set to 14.15.5"
    //     if [ $NODE_VERSION != "v14.15.5" ]
    //     then
    //         echo "NOT OF CORRECT NODE VERSION"
    //         echo "UPDATING NODE via nvm"
    //
    //         . /usr/local/opt/nvm/nvm.sh
    //          nvm list
    //
    //
    //         nvm use v14.15.5 --version
    //     fi
    //
    //     echo "We are on node version ---->"
    //     node -v
    //     echo "DONE----------------------------- Setting up Node"
    //
    //     echo " ........................... "
    //     echo " ........................... "
    //
    // `)
