## Dependency inversion pattern with React - Github users app use case!

This simple use case aims to demonstrate how it's possible to use the dependency inversion pattern in React, decoupling high-level modules from low-level modules.

High-level and low-level modules must depend on abstractions. To respect the principle, the interface feature of the object-oriented paradigm was used to create abstractions of the methods required. The idea here is that the highest level of the application (service layer) doesn't depend on concrete implementations (data layer) from the lowest-level but from abstractions. To explain it better, in this case, I have used the dependency inversion pattern to provide two different ways to search for a GitHub user using the GitHub API,  through Axios and Fetch.

In my point of view, dependency inversion guarantees a series of advantages in the software development cycle, among these advantages I can mention: easy code maintenance, tests, and decoupling between layers.

Please, fork this project, create a new branch and contribute if you have different approaches to work with dependency inversion in React.

