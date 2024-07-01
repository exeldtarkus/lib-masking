# maskJson Function

This project provides a `maskJson` function that takes a JSON object and a set of masking options to mask specific fields such as email and phone numbers. It can handle complex nested JSON structures.

## Features

- Masks email and phone number fields in JSON objects.
- Supports nested structures and arrays.
- Easy to extend for additional masking types.

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project-directory>
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

### maskJson Function

The `maskJson` function takes two parameters:

- `data`: A JSON object containing the data to be masked.
- `maskOption`: An object specifying which fields to mask.

### Example

Here's an example of how to use the `maskJson` function:

```typescript
import { maskJson } from './path/to/maskJson';
import { maskEmail, maskPhoneNumber } from './path/to/mask_data_config';

const complexJson = {
  name: 'Alice',
  age: 28,
  isEmployed: true,
  email: 'alice@example.com',
  phone: '123-456-7890',
  address: {
    city: 'Los Angeles',
    zip: '90001',
    details: {
      isVerified: true,
      manager: {
        name: 'Bob',
        email: 'bob.manager@example.com',
        phone: '098-765-4321'
      }
    },
    phone: '555-555-5555'
  },
  hobbies: [
    'painting',
    'cycling',
    {
      type: 'adventure',
      email: 'adventure@example.com',
      phone: '111-222-3333'
    }
  ],
  work: {
    company: 'Tech Corp',
    department: {
      name: 'Development',
      lead: {
        name: 'Charlie',
        email: 'charlie.lead@example.com',
        phone: '222-333-4444'
      }
    },
    employees: [
      {
        name: 'Dave',
        email: 'dave@techcorp.com',
        phone: '333-444-5555'
      },
      {
        name: 'Eve',
        email: 'eve@techcorp.com',
        phone: '444-555-6666'
      }
    ]
  },
  family: [
    {
      name: 'Frank',
      role: 'father',
      email: 'frank@example.com',
      phone: '555-666-7777'
    },
    {
      name: 'Grace',
      role: 'mother',
      email: 'grace@example.com',
      phone: '666-777-8888'
    },
    {
      name: 'Hank',
      role: 'brother',
      email: 'hank@example.com',
      phone: '777-888-9999'
    }
  ],
  contacts: [
    {
      type: 'personal',
      email: 'personal@example.com',
      phone: '888-999-0000'
    },
    {
      type: 'business',
      email: 'business@example.com',
      phone: '999-000-1111'
    }
  ]
};

const maskOptions = {
  emailMask: ['email'],
  phoneMask: ['phone', 'phoneNo', 'phoneNumber']
};

const maskedJson = maskJson(complexJson, maskOptions);
console.log(maskedJson);
