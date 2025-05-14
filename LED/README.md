# CSSC Club Portal – Secure Login System (Flask)

This project implements a secure login system for the CSSC club web portal using **Flask**, with support for:

- Password-based login
- 6-digit **Multi-Factor Authentication (MFA)** via email
- Secure session management
- Password change feature (after login)
- Frontend MFA workflow using JavaScript

---

## Project Structure

```
LED/
├── app.py          # Main Flask application with routes and logic
├── .env            # Environment variables (e.g., SECRET_KEY)
├── static/         # CSS, JavaScript, images
├── templates/      # HTML templates (login.html, dashboard.html)
├── instance/       # Flask instance folder (holds database)
└── README.md       # Project documentation
```

---

---

## ⚙️ Getting Started

### 1. Install Dependencies

```bash
pip3 install flask flask_sqlalchemy python-dotenv
```

### 2. Set Up .env
Create a .env file in the root directory:
```
	SECRET_KEY=your-secret-key
	EMAIL_HOST=smtp.gmail.com
	EMAIL_PORT=587
	EMAIL_USER=your@email.com
	EMAIL_PASSWORD=your-password
```

Notes: **EMAIL_PASSWORD** is not an actual password when login but password for application used

### 3. Paramters set up
	Get inside app.py source code and modifying the line `admin = User(username='admin', email='_____@gmail.com')` in terms of your desired email. 
	Contact `Tom` for spare email related to `.env` file set up.

### 4. Run the App
```bash
python3 app.py
```


