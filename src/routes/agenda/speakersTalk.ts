import type { Speaker } from "../SpeakerBio.svelte";

export const speakers: Speaker[] = [
  {
    name: 'Felienne Hermans',
    letters: 'MT',
    title: 'Professor of Computer Science',
    employer: 'Vrije Universiteit Amsterdam',
    image: '/speakers/Felienne-Hermans-LIACS.jpeg',
    bio: "Felienne is a professor of Computer Science Education at the Vrije Universiteit Amsterdam. She also works as a high-school CS teacher one day a week at Lyceum Kralingen in the Codasium program. Felienne is the creator of the Hedy programming language, a gradual and multi-lingual programming language designed for teaching. She is the author of “The Programmer’s Brain“, a book that helps programmers understand how their brain works and how to use it more effectively. In 2021, Felienne was awarded the Dutch Prize for ICT research. She also has a weekly column on BNR, a Dutch radio station. "
  },
  {
    name: 'Alexey Preobrazhenskiy',
    letters: 'JB',
    title: 'How bazel streamlines python development: stories from the Uber monorepo',
    employer: '',
    image: '/speakers/Alexey.jpeg',
    bio: "I'll talk about how we addressed some of Uber's developer experience challenges by building a python monorepo using bazel and how your python project can benefit from adopting a build tool. If you have ever written a 'how to set up your environment' document, struggled with reproducing a CI failure locally, tried to prevent CI from running a 3 hour test suite on a pull request that changed the README file, or ever broke some unrelated project by upgrading your project's dependencies, you might find some inspiration in this talk. Delving into challenges and solutions in monorepo environments, this talk will provide practical insights on dependency management and continuous integration performance. This session is ideal for developers seeking to transition to the monorepo-style development, or generally trying to improve the developer experience."
  },
  {
    name: 'Pavel Filonov',
    letters: 'ML',
    title: 'Past, Present and Future of Python parallelism',
    employer: '',
    image: '/speakers/PavelFilonov.png',
    bio: `Currently, there are six distinct methods for achieving parallelism in Python:
Past
  1. Don’t use parallelism
Present
  2. Write Python Extension
  3. Multithreading
  4. Multiprocess
Future
  5. Multiple interpreters (PEP 734)
  6. Optional GIL (PEP 703)
What are the pros and cons of these approaches? This talk will discuss experimental results using a simple CPU-bound problem, specifically counting prime numbers in parallel.`
  },
  {
    name: 'Merel Theisen',
    letters: 'LC',
    title: `Efficient Python Project Setup: Showing Cookiecutter's Potential within Kedro`,
    employer: '',
    image: '/speakers/headshot_merel_theisen.png',
    bio: `Cookiecutter is an open-source Python library designed for creating project templates, promoting best practices, and saving developer time by enabling repeatable templates for your entire team. It’s useful for both traditional software and data projects. This talk will demonstrate how we've used Cookiecutter as a foundation for Kedro, a Python framework for reproducible, modular data science code. Attendees will gain insights into how Cookiecutter in Kedro allows precise customisation, from best practices to production-ready pipelines. You will learn practical tips for integrating these tools into your workflow to achieve efficient and reproducible python projects. This talk is ideal for data scientists, software developers, and team leads looking to streamline their project setup processes and ensure adherence to best practices. A basic understanding of Python programming will be beneficial.`
  },
  {
    name: 'Daniele Procida',
    letters: 'JB',
    title: 'The attentive programmer',
    employer: '',
    image: '/speakers/Daniele 650x650.jpeg',
    bio: `“I photograph to find out what something will look like photographed”, said the great photographer Garry Winogrand. The genius of his work lies in his phenomenal powers of attention, his ability to see. Seeing is a deliberate act.
What do programmers “see”? How well do we do it? And are we so full of *intention* that we fail to pay *attention*?
I want to pursue this question, with the aid of photography. I want to light up a potential dimension in programming that I haven’t seen explored. For example: why is it that a story or photograph can be about something, but we never hear of a computer program that is about something? Is it not possible? Or have we just missed it? We’re all familiar with love poems and love songs - could a love program exist? What would it look like?
I think we can answer all those questions in interesting ways, that connect our understanding and appreciation of the world and our arts with programming.`
  },
  {
    name: 'Arjan Egges',
    letters: 'SZ',
    title: 'How Functional Programming Can Help You Write Better Python Code',
    employer: '',
    image: '/speakers/Arjan Egges.jpg',
    bio: `Functional programming is an incredibly powerful paradigm that helps write simple and effective code. However, concepts like high-order functions, closures or partial function application may seem daunting. In this talk, I’ll go over these techniques as well as a few other ideas from functional programming in a practical setting. I’ll show you how to apply them to write Python code that's easy to work on.`
  },
  {
    name: 'Donatas Rasiukevicius',
    letters: 'SZ',
    title: 'Strategies for avoiding package.json for fullstack python devs',
    employer: '',
    image: '/speakers/Donatas.jpg',
    bio: `Fullstack devs have the hardest life of all - after implementing the business logic, they also get to fiddle around with whatever frontend tech is hot at the moment to center a div. The frontend space can be pretty volatile in changes and keeping up with both tech developments on the frontend and the backend can be challenging. To that end, we see more and more ways to move some of the frontend work into the backend. Projects like HTMX and Hotwire are popping up that allow devs to add interactivity without having to understand what a 'Redux' is.
In this talk we take a look at how this frontend-migration might look when taken to the extreme; what happens to your app performance, tests, code readability, and developer experience when you move the frontend all the way to the back?`
  },
  {
    name: 'Anwesha Das',
    letters: 'SZ',
    title: 'Using PyPI Trusted Publishing to Ansible release',
    employer: '',
    image: '/speakers/anwesha.jpg',
    bio: `"Trusted publishing" is the term for using the OpenID Connect (OIDC) standard in the Python Ecosystem to release on PyPI.  In this talk will go though the usage of trusted publishing in any Python project and how it helped Ansible project to open up release management to the community.

"Trusted publishing" is the  the way of  exchanging short-lived identity tokens between a trusted third-party service and PyPI. This key feature in PyPI empowers the project maintainers to make releases via automated environments directly . This helps us to get rid of the use of manually generated API tokens. This talk will dig deeper in the practical aspects and impact of moving manual  release process to automated release via github actions and trusted publishing. The  talk will describe the trusted publishing from the view of a Release Manager of a critical project like Ansible.

In my talk, I will go through.

What is trusted publishing?
why it is needed?
How to use trusted publishing?
Ansible manual release process in nutshell.
Releasing Ansible with Github actions and Trusted Publishing
Release automation: lessons learned`
  },
  {
    name: 'Lukáš Ševčík',
    letters: 'SZ',
    title: 'Events in Fintech: From State Machines to Event-Sourced Systems',
    employer: '',
    image: '/speakers/_DSC2160.jpeg',
    bio: `Event-sourced architecture stores all changes to an application’s state as a sequence of immutable events instead of storing a single mutable status. In this talk, we will explore how this approach can help eliminate race conditions, increase visibility into the system and decouple use cases, making changing business requirements easier to handle. Let’s dive deeper into it by studying a case of the transition from state machine to event-sourced architecture in a FinTech service processing customer payments.
In an event-driven landscape where high-traffic systems usually grab the spotlight, we highlight how event architectures benefit scenarios with less traffic too.

We will dig deep into states and events and address the common confusion around events and commands, which are sometimes used interchangeably. The talk will discuss both the benefits and challenges of event sourcing.

After this talk, I want you to feel confident adding event sourcing to your set of programming tools and deciding when to apply it.

Outline:
Introduction to States and Events: 5 min
- States as System Snapshots
- Clarifying Events: Differentiating between commands and events.
Benefits of Event Sourcing 7 min
- Choosing Event Sourcing: How event sourcing addressed our challenges
- Open/Closed Principle: Adding new events easily
- Enhanced Recovery and Transparency
- Preventing Race Conditions
- Decoupling of states
Challenges of Event Sourcing 5 min
- Increased Complexity
- Making Informed Choices: Providing insights to help attendees weigh the pros and cons of event sourcing.`
  },
  {
    name: 'Brett Slatkin',
    letters: 'SZ',
    title: 'Key Note 2: The Zen of Polymorphism',
    employer: '',
    image: '/speakers/bslatkin_square.png',
    bio: ""
  }
];