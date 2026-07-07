import { Button } from "../Components/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
    {href: '#about', text: 'About'},
    {href: '#projects', text: 'Projects'},
    {href: '#experience', text: 'Experience'},
    {href: '#testimonials', text: 'Testimonials'},
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);  
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-2xl font-bold tracking-tight hover:text-primary">
                KG<span className="text-primary">.</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 items-center">
                {navLinks.map((link, index) => (
                    <a 
                        key={index}
                        href={link.href} 
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {link.text}
                    </a>
                ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
                <Button size="sm">Contact Me</Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
            <div className="md:hidden bg-surface border-t border-border">
                <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                    {navLinks.map((link, index) => (
                        <a 
                            key={index}
                            href={link.href} 
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.text}
                        </a>
                    ))}
                    <Button className="w-full">Contact Me</Button>
                </div>
            </div>
        )}
    </header>
    );
};
