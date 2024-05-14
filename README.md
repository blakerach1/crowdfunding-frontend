# Crowd<span style="color:#5DE3CA">Harbour</span>

## About
[Explore CrowdHarbour](https://crowdharbour.netlify.app/)

A platform to host social change projects and allow users to both host projects and also make pledges towards other projects. This application was a project requirement of the SheCodes Plus bootcamp, and demonstrates my practical understanding of Django REST and React JS frameworks. 

## Features
- Mobile and desktop responsive design, crafted using Figma
- Socail change projects hosting platform
- Randomized paginated featured project list on the home page
- User authentication using Django's AbstractUser and token authentication

## Technologies Used
<p align="center"><img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&amp;logo=python&amp;logoColor=ffdd54" alt="shields"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB" alt="shields"><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E" alt="shields"><img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&amp;logo=html5&amp;logoColor=white" alt="shields"><img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&amp;logo=css3&amp;logoColor=white" alt="shields"><img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&amp;logo=node.js&amp;logoColor=white" alt="shields"><img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&amp;logo=vite&amp;logoColor=white" alt="shields"><img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&amp;logo=visual-studio-code&amp;logoColor=white" alt="shields"><img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&amp;logo=figma&amp;logoColor=white" alt="shields"><img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&amp;logo=Canva&amp;logoColor=white" alt="shields"><img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&amp;logo=netlify&amp;logoColor=#00C7B7" alt="shields"><img src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&amp;logo=markdown&amp;logoColor=white" alt="shields"></p>

## Installation

#### Backend
1. Establish a local directory where you want to save the application.
2. Clone the repository: ```git clone <https://github.com/blakerach1/crowdfunding_back_end.git>```
3. Navigate to the backend directory ```cd backend/```
4. Create a virtual environment ```python -m venv venv```
5. Activate the virtual environment ```venv\Scripts\activate```(Windows) ```source venv/bin/activate```(MacOS/Linus)
6. Install dependencies ```pip install -r requirements.txt```
7. Run migrations to set up the database ```python manage.py migrate```
8. Load initial data ```python manage.py loaddata <fixture_file_name>```
9. Run the development server ```python manage.py runserver```

#### Frontend
1. Establish a local directory where you want to save the application.
2. Clone the repository: ```git clone <https://github.com/blakerach1/crowdfunding-frontend.git>```
3. Navigate to the frontend directory ```cd frontend/```
4. Update the `.env` file, to update the API URL to point to your local backend. For example: ```VITE_API_URL = http://127.0.0.1:8000/```
5. Install dependencies ```pip install -r requirements.txt```
6. Run the development server ```npm run dev```

## Video Demo
[![Video Demo](https://i9.ytimg.com/vi_webp/w38G2zYC8_s/mqdefault.webp?v=66431aec&sqp=CIC0jLIG&rs=AOn4CLDHr3EQe5L0077ARYPAEwiVRH7gag)](https://youtu.be/w38G2zYC8_s)

