import {convertFiles, getDefaultOption} from 'gql-to-typescript';
import {consoleFlags} from './consoleUtils';
import * as fs from 'fs';
import * as program from 'commander';
import * as path from 'path';

const pkg = require('../package.json');

const defaultConfigFile = '.gql-to-typescript.config.json';
const defaultOptions = getDefaultOption();

program
    .version(pkg.version)
    .description(pkg.description);

program
    .command('init')
    .description('initiates a config file')
    .option('-o, --output [value]', 'where to put the config file', `${defaultConfigFile}`)
    .action((cmd) => {
        const filePath = path.join(cmd.output);
        // write data to the file
        const content = JSON.stringify(defaultOptions, null, 2);
        fs.writeFileSync(filePath, content);

        console.info(
            consoleFlags.info,
            `Created a configuration file at:`,
            consoleFlags.underscore,
            filePath
        );
    });

program
    .command('convert')
    .description('convert files with gql tags to typescript definition')
    .option('-s, --silent [value]', 'a boolean defining if there should be any messages, default is false', `${defaultOptions.silent}`)
    .option('-g, --glob [value]', 'a glob for selecting files')
    .option('-c, --config [value]', 'a path to a config file', `${defaultConfigFile}`)
    .option('-o, --outputFile [value]', 'the generated types will go here', defaultOptions.outputFile)
    .option('-ns, --namespace [value]', 'a namespace for the types', defaultOptions.namespace)
    .option('-s, --scalars [value]', 'scalar types, as a json string (object)', JSON.stringify(defaultOptions.scalars))
    .option('-it, --ignoreTypes [value]', 'types to ignore, as a json string (array)', JSON.stringify(defaultOptions.ignoreTypes))
    .option('-if, --ignoreFields [value]', 'fields to ignore, as a json string (array)', JSON.stringify(defaultOptions.ignoreFields))
    .action((cmd) => {
        const cmdCopy = {...cmd};
        const {config} = cmdCopy;

        try {
            const configContent = fs.readFileSync(config, 'utf8');
            const parsedConfig = JSON.parse(configContent);
            Object.assign(cmdCopy, parsedConfig);
        } catch (e) {
            console.info(
                consoleFlags.info,
                `No config file was found, you can create one by running:`,
                consoleFlags.emphasis,
                `${cmd.parent._name} init`
            );
        }

        if (!cmdCopy.glob || !cmdCopy.outputFile) {
            console.error(
                consoleFlags.error,
                'You must specify at least a',
                consoleFlags.underscore,
                'glob',
                consoleFlags.reset,
                consoleFlags.error,
                'and an',
                consoleFlags.underscore,
                'outputFile'
            );
            return;
        }

        const {glob, outputFile, namespace, scalars, ignoreTypes, ignoreFields, silent} = cmdCopy;

        const options: any = {
            outputFile
        };
        if (namespace) {
            options.namespace = namespace;
        }
        if (ignoreTypes) {
            options.ignoreTypes = typeof ignoreTypes === 'string' ? JSON.parse(ignoreTypes) : ignoreTypes;
        }
        if (ignoreFields) {
            options.ignoreFields = typeof ignoreFields === 'string' ? JSON.parse(ignoreFields) : ignoreFields;
        }
        if (scalars) {
            options.scalars = typeof scalars === 'string' ? JSON.parse(scalars) : scalars;
        }
        if (silent) {
            options.silent = stringToBoolean(silent);
        }

        // it will log a message after the conversion unless silent is true
        return convertFiles(glob, options);
    });

function stringToBoolean(string) {
    switch (string.toLowerCase().trim()) {
        case 'true': case 'yes': case '1': case 'y': return true;
        case 'false': case 'no': case '0': case 'n': case null: return false;
        default: return Boolean(string);
    }
};

program.parse(process.argv);
