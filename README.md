# [Pokedex Project](https://pokedex-ayush05.netlify.app)

This is a full-stack application that allows users to browse and manage their Pokémon collection. Users can log in using Google authentication, view details of each Pokémon, and add Pokémon to their personalized list. The project features a sleek user interface and utilizes Firebase for authentication and database management.

**Deployed on:** [Netlify](https://pokedex-ayush05.netlify.app)

## Table of Contents
- [Pages Overview](#pages-overview)
  - [Search Page](#search-page)
  - [Compare Page](#compare-page)
  - [Pokémon Page](#pokemon-page)
    - [Description](#description)
    - [Evolution](#evolution)
    - [Catching](#catching)
    - [Capable Moves](#capable-moves)
  - [My List Page](#my-list-page)
  - [About Page](#about-page)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
  - [Frontend Setup](#frontend-setup)
- [Accessing the Application](#accessing-the-application)
- [User Registration and Login](#user-registration-and-login)
- [Database Management](#database-management)
- [Technologies Used](#technologies-used)

## Pages Overview

### Search Page
The **Search Page** allows users to find Pokémon by name or type.

- **Search Functionality**: Users can input their query to filter Pokémon.
- **Results Display**: A list of matching Pokémon is shown for users to browse.

![image](https://github.com/user-attachments/assets/ee5b03e6-02f7-4949-9f64-83e6e4722c0c)

### Compare Page
The **Compare Page** enables users to compare different Pokémon.

- **Comparison Features**: Users can select multiple Pokémon to view side-by-side stats and abilities.
- **Other Features**: Users can choose to add them to there list, view imformation and also remove them from the comaprison section.
- **User Feedback**: Notifications or visual cues enhance the comparison experience by the help of toasts.

![image](https://github.com/user-attachments/assets/e26c6245-b04d-45bc-8437-68d1e4df3009)

### Pokémon Page
The **Pokémon Page** provides detailed information about a selected Pokémon.

- **Description**: Basic information about the Pokémon, including type and stats.

![image](https://github.com/user-attachments/assets/354ea0d5-a91b-4dc8-8e78-13d955eb722e)
  
- **Evolution**: Details on how and when the Pokémon evolves.
  
![image](https://github.com/user-attachments/assets/8580a060-c410-43f7-8fda-9d706fba43d5)

- **Catching**: Tips and methods for capturing the Pokémon in the game.

![image](https://github.com/user-attachments/assets/548d8c72-85a5-4f45-bf77-a37ad6644791)

  
- **Capable Moves**: A list of moves the Pokémon can learn.

![image](https://github.com/user-attachments/assets/b59d3ff1-4497-4dcb-9622-92765aac2532)


### My List Page
The **My List Page** shows all Pokémon added by the user.

- **Collection Overview**: Displays the Pokémon the user owns.
- **Login Prompt**: If the user is not logged in, they will be prompted to log in with Google.

![image](https://github.com/user-attachments/assets/adc792e6-cd5d-43cc-9bd4-65547177fc09)

![image](https://github.com/user-attachments/assets/3c4205ea-2b33-4098-acd9-8ca7ed85a058)



### About Page
The **About Page** provides information about the project and its features.

- **Project Background**: Details on the purpose and goals of the Pokedex project.
- **Team Members**: Information on contributors, if applicable.

![image](https://github.com/user-attachments/assets/975611af-e42b-4223-9f59-9c21a2e0119c)

## Features
- Users can log in with Google using Firebase for secure authentication.
- Users can view a comprehensive list of Pokémon with details like types, abilities, and stats.
- A "My List" feature allows users to add Pokémon to their personal collection.
- Each Pokémon entry can be viewed in detail, displaying additional information.
- Responsive design for optimal viewing on both desktop and mobile devices.
- The applicatin changes color according the last viewed pokemons

### Getting Started
To run the project locally, you will need to install the following dependencies:

- Node.js
- npm
- Firebase

### Installation

#### Frontend Setup:

1. Clone the project repository:
    ```bash
    git clone [Your GitHub Repository Link]
    ```

2. Navigate to the frontend directory:
    ```bash
    cd pokedex-project/client
    ```

3. Install the frontend dependencies:
    ```bash
    npm install
    ```

4. Start the frontend development server:
    ```bash
    npm start
    ```

### Accessing the Application
- The frontend runs on port 3000. Open a web browser and navigate to [http://localhost:3000](http://localhost:3000) to use the app.

### User Registration and Login
- Users can log in using their Google account, facilitated by Firebase Authentication.
- Upon successful login, users are redirected to the home page where they can start browsing Pokémon.

### Database Management
- The application utilizes Firebase to manage user authentication and store user-specific data, including their Pokémon collections.

### Technologies Used
- **Frontend**: React.js, styled-components
- **Backend**: Firebase (for authentication and database)
- **UI/UX**: Responsive design principles
Here's the corrected `README.md` for your Pokedex project with an updated Table of Contents:

---
