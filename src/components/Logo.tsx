interface LogoProps {
    variant?: 'full' | 'icon' | 'horizontal';
    size?: 'sm' | 'md' | 'lg';
    theme?: 'dark' | 'light'; // NUEVO
    className?: string;
}

export default function Logo({
    variant = 'full',
    size = 'md',
    theme = 'light', // Por defecto light
    className = ''
}: LogoProps) {
    const sizes = {
        sm: { icon: 24, text: 'text-sm', tagline: 'text-[8px]' },
        md: { icon: 40, text: 'text-2xl', tagline: 'text-[10px]' },
        lg: { icon: 60, text: 'text-4xl', tagline: 'text-xs' }
    };

    const s = sizes[size];

    // Colores según el theme
    const colors = {
        ciber: theme === 'dark' ? 'text-white' : 'text-gray-900',
        tagline: theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
    };

    // Solo el ícono hexagonal
    if (variant === 'icon') {
        return (
            <svg
                width={s.icon}
                height={s.icon}
                viewBox="0 0 100 100"
                fill="none"
                className={className}
            >
                <path
                    d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z"
                    fill="url(#gradient)"
                    stroke="#06B6D4"
                    strokeWidth="2"
                />

                <g opacity="0.9">
                    <path d="M35 40 Q50 35 65 40" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M30 50 Q50 45 70 50" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M35 60 Q50 55 65 60" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" />
                </g>

                <circle cx="50" cy="50" r="4" fill="#FFFFFF" />

                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                </defs>
            </svg>
        );
    }

    // Logo completo
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <svg
                width={s.icon}
                height={s.icon}
                viewBox="0 0 100 100"
                fill="none"
            >
                <path
                    d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z"
                    fill="url(#gradient)"
                    stroke="#06B6D4"
                    strokeWidth="2"
                />
                <g opacity="0.9">
                    <path d="M35 40 Q50 35 65 40" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M30 50 Q50 45 70 50" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M35 60 Q50 55 65 60" stroke="#FFFFFF" strokeWidth="3" fill="none" strokeLinecap="round" />
                </g>
                <circle cx="50" cy="50" r="4" fill="#FFFFFF" />
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="flex flex-col">
                <div className={`font-bold leading-none ${s.text}`}>
                    <span className={colors.ciber}>Ciber</span>
                    <span className="text-cyan-500">Byte</span>
                </div>
                {variant === 'full' && (
                    <span className={`font-semibold tracking-wider uppercase ${s.tagline} ${colors.tagline}`}>
                        Soluciones Digitales
                    </span>
                )}
            </div>
        </div>
    );
}