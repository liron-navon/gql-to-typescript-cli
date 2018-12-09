// this helps typescript import json files
declare module '*.json' {
    const value: any;
    export default value;
}
