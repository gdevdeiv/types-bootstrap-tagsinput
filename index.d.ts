// Type definitions for bootstrap-tagsinput
// Project: https://github.com/bootstrap-tagsinput/bootstrap-tagsinput
// Definitions by: David Juan Ahullana <https://davidjotta.me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery"/>

interface TagsinputOptions {
    tagClass?: string;
    itemValue?: string;
    itemText?: string;
    confirmKeys?: number[];
    maxTags?: number;
    maxChars?: number;
    trimValue?: boolean;
    allowDuplicates?: boolean;
    focusClass?: string;
    freeInput?: boolean;
    typeahead?: TypeaheadArraySource | TypeaheadFunctionSource;
    cancelConfirmKeysOnEmpty?: boolean;
    onTagExists?: (item: any, tag: any) => any;
}

interface TypeaheadArraySource {
    source?: string[];
}

interface TypeaheadFunctionSource {
    source?: (query: any) => any;
}

interface JQuery {
    tagsinput(): JQuery;
    tagsinput(methodName: string): any;
    tagsinput(methodName: string, params: any): any;
    tagsinput(options: TagsinputOptions): JQuery;
}