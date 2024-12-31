# Contact Form

This repository contains the source code for a simple and responsive contact form. The form is designed to collect user information such as name, email, subject, and message and can be integrated into any website or web application.

![design review](design/desktop-preview.jpg)

### live version
```
https://kourosh-dev.github.io/contact-form/
```


## Features

- **Responsive Design**: Ensures proper display on various devices.
- **Validation**: Includes client-side form validation for required fields.
- **Customization**: Easily customizable to fit your project’s needs.
- **Integration Ready**: Can be connected to a back-end server or service for data submission.

## Prerequisites

To use the contact form, you’ll need:

1. A basic understanding of HTML, CSS, and JavaScript.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/kourosh-dev/contact-form.git
   ```

2. Navigate to the project directory:

   ```bash
   cd contact-form
   ```

3. Open `index.html` in your web browser to view the form.

## Usage

1. Open the `index.html` file and customize the form fields as needed.
2. Update the CSS in `styles.css` to match your project’s theme.
3. Add your back-end endpoint to the JavaScript file (`script.js`) to handle form submissions.

Example in `script.js`:

```javascript
const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const response = await fetch('https://your-backend-endpoint.com/submit', {
        method: 'POST',
        body: formData,
    });

    if (response.ok) {
        alert('Form submitted successfully!');
    } else {
        alert('There was an error submitting the form.');
    }
});
```

## File Structure

```
contact-form/
├── assets            # assets
├   ├── fonts         # fonts
├   ├   ├── static    
├   ├   ├   ├── Karla-bold.ttf
├   ├   ├   └── Karla-Regular.ttf
├   ├   ├── Karala-italic-variableFont_wght.ttf
├   ├   ├── Karala-variablefont_wght.ttf
├   ├   ├── OFL.txt
├   ├   └── README.txt
├   └── images        # images and icons
├       ├── favicon-32x32.png
├       ├── icon-checkbox-check.svg
├       ├── icon-radio-selected.svg
├       └── icon-success-check.svg
├── design            # designes
├   ├── desktop-design.jpg
├   ├── desktop-preview.jpg
├   ├── error-stat.jpg
├   ├── focus-and-active-state.jpg
├   ├── hovre-state.jpg
├   ├── mobile-design.jpg
├   └── success-state.jpg
├── scripts           # scripts
├   └── main.js
├── styles            # styles
├   └── style.css
├── .gitignore
├── index.html        # Main HTML file
└── README.md         # Project documentation
```

## Contributing

Feel free to contribute to this project by submitting a pull request or reporting an issue.

## License

This project is licensed under the MIT License.

## Contact

For any questions or support, please email [kourosh0903@gmail.com](mailto:kourosh0903@gmail.com).

