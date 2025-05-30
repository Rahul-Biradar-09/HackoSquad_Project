
---------PROJECT NAME---------

 Password Strength Checker (Frontend Only)
 

---------DESCRIPTION----------

A simple and interactive password strength checker built with React.js and Vite. The app provides real-time feedback on password strength based on criteria such as length, uppercase letters, numbers, and symbols. It also displays which criteria are met and offers tips to improve password strength — all without requiring any backend.



---------FEATURES-------------

- Real-time password strength feedback: Weak, Medium, Strong.
- Displays which password criteria are met:
  - Minimum length
  - Contains uppercase letters
  - Contains numbers
  - Contains symbols
- Tips to help improve password strength.
- Clean and simple React UI with live updates.
- Fully frontend — no backend needed.



--------DEVELOPMENT PROCESS--------- (step by step)


1. Setup Project Environment
  - Initialize a new React project using Vite for fast and modern build tooling.
  - Install necessary dependencies such as React and ReactDOM.


2. Create Password Input Component
  - Build a controlled input field to capture the password as the user types.
  - Use React `useState` to manage the password state.


3. Define Password Strength Criteria
  - Set validation rules:
  - Length ≥ 8 characters.
  - Contains at least one uppercase letter.
  - Contains at least one number.
  - Contains at least one symbol (e.g., `!@#$%^&*`).

  
4. Implement Password Validation Logic
  - Write functions to check each criterion against the entered password.
  - Aggregate results to determine overall password strength:
  - Weak: Fewer than 2 criteria met.
  - Medium: 2 or 3 criteria met.
  - Strong: All 4 criteria met.


5. Display Real-Time Feedback
  - Show password strength status that updates as the user types.
  - Indicate which criteria are met with checkmarks or colored indicators.


6. Provide Improvement Tips
  - Offer actionable tips based on which criteria are not met.
  - Update tips dynamically as the password changes.


7. Style the UI
  - Use CSS or inline styles to create a clean, responsive interface.
  - Highlight strength levels with colors (e.g., red for weak, orange for medium, green for strong).


8. Test and Refine
  - Test various passwords to ensure feedback is accurate and responsive.
  - Adjust UI and validation logic as needed for better UX.



------TECHNOLOGIES USED------

1. React.js

2. Vite

3. JavaScript (ES6+)

4. CSS

5. Vercel (Deployment)



-------DEPLOYMENT LINK----------

Deployed on vercel

Access the project at https://hacko-squad-project.vercel.app/

