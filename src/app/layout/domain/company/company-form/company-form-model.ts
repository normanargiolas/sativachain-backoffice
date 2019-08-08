import {DynamicFormModel, DynamicInputModel} from '@ng-dynamic-forms/core';

export const CompanyFormModel: DynamicFormModel = [

    new DynamicInputModel({
        id: 'id',
        label: 'ID',
        readOnly: true
    }),

    new DynamicInputModel({
        id: 'owner',
        label: 'Utente',
        readOnly: true
    }),

    new DynamicInputModel({
        id: 'name',
        label: 'Name',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Company name',
        readOnly: false,
        autoComplete: 'false'
    }),

    new DynamicInputModel({
        id: 'legalOffice',
        label: 'Sede legale',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Sede legale',
        readOnly: false,
        autoComplete: 'false'
    }),

    new DynamicInputModel({
        id: 'representative',
        label: 'Rappresentante legale',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Rappresentante legale',
        readOnly: false,
        autoComplete: 'false'
    }),

    new DynamicInputModel({
        id: 'vatNumber',
        label: 'Partita IVA',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Partita IVA',
        readOnly: false,
        autoComplete: 'false'
    }),

    new DynamicInputModel({
        id: 'fiscalCode',
        label: 'Codice fiscale',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Codice fiscale',
        readOnly: false,
        autoComplete: 'false'
    }),

    new DynamicInputModel({
        id: 'pec',
        label: 'PEC',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'PEC',
        readOnly: false,
        autoComplete: 'false'
    }),

    new DynamicInputModel({
        id: 'email',
        label: 'Email',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Email',
        readOnly: false,
        autoComplete: 'false'
    }),

    new DynamicInputModel({
        id: 'webSite',
        label: 'Sito web',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Sito web',
        readOnly: false,
        autoComplete: 'false'
    }),

    new DynamicInputModel({
        id: 'registrationLink',
        label: 'Registrazione camera di commercio',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Registrazione camera di commercio',
        readOnly: false,
        autoComplete: 'false'
    })
];
