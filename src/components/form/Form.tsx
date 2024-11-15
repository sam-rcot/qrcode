import React, { useState } from 'react';
import './Form.scss';

type FormProps = {
    onSubmit: (data: { url: string; useLogo: boolean }) => void;
};

const Form: React.FC<FormProps> = ({ onSubmit }) => {
    const [url, setUrl] = useState('');
    const [useLogo, setUseLogo] = useState(false);

    // Function to validate and normalize URLs
    const getValidURL = (input: string): string => {
        try {
            return new URL(input).href;
        } catch {
            return new URL(`https://${input}`).href;
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validUrl = getValidURL(url); // Validate and normalize the URL
        onSubmit({ url: validUrl, useLogo }); // Send validated URL to parent
        console.log(validUrl)
    };



    const handleLogoToggle = () => {
        const newLogoState = !useLogo;
        setUseLogo(newLogoState);
        onSubmit({ url: getValidURL(url), useLogo: newLogoState }); // Send updated values
    };

    return (
        <div id="Form">
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label htmlFor="url">
                        <span className="form-item">Page URL: </span>
                    </label>
                    <input
                        type="text"
                        name="url"
                        id="url"
                        placeholder="rcot.co.uk/your-url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>
                <div className="input checkbox-container">
                    <label className="form-item">
                        Use alternate logo
                        <input
                            type="checkbox"
                            checked={useLogo}
                            onChange={handleLogoToggle}
                        />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="input">
                    <input type="submit" value="Generate QR code" />
                </div>
            </form>
        </div>
    );
};

export default Form;