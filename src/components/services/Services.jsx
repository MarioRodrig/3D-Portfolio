import { motion, useInView } from "framer-motion"; // Correct import
import ComputerModelContainer from "./computer/ComputerModelContainer";
import Counter from "./Counter";
import "./services.css";
import { useRef } from "react";

const textVariants = {
    initial: {
        x: -100,
        y: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};

const listVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            duration: 1,
        },
    },
};

const itemVariants = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};

const services = [
    {
        id: 1,
        img: "/service1.png",
        title: "Backend Projects",
        counter: 2,
    },
    {
        id: 2,
        img: "/service2.png",
        title: "Front-End Projects",
        counter: 2,
    },
    {
        id: 3,
        img: "/service3.png",
        title: "Data Engineering Projects",
        counter: 1,
    },
];

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-200px" }); // Trigger only once

    return (
        <div className="services" ref={ref}>
            <div className="sSection left">
                <motion.h1
                    variants={textVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    className="sTitle"
                >
                    How do I help?
                </motion.h1>
                <motion.div
                    className="serviceList"
                    variants={listVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                >
                    {services.map((service) => (
                        <motion.div
                            className="service"
                            key={service.id}
                            variants={itemVariants}
                        >
                            <div className="serviceIcon">
                                <img src={service.img} alt={service.title} />
                            </div>
                            <div className="serviceInfo">
                                <h2>{service.title}</h2>
                                <h3>{service.counter} Projects</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="counterList">
                    <Counter from={0} to={5} text="Personal Projects" />
                    <Counter from={0} to={10} text="Collegic Projects" />
                </div>
            </div>

            <div className="sSection right">
                <ComputerModelContainer />
            </div>
        </div>
    );
};

export default Services;
