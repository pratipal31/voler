# Crisis Response Volunteer Network

The **Crisis Response Volunteer Network** is a platform that connects volunteers with organizations during emergencies, enabling rapid mobilization of assistance and resources. By fostering community involvement, the platform enhances response efforts and promotes resilience in the face of crises.

## Table of Contents
- [Features](#features)
- [Bonus Features](#bonus-features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Technologies Used](#technologies-used)

## Features

1. **Volunteer Registration and Skill Categorization**: 
   - Volunteers create profiles detailing their skills, certifications, and availability, allowing organizations to find the right match quickly.
   - Optional skill verification for professionals (e.g., medical personnel) enhances trust and credibility.

2. **Real-Time Alerts for Urgent Volunteer Needs**: 
   - A dynamic alert system enables organizations to send real-time notifications for urgent requirements, such as medical help or logistical support.
   - Volunteers receive customized alerts based on their skills and location preferences.

3. **Resource Sharing Feature**: 
   - Organizations can list available resources (e.g., food, medical supplies), and volunteers can contribute their own resources.
   - A section dedicated to shelter information is available during crises.

4. **Integration with Local Emergency Services**: 
   - The platform connects with local emergency services for a coordinated response, ensuring efficient resource allocation.
   - A centralized dashboard allows emergency services to monitor volunteer availability and resource requests.

5. **Feedback Mechanism**: 
   - Post-response surveys help volunteers provide feedback, enabling organizations to improve future responses.
   - A rating system enhances accountability for both volunteers and organizations.

## Bonus Features

1. **Mapping Features**:
   - **Crisis Mapping**: Interactive maps display affected areas, available resources, and volunteer locations to optimize response planning.
   - **Map Updates**: Volunteers can update maps with real-time information on needs and resources.

2. **Training Modules**:
   - **Preparedness Resources**: Access to training materials on first aid, crisis management, and more.
   - **Certification Programs**: Volunteers can earn certificates to enhance their profiles.

3. **Community Engagement Tools**:
   - **Discussion Forums**: Volunteers share experiences, tips, and insights in dedicated forums.
   - **Event Calendar**: Lists upcoming training sessions and volunteer opportunities.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (v16.0 or higher)
- **npm** (v7.0 or higher) or **yarn**
- **PostgreSQL** (or another relational database) for Prisma ORM
- **Prisma** ORM (v4.0 or higher)

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/pratipal31/voler.git

2. **Navigate to the Project Directory**:

   ```bash
   cd voler-admin

3. **Install Dependencies**:

   ```bash
   npm install

## Running the Project

1. **Start the Development Server**:

   ```bash
   npm run dev

2. **Access the Project**:

   ```bash
   http://localhost:3000

## Technologies Used

The project is built using the following technologies:

- **Next.js**: A React framework for building web applications and handling server-side rendering.
- **Tailwind CSS**: A utility-first CSS framework for fast and responsive UI development.
- **Prisma ORM**: A database management tool for seamless interaction with the PostgreSQL database.
- **PostgreSQL**: A relational database used for storing data related to users, volunteers, resources, and crisis events.
- **Node.js**: JavaScript runtime environment for handling backend logic and API routes.
- **TypeScript**: A statically typed superset of JavaScript used to improve code quality and development experience.
