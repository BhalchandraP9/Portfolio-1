import { Code2, Rocket, Users, Lightbulb } from "lucide-react";
import { Button } from "../Components/Button";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable, scalable code that stands the test of time.",
    },
    {
        icon: Rocket,
        title: "Performance ",
        description: "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Staying ahead of the latest technologies and best practices.",
    },
];

export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-5xl font-bold mb-6 animate-fade-in">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-4 animate-fade-in animation-delay-100">
                        I'm a passionate developer with a keen eye for detail and a love for creating seamless digital experiences.
                    </p>
                    <p className="text-lg text-muted-foreground mb-8 animate-fade-in animation-delay-200">
                        With years of experience in web development, I specialize in building responsive, 
                        user-centric applications that solve real-world problems.
                    </p>
                    <Button className="animate-fade-in animation-delay-300">
                        Download Resume
                    </Button>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-2 gap-6">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div 
                                key={index}
                                className="p-6 rounded-xl bg-surface border border-border hover:border-primary transition-all duration-300 group"
                            >
                                <Icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </section>
    );
};
