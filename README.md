## Steps to contribute

### Clone the repo

-   Fork the repo (you have to do this only once).
-   Clone the repository to get a local copy
-   Make sure your node version is 18.15.0 (see .nvmrc file)
-   Run `npm install`
-   Run `npm run dev` to start the development server ([http://localhost:3000](http://localhost:3000))

### Work on the project

-   Before you start making changes, create and move to a new branch with the command `git checkout -b <your-new-branch>`
-   After making some changes, run:
    -   `git add .`
    -   `git commit -m "commit-message"`
    -   `git push origin <your-new-branch>`

### Merge your work into the main repo branch

-   Go to your github account and create a new "pull request" to merge the changes back to the original github repository.
-   Wait until the repository owner accepts the pull request.
-   Sync your fork repository with the main repository.
-   Go to your local repository and run:
    -   `git checkout main`
    -   `git pull`
    -   `git checkout <your-new-branch>`

Now all repositories are up to date and in sync, and you can continue making changes.
