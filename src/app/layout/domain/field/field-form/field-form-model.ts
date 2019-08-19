import {DynamicFormModel, DynamicInputModel} from '@ng-dynamic-forms/core';

export const FieldFormModel: DynamicFormModel = [

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
        id: 'size',
        label: 'Dimensione',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Dimensione',
        readOnly: false,
        autoComplete: 'false'
    }),

    new DynamicInputModel({
        id: 'lat',
        label: 'Latitudine',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Latitudine',
        readOnly: false,
        autoComplete: 'false'
    }),

    new DynamicInputModel({
        id: 'lon',
        label: 'Longitudine',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Longitudine',
        readOnly: false,
        autoComplete: 'false'
    }),

    new DynamicInputModel({
        id: 'address',
        label: 'Località',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Località',
        readOnly: false,
        autoComplete: 'false'
    }),

    new DynamicInputModel({
        id: 'company',
        label: 'Azienda',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Azienda',
        readOnly: false,
        autoComplete: 'false'
    }),

    new DynamicInputModel({
        id: 'cadastralData',
        label: 'Dati catastali',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Dati catastali',
        readOnly: false,
        autoComplete: 'false'
    }),

    new DynamicInputModel({
        id: 'authorization',
        label: 'Autorizzazione',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Autorizzazione',
        readOnly: false,
        autoComplete: 'false'
    })
];
