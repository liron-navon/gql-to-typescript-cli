### GQL to Typescript cli

First you gonna need to install it: `npm install -g gql-to-typescript-cli`

To see the full documentation, after the installation, call:
```
$ gql-to-typescript-cli --help
```

### usage
Lets say you have a bunch of files on the server, in which you use the gql tag, you want them to be turned into greatly typed typescript? it's simply a matter of calling:

```
$ npm install -g gql-to-typescript-cli
$ gql-to-typescript-cli convert -o 'my-types.ts' -g 'src/**/*.gql.ts'
```

What you would probably want to do is create a config file and just use that every time, in it you should also define custom scalar types and some types to ignore, so you can just call:
```
$ gql-to-typescript-cli init
```

which will generate a json file names `.gql-to-typescript.config.json` with the following options:
```json
{
  "glob": "./**/*.ts",
  "scalars": {},
  "ignoreFields": [
    "_empty"
  ],
  "ignoreTypes": [],
  "namespace": "GraphqlTypes",
  "outputFile": "./GraphqlTypes.ts"
}
```

And now you can use:
```
$ gql-to-typescript-cli convert
```
