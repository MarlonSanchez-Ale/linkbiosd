import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaStoreAlt } from "react-icons/fa";
import { Avatar } from "@material-tailwind/react";

interface LinkBioProps {
    Logo: string;
    Title: string;
    Description: string;
    UrlFacebook: string;
    UrlInstagram: string;
    UrlTiktok: string;
    UrlWhatsapp: string;
    UrlDirection: string;


}

const LinkBio: React.FC<LinkBioProps> = ({ Logo,
    Title,
    Description,
    UrlFacebook,
    UrlInstagram,
    UrlTiktok,
    UrlWhatsapp,
    UrlDirection, }) => {
    return (
        <div className="flex flex-col items-center h-screen text-gray-800 p-6">
            {/* Logo y nombre de la marca */}
            <div className="text-center mb-4">
                <Avatar
                    size="xxl"
                    alt="avatar"
                    src={Logo}
                    className="border border-deep-purple-500-500 shadow-xl shadow-deep-purple-900/20 ring-4 ring-deep-purple-500/30" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                <h1 className="lg:text-3xl sm:text-xl font-bold mt-3">{Title}</h1>
                <p className="text-xl sm:text-lg font-light mt-2">{Description}</p>
            </div>

            {/* Enlaces a redes sociales */}
            <div className="space-y-3 w-full max-w-xs">
                <div className="flex flex-row justify-between p-5 gap-5 bg-deep-purple-300 rounded-lg">
                    <button onClick={() => window.open(UrlFacebook, '_blank')} className="block  text-white py-2 rounded-lg text-start font-medium">
                        Seguínos en Facebook
                    </button>
                    <FaFacebook size={30} color="white" />
                </div>
                <div className="flex flex-row justify-between p-5 gap-5 bg-deep-purple-300 rounded-lg">

                    <button onClick={() => window.open(UrlInstagram, '_blank')} className="block  text-white py-2 rounded-lg text-start font-medium">
                        Seguínos en Instagram
                    </button>
                    <FaInstagram size={30} color="white" />
                </div>
                <div className="flex flex-row justify-between p-5 gap-5 bg-deep-purple-300 rounded-lg">

                    <button onClick={() => window.open(UrlTiktok, '_blank')} className="block  text-white py-2 rounded-lg text-start font-medium">
                        Seguínos en Tiktok
                    </button>
                    <FaTiktok size={30} color="white" />
                </div>
                <div className="flex flex-row justify-between p-5 gap-5 bg-deep-purple-300 rounded-lg">

                    <button onClick={() => window.open(UrlDirection, '_blank')} className="block  text-white py-2 rounded-lg text-start font-medium">
                        Visitános en tienda
                    </button>
                    <FaStoreAlt size={30} color="white" />
                </div>
                <div className="flex flex-row justify-between p-5 gap-5 shadow-md bg-deep-purple-300 rounded-lg">

                    <button onClick={() => window.open(UrlWhatsapp, '_blank')} className="block  text-white py-2  text-start font-medium">
                        Cotizá aquí
                    </button>
                    <FaWhatsapp size={30} color="white" />
                </div>
            </div>

            {/* Información adicional */}
            <div className="text-center mt-8 text-gray-200 text-lg">
                <p>Gracias por preferirnos</p>
            </div>
        </div>
    );
};


export default LinkBio;
