'use client';

interface AvatarProps {
    name: string;
    image?: string;
    size?: 'sm' | 'md' | 'lg';
}

export default function Avatar({ name, image, size = 'md' }: AvatarProps) {
    // Función para obtener las iniciales del nombre
    const getInitials = (name: string) => {
        const parts = name.split(' ');
        if (parts.length >= 2) {
            return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
        }
        return name.slice(0, 2).toUpperCase();
    };

    // Función para generar un color basado en el nombre
    const getColorFromName = (name: string) => {
        const colors = [
            'from-blue-500 to-blue-600',
            'from-purple-500 to-purple-600',
            'from-pink-500 to-pink-600',
            'from-red-500 to-red-600',
            'from-orange-500 to-orange-600',
            'from-green-500 to-green-600',
            'from-teal-500 to-teal-600',
            'from-cyan-500 to-cyan-600',
        ];

        // Usar el nombre para generar un índice consistente
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        const index = Math.abs(hash) % colors.length;
        return colors[index];
    };

    const sizeClasses = {
        sm: 'w-10 h-10 text-sm',
        md: 'w-12 h-12 text-base',
        lg: 'w-16 h-16 text-xl',
    };

    const initials = getInitials(name);
    const gradientColor = getColorFromName(name);

    if (image) {
        return (
            <div className={`${sizeClasses[size]} rounded-full overflow-hidden border-2 border-white shadow-lg flex-shrink-0`}>
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
        );
    }

    // Avatar con iniciales
    return (
        <div
            className={`${sizeClasses[size]} rounded-full bg-gradient-to-br ${gradientColor} flex items-center justify-center text-white font-bold border-2 border-white shadow-lg flex-shrink-0`}
        >
            {initials}
        </div>
    );
}