import './App.scss';
import { useState } from 'react';
import Form from './components/form/Form';
import Code from './components/code/Code';

type FormValues = {
    url: string;
    useLogo: boolean;
};

function App() {
    const [formValues, setFormValues] = useState<FormValues | null>(null); // State to store form values

    // Callback function to handle form submission
    const handleFormSubmit = (data: FormValues) => {
        setFormValues(data); // Update state with form values
    };

    return (
        <div id="App">
            <Form onSubmit={handleFormSubmit} />
            {formValues && <Code formValues={formValues} />}
        </div>
    );
}

export default App;