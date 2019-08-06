import {DynamicCheckboxModel, DynamicFormModel, DynamicInputModel} from '@ng-dynamic-forms/core';

export const BackofficeUserFormModel: DynamicFormModel = [

    new DynamicInputModel({

        id: 'id',
        label: 'ID',
        readOnly: true,
        hidden:true

    }),
    new DynamicInputModel({

        id: 'username',
        label: 'Username',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Username',
        readOnly: false,
        autoComplete: 'false'

    }),

    new DynamicInputModel({

        id: 'password',
        label: 'Password',
        inputType: 'password',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Password',
        readOnly: false,
        autoComplete: 'false'

    }),

    new DynamicCheckboxModel({

        id: 'enabled',
        label: 'Abilitato',
        required: false,


    }),

    new DynamicInputModel({

        id: 'email',
        label: 'Email',
        validators: {
            required: null,
            email: null
        },
        errorMessages: {
            required: '{{ label }} is required.',
            email: ' This {{label}} is not a valid address'
        },
        placeholder: 'Email',
        readOnly: false,

    }),
    new DynamicInputModel({

        id: 'firstName',
        label: 'Nome',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Nome',
        readOnly: false,

    }),
    new DynamicInputModel({

        id: 'lastName',
        label: 'Cognome',
        validators: {
            required: null
        },
        errorMessages: {
            required: '{{ label }} is required.'
        },
        placeholder: 'Cognome',
        readOnly: false,

    }),

    new DynamicCheckboxModel({

        id: 'accountExpired',
        label: 'Account scaduto',
        required: false,
        value: false
    }),

    new DynamicCheckboxModel({

        id: 'accountLocked',
        label: 'Account bloccato',
        required: false,
        value: false
    }),
    new DynamicCheckboxModel({

        id: 'passwordExpired',
        label: 'Password scaduta',
        required: false,
        value: false
    }),
];
