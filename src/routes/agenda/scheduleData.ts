// scheduleData.ts
import { speakers } from './speakersTalk';

export interface ScheduleItem {
  time: string;
  title: string;
  speaker?: typeof speakers[number];
  partialText?: string;
  direction: 'left' | 'right';
  backgroundColor: 'north3' | 'north2' | 'shark' | 'fountain' | 'ordina' | 'soprasteria' | 'north';
  fontBold?: boolean;
  id?: number;
}

export const scheduleItems: ScheduleItem[] = [
  { time: '8:00 - 9:00', title: 'Walk-in', direction: 'right', backgroundColor: 'north3', fontBold: true },
  { time: '9:00 - 9:15', title: 'Opening', direction: 'right', backgroundColor: 'north3', fontBold: true },
  { 
    time: '9:15 - 10:00', 
    title: 'Key Note 1: Localization and translation of programming languages', 
    speaker: speakers[0], // Reference speaker from speakersTalk
    direction: 'left', 
    backgroundColor: 'north2' 
  },
  { 
    time: '10:05 - 10:35', 
    title: 'How bazel streamlines python development: stories from the Uber monorepo', 
    speaker: speakers[1], 
    direction: 'left', 
    backgroundColor: 'north2', 
    partialText: "I'll talk about how we addressed some of Uber's developer experience challenges by building a python ", 
    id: 1 
  },
  { time: '10:35 - 10:50', title: 'Coffee break ☕', direction: 'right', backgroundColor: 'north3', fontBold: true },
  { 
    time: '10:50 - 11:20', 
    title: 'Past, Present and Future of Python parallelism', 
    speaker: speakers[2], 
    direction: 'left', 
    backgroundColor: 'north2', 
    partialText: 'Currently, there are six distinct methods for achieving parallelism in Python', 
    id: 2 
  },
  { 
    time: '11:25 - 11:55', 
    title: "Efficient Python Project Setup: Showing Cookiecutter's Potential within Kedro", 
    speaker: speakers[3], 
    direction: 'left', 
    backgroundColor: 'north2', 
    partialText: 'Cookiecutter is an open-source Python library designed for creating project templates, promoting best practices,', 
    id: 3 
  },
  { 
    time: '12:00 - 12:30', 
    title: 'The attentive programmer', 
    speaker: speakers[4], 
    direction: 'left', 
    backgroundColor: 'north2', 
    partialText: '“I photograph to find out what something will look like photographed,” said the great photographer Garry Winogrand.', 
    id: 4 
  },
  { time: '12:30 - 13:30', title: 'Lunch break 🌮', direction: 'right', backgroundColor: 'north3', fontBold: true },
  { 
    time: '13:30 - 14:00', 
    title: 'How Functional Programming Can Help You Write Better Python Code', 
    speaker: speakers[5], 
    direction: 'left', 
    backgroundColor: 'north2', 
    partialText: 'Functional programming is an incredibly powerful paradigm that helps write simple and effective code.', 
    id: 5 
  },
  { 
    time: '14:05 - 14:35', 
    title: 'Strategies for avoiding package.json for fullstack python devs', 
    speaker: speakers[6], 
    direction: 'left', 
    backgroundColor: 'north2', 
    partialText: 'Fullstack devs have the hardest life of all - after implementing the business logic,', 
    id: 6 
},
{ time: '14:35 - 14:50', title: 'Coffee break ☕', direction: 'right', backgroundColor: 'north3', fontBold: true },
{ 
    time: '14:50 - 15:20', 
    title: 'Using PyPI Trusted Publishing to Ansible release', 
    speaker: speakers[7],  
    direction: 'left', 
    backgroundColor: 'north2', 
    partialText: '"Trusted publishing" is the term for using the OpenID Connect (OIDC) standard in the Python Ecosystem to release on PyPI.', 
    id: 7 
},
{ 
    time: '15:25 - 15:55', 
    title: 'Events in Fintech: From State Machines to Event-Sourced Systems', 
    speaker: speakers[8], 
    direction: 'left', 
    backgroundColor: 'north2', 
    partialText: 'Event-sourced architecture stores all changes to an application’s state as a sequence of immutable events instead', 
    id: 8 
},
{ time: '15:55 - 16:10', title: 'Coffee break ☕', direction: 'right', backgroundColor: 'north3', fontBold: true },
{ time: '16:10 - 16:55', title: 'Key Note 2: The Zen of Polymorphism', speaker: speakers[9], direction: 'left', backgroundColor: 'north2' },
{ time: '16:55 - 17:05', title: 'Closing', direction: 'right', backgroundColor: 'north3', fontBold: true },
{ time: '17:05 - 18:30', title: 'Drinks 🍻 & Snacks 🌭', direction: 'right', backgroundColor: 'north3', fontBold: true }
];
