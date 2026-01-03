import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';

type ButtonBaseProps = {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

type ButtonAsButton = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
}

type ButtonAsLink = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

// Use a simplified forwardRef that accepts either generic type
const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

        const variants = {
            primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-accent hover:text-accent-foreground",
        };

        const sizes = {
            sm: "h-9 px-3 text-xs",
            md: "h-10 px-4 py-2 text-sm",
            lg: "h-11 px-8 text-base",
        };

        const styles = cn(baseStyles, variants[variant], sizes[size], className);

        if (props.href) {
            // For external links or hash links, use simple <a>, for internal use Link maybe? 
            // But let's stick to standard <a> or simple usage to avoid hydration mismatch if mixing.
            // Usually smart Link is better. But standard for now is fine.
            // Let's use <a> for simplicity and to handle the ref typing easily.
            // Or actually, if it's an external link (starts with http), use <a>.
            // The user wants 'click github' -> external.
            return (
                <a
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    className={styles}
                    {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
                >
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {children}
                </a>
            );
        }

        return (
            <button
                ref={ref as React.Ref<HTMLButtonElement>}
                className={styles}
                disabled={isLoading || (props as ButtonHTMLAttributes<HTMLButtonElement>).disabled}
                {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button };
