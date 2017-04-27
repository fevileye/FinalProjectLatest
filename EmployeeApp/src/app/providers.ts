import{OpaqueToken} from '@angular/core';

export const lookupListToken=new OpaqueToken('lookupListToken');

export const lookupLists = {
    genders: [{ value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' }],
    grades:[
        { value: 'SE-JP', viewValue: 'SE JP' },
        { value: 'SE-PG', viewValue: 'SE PG' },
        { value: 'SE-AP', viewValue: 'SE AP' },
        { value: 'SE-AN', viewValue: 'SE AN' },
        { value: 'SE-JT', viewValue: 'SE JP' },
        { value: 'SE-ST', viewValue: 'SE JP' },
    ],
    divisions:[
        { value: 'CDC- AsterX', viewValue: 'CDC- AsterX' },
        { value: 'CDC- Sun', viewValue: 'CDC- Sun' },
        { value: 'SWD', viewValue: 'SWD' },
    ],
    gendersFilter: [{ value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' },
    { value: 'All', viewValue: 'All' }],
};