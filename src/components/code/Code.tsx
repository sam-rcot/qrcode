import React, { useEffect, useRef, useState } from 'react';
import QRCodeStyling, {DrawType} from "qr-code-styling";
import options from '../../assets/config/options.json';
import logo from '../../assets/images/logo.svg';
import printLogo from '../../assets/images/web_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import './Code.scss';

type FormValues = {
    url: string;
    useLogo: boolean;
};

type CodeProps = {
    formValues: FormValues;
};

const Code: React.FC<CodeProps> = ({ formValues }) => {
    const qrContainerRef = useRef<HTMLDivElement>(null); // Ref for the QR code container
    const qrCodeInstance = useRef<QRCodeStyling | null>(null); // QRCodeStyling instance
    const [isQrVisible, setIsQrVisible] = useState(false); // State to control QR visibility

    useEffect(() => {
        if (!formValues || !formValues.url) return;

        const qrOptions = {
            ...options,
            data: formValues.url, // Set the QR code data to the URL
            image: formValues.useLogo ? logo : printLogo,
            type: options.type as DrawType
        };

        // Clear previous QR code
        if (qrCodeInstance.current) {
            qrCodeInstance.current.update(qrOptions);
        } else {
            qrCodeInstance.current = new QRCodeStyling(qrOptions);
        }

        // Append QR code to the container
        if (qrContainerRef.current) {
            qrContainerRef.current.innerHTML = ''; // Clear previous content
            qrCodeInstance.current.append(qrContainerRef.current);
        }

        // Show QR code container
        setIsQrVisible(true);
    }, [formValues]); // Run when formValues change

    const handleDownload = async () => {
        if (!qrCodeInstance.current) return;

        const qrBlob = await qrCodeInstance.current.getRawData("png");
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(qrBlob);
        downloadLink.download = 'qr-code.png';
        downloadLink.click();

        // Clean up the object URL to free memory
        URL.revokeObjectURL(downloadLink.href);
    };

    return (
        <div id="Code">
            <div
                id="canvas-container"
                ref={qrContainerRef}
                className={isQrVisible ? '' : 'hidden'}
            ></div>
            <button
                id="downloadButton"
                onClick={handleDownload}
                disabled={!isQrVisible}
                className="download-button"
            >
                <FontAwesomeIcon icon={faDownload} className="download-icon" />
                Download QR Code
            </button>
        </div>
    );
};

export default Code;