import {DynamicFormModel, DynamicInputModel} from '@ng-dynamic-forms/core';

export const SeedFormModel: DynamicFormModel = [

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
        id: 'productCode',
        label: 'Codice prodotto',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Codice prodotto',
        readOnly: false,
        autoComplete: 'false'
    }),

    new DynamicInputModel({
        id: 'lotCode',
        label: 'Codice lotto',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Codice lotto',
        readOnly: false,
        autoComplete: 'false'
    }),

    new DynamicInputModel({
        id: 'species',
        label: 'Specie',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Specie',
        readOnly: false,
        autoComplete: 'false'
    }),

    new DynamicInputModel({
        id: 'variety',
        label: 'Varietà',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Varietà',
        readOnly: false,
        autoComplete: 'false'
    }),

    new DynamicInputModel({
        id: 'country',
        label: 'Paese',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Paese',
        readOnly: false,
        autoComplete: 'false'
    }),

    new DynamicInputModel({
        id: 'date',
        label: 'Data produzione',
        inputType: 'date',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Data produzione',
        readOnly: false,
        autoComplete: 'false'
    }),

    new DynamicInputModel({
        id: 'certificate',
        label: 'Certificato',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Certificato',
        readOnly: false,
        autoComplete: 'false'
    })
];
