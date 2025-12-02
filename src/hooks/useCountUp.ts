'use client';

import { useEffect, useRef, useState } from 'react';

interface UseCountUpOptions {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
}

export function useCountUp({
    end,
    duration = 2000,
    suffix = '',
    prefix = '',
}: UseCountUpOptions) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated.current) {
                        setIsVisible(true);
                        hasAnimated.current = true;
                    }
                });
            },
            { threshold: 0.3 } // Se activa cuando el 30% del elemento es visible
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const startTime = Date.now();
        const step = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);

            // Easing function para suavizar la animación (ease-out)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * end);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    const displayValue = `${prefix}${count}${suffix}`;

    return { ref: elementRef, value: displayValue };
}