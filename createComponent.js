import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

// Define __dirname and __filename for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Component template as a string
const generateComponentTemplate = (componentName) => `
type ${componentName}Props = {
    exampleProp: string;
};

const ${componentName} = ({ exampleProp }: ${componentName}Props) => {
    return (
        <div id="${componentName}">
            {exampleProp}
        </div>
    );
};

export default ${componentName};
`;

// Initialize readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt user for the component name
rl.question('Enter the component name: ', function(componentName) {
  const componentDir = path.join(__dirname, 'src', 'components', componentName.toLowerCase());

  if (!fs.existsSync(componentDir)) {
    // Create directory for the new component
    fs.mkdirSync(componentDir, { recursive: true });

    // Generate component file content
    const componentContent = generateComponentTemplate(componentName);

    // Path for the new component file
    const newComponentPath = path.join(componentDir, `${componentName}.tsx`);

    // Write the component content to the file
    fs.writeFileSync(newComponentPath, componentContent);

    console.log(`Component ${componentName} created successfully!`);
  } else {
    console.log(`Component ${componentName} already exists.`);
  }

  // Close the readline interface
  rl.close();
});