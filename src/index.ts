import {maskJson} from './utils/masking';

const test = () => {
  const exampleJson = {
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
          phone: '098-765-4321',
        },
      },
      phone: '555-555-5555',
    },
    hobbies: [
      'painting',
      'cycling',
      {
        type: 'adventure',
        email: 'adventure@example.com',
        phone: '111-222-3333',
      },
    ],
    work: {
      company: 'Tech Corp',
      department: {
        name: 'Development',
        lead: {
          name: 'Charlie',
          email: 'charlie.lead@example.com',
          phone: '222-333-4444',
        },
      },
      employees: [
        {
          name: 'Dave',
          email: 'dave@techcorp.com',
          phone: '333-444-5555',
        },
        {
          name: 'Eve',
          email: 'eve@techcorp.com',
          phone: '444-555-6666',
        },
      ],
    },
    family: [
      {
        name: 'Frank',
        role: 'father',
        email: 'frank@example.com',
        phone: '555-666-7777',
      },
      {
        name: 'Grace',
        role: 'mother',
        email: 'grace@example.com',
        phone: '666-777-8888',
      },
      {
        name: 'Hank',
        role: 'brother',
        email: 'hank@example.com',
        phone: '777-888-9999',
      },
    ],
    contacts: [
      {
        type: 'personal',
        email: 'personal@example.com',
        phone: '888-999-0000',
      },
      {
        type: 'business',
        email: 'business@example.com',
        phone: '999-000-1111',
      },
    ],
  };

  const mask = maskJson(exampleJson, {
    phoneMask: ['phoneNo'],
    emailMask: [''],
  });

  console.log('result :>> ', JSON.stringify(mask));
};

test();
