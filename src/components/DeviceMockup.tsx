'use client';

interface DeviceMockupProps {
    image: string;
    alt: string;
    type?: 'laptop' | 'mobile';
}

export default function DeviceMockup({ image, alt, type = 'laptop' }: DeviceMockupProps) {
    if (type === 'mobile') {
        return (
            <div className="relative mx-auto w-[200px]">
                {/* iPhone Frame */}
                <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10"></div>

                    {/* Screen */}
                    <div className="relative bg-white rounded-[1.8rem] overflow-hidden aspect-[9/19.5]">
                        <img
                            src={image}
                            alt={alt}
                            className="w-full h-full object-contain"
                            loading="eager"
                            decoding="async"
                        />
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-700 rounded-full"></div>
                </div>
            </div>
        );
    }

    // Laptop mockup
    return (
        <div className="relative w-full">
            {/* Laptop Screen */}
            <div className="relative bg-gray-900 rounded-t-2xl p-3 shadow-2xl">
                {/* Camera */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full z-10"></div>

                {/* Screen Content */}
                <div className="relative bg-white rounded-lg overflow-hidden aspect-video">
                    <img
                        src={image}
                        alt={alt}
                        className="w-full h-full object-cover object-top"
                        loading="eager"
                        decoding="async"
                    />
                </div>
            </div>

            {/* Laptop Base */}
            <div className="relative h-3 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl shadow-xl">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-b from-gray-600 to-gray-700"></div>
            </div>

            {/* Laptop Bottom */}
            <div className="h-2 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-3xl shadow-2xl"
                style={{ marginLeft: '-10%', marginRight: '-10%', width: '120%' }}>
            </div>
        </div>
    );
}