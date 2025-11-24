# React Multi-Step Form - Setup Guide

## Prerequisites
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- A code editor (VS Code recommended)
- Basic terminal/command line knowledge

## Step-by-Step Setup Instructions

### 1. Install Node.js and npm
If you haven't already:
1. Download Node.js from https://nodejs.org/
2. Run the installer
3. Verify installation by opening terminal and typing:
   ```bash
   node --version
   npm --version
   ```

### 2. Navigate to Project Directory
Open your terminal and navigate to where you've saved this project:
```bash
cd path/to/your/project
```

### 3. Install Dependencies
Install all required packages:
```bash
npm install
```
This will download all the libraries listed in `package.json`.

### 4. Start the Development Server
Run the development server:
```bash
npm run dev
```

The application will start at `http://localhost:8080`

### 5. View Your Application
Open your web browser and go to:
```
http://localhost:8080
```

You should see the landing page with the "Start Your Pitch Journey" button.

## Project Structure

```
src/
├── components/
│   ├── forms/          # Individual form step components
│   │   ├── PitchInformation.tsx
│   │   ├── BasicInfo.tsx
│   │   ├── Financials.tsx
│   │   ├── Fundraise.tsx
│   │   ├── Impact.tsx
│   │   └── Operations.tsx
│   ├── ui/             # Reusable UI components
│   ├── FormProgress.tsx
│   ├── TrustBadge.tsx
│   └── StatsCard.tsx
├── pages/
│   ├── Index.tsx       # Landing page
│   └── OnboardingForm.tsx  # Main form page
├── index.css           # Design system & styles
└── App.tsx             # Main app & routing
```

## How the Multi-Step Form Works

### Form Flow
1. **Step 1 - Pitch Information**: Upload pitch deck and documents
2. **Step 2 - Basic Info**: Personal and company details
3. **Step 3 - Financials**: Revenue, burn rate, and financial data
4. **Step 4 - Fundraise**: Funding stage and investment details
5. **Step 5 - Impact**: SDGs and social impact information
6. **Step 6 - Operations**: Traction and customer information

### Key Files Explained

#### `OnboardingForm.tsx`
- Main form controller
- Manages current step and form data
- Handles navigation between steps
- Contains placeholder for R2 bucket submission

#### Form Step Components (`src/components/forms/`)
Each file represents one step of the form:
- Receives `data` (current form data) and `updateData` function as props
- Contains hard-coded form fields based on CSV requirements
- Updates parent form state when users input data

#### Design System (`src/index.css`)
All colors and styles are defined using CSS variables:
- `--primary`: Main blue color
- `--background`: Page background
- `--card`: Card backgrounds
- All components use these variables for consistency

## Making Changes

### To Edit Form Fields
1. Navigate to the relevant form component in `src/components/forms/`
2. Find the field you want to modify
3. Update the JSX code
4. Save the file - changes will appear automatically

### To Add New Fields
```tsx
<div className="space-y-2">
  <Label htmlFor="newField">
    New Field Name <span className="text-destructive">*</span>
  </Label>
  <Input
    id="newField"
    onChange={(e) => updateData({ newField: e.target.value })}
    placeholder="Enter value..."
  />
</div>
```

### To Change Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary: 220 90% 40%;  /* Hue Saturation Lightness */
  --background: 240 20% 99%;
}
```

## Integrating R2 Bucket

The form has a placeholder for R2 bucket integration in `OnboardingForm.tsx`:

```typescript
const handleSubmit = async () => {
  // TODO: Replace with actual R2 bucket integration
  console.log("Form data to be submitted:", formData);
  
  // Example R2 integration:
  // const response = await fetch('YOUR_R2_ENDPOINT', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(formData)
  // });
};
```

To integrate:
1. Set up your R2 bucket and get the endpoint URL
2. Add authentication credentials as needed
3. Replace the TODO section with actual API call
4. Handle file uploads separately (convert to base64 or use multipart/form-data)

## Troubleshooting

### Port Already in Use
If port 8080 is busy, the dev server will automatically use a different port.

### Changes Not Appearing
- Make sure the dev server is running
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check the terminal for errors

### npm install Errors
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again
- Make sure you're using Node.js v16 or higher

## Building for Production

When ready to deploy:
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Need Help?

- Check the browser console (F12) for errors
- Review the terminal where `npm run dev` is running
- All form data is logged to console when submitted

## Next Steps

1. Test the form thoroughly
2. Implement R2 bucket integration
3. Add form validation
4. Configure production deployment
5. Set up analytics if needed
