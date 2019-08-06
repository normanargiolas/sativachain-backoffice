import {DynamicFormLayout, DynamicFormModel, DynamicInputModel, DynamicSelectModel} from '@ng-dynamic-forms/core';

const booleanOptions = [
    {label: 'Select', value: ''},
    {label: 'True', value: 'true'},
    {label: 'False', value: 'false'}
]

export const BackofficeUserFilterFormModel: DynamicFormModel = [

    new DynamicInputModel({
        id: 'id',
        label: 'Id',
        additional: {'op': 'ILike'}
    }),
    new DynamicInputModel({

        id: 'username',
        label: 'Username',
        autoComplete: 'false',
        additional: {'op': 'ILike'}

    }),

    new DynamicInputModel({
        id: 'email',
        label: 'Email',
        additional: {'op': 'ILike'}

    }),

    new DynamicInputModel({
        id: 'firstName',
        label: 'Nome',
        additional: {'op': 'ILike'}

    }),

    new DynamicInputModel({
        id: 'lastName',
        label: 'Cognome',
        additional: {'op': 'ILike'}

    }),

    new DynamicInputModel({
        id: 'email',
        label: 'Email',
        additional: {'op': 'ILike'}

    }),


    new DynamicSelectModel({
        id: 'enabled',
        label: 'Abilitato',
        options: booleanOptions,
        additional: {'op': 'Equal'}
    }),

    new DynamicSelectModel({
        id: 'accountExpired',
        label: 'Account scaduto',
        options: booleanOptions,
        additional: {'op': 'Equal'}
    }),

    new DynamicSelectModel({
        id: 'accountLocked',
        label: 'Account bloccato',
        options: booleanOptions,
        additional: {'op': 'Equal'}
    }),

    new DynamicSelectModel({
        id: 'passwordExpired',
        label: 'Password scaduta',
        options: booleanOptions,
        additional: {'op': 'Equal'}
    })
];

export const BackofficeUserFilterFormLayout: DynamicFormLayout = {

    'id': {
        grid: {
            control: 'input-group-sm',
            container: 'col form-group',
        }
    },
    'username': {
        grid: {
            container: 'col form-group',
        }
    },
    'email': {
        grid: {
            container: 'col form-group',
        }
    },
    'firstName': {
        grid: {
            container: 'col form-group',
        }
    },
    'lastName': {
        grid: {
            container: 'col form-group',
        }
    },
    'enabled': {
        grid: {
            container: 'col form-group',
        }
    },
    'accountExpired': {
        grid: {
            container: 'col form-group',
        }
    },
    'accountLocked': {
        grid: {
            container: 'col form-group',
        }
    },
    'passwordExpired': {
        grid: {
            container: 'col form-group',
        }
    },
}
