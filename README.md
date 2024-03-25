# ToolBox

## BackEnd Technical Test

This is a solution for the Back-end part of the test

## GET Files Data

1.  **Installation**

    First, we need to clone the project

    ```sh
    # Cloning this repo into your sytem
    git clone https://github.com/Arcturus91/toolbox-server.git
    ```

2.  **Runing the project**

    Once dependencies have been installed, run the server:

    ```sh
    # Starting up server
    docker-compose up --build
    ```

    Project is configured to run on Port 8000. Either run the server on the browser or make the API calls as explained in the next sections.

3.  **End points**

    You can make get calls to the following routes:

    3.1. Get files data

    ```sh
    # First Endpoint: Get /files/data
    http://localhost:8000/api/files/data
    ```

    [![BackEnd|](https://res.cloudinary.com/defy47n3j/image/upload/v1711344565/Screenshot_2024-03-25_at_00.26.20_xms2oh.png)]()

    3.2. Get files list

    ```sh
    # Bonus Endpoint: Get /files/list
    http://localhost:8000/api/files/list
    ```

    [![BackEnd|](https://res.cloudinary.com/defy47n3j/image/upload/v1711344565/Screenshot_2024-03-25_at_00.24.34_uylq6m.png)]()

    3.3 Get files data + query params

    ```sh
    # Bonus Endpoint: Get /files/data?fileName=<Name of the File>
    http://localhost:8000/api/files/data?fileName=<Name of the File>
    ```

[![BackEnd|](https://res.cloudinary.com/defy47n3j/image/upload/v1711344565/Screenshot_2024-03-25_at_00.27.15_nqb8vq.png)]()
