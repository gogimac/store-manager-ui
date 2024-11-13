interface Option { 
    labale: string;
    isEncrypted? : boolean,
    hasContextDetails? : boolean,
    value: string | number;
    subContexts?: string[];
}
export default Option;