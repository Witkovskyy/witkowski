import { motion } from "framer-motion";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = i * 0.4
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0.1 },
                opacity: { delay, duration: 0.02 },
            },
        }
    },
}
const image = {
    maxWidth: "80vw",
    display: 'block',
    margin: '0 auto',
    marginTop: '20px',
}

const shape = {
    strokeWidth: 10,
    strokeLinecap: "round",
    fill: "transparent",
    // stroke: "#ff0088",
    stroke: "#ffffffff",
}

export default function DrawMessage() {
    return (
        //Welcome message
        <motion.svg
            key="welcome-message"
            width="1100"
            height="600"
            viewBox="0 0 1100 600"
            initial="hidden"
            animate="visible"
            style={image}
        >
            {/* H */}
            <motion.line
                x1="200"
                y1="200"
                x2="200"
                y2="400"
                custom={1}
                variants={draw}
                style={shape}
            />
            <motion.line
                x1="200"
                y1="300"
                x2="300"
                y2="300"
                custom={1}
                variants={draw}
                style={shape}
            />
            <motion.line
                x1="300"
                y1="200"
                x2="300"
                y2="400"
                custom={1}
                variants={draw}
                style={shape}
            />
            {/* E */}
            <motion.line
                x1="350"
                y1="200"
                x2="350"
                y2="400"
                custom={2}
                variants={draw}
                style={shape}
            />
            <motion.line
                x1="350"
                y1="200"
                x2="450"
                y2="200"
                custom={2}
                variants={draw}
                style={shape}
            /><motion.line
                x1="350"
                y1="300"
                x2="450"
                y2="300"
                custom={2}
                variants={draw}
                style={shape}
            /><motion.line
                x1="350"
                y1="400"
                x2="450"
                y2="400"
                custom={2}
                variants={draw}
                style={shape}
            />
            {/* L */}
            <motion.line
                x1="500"
                y1="200"
                x2="500"
                y2="400"
                custom={3}
                variants={draw}
                style={shape}
            /><motion.line
                x1="500"
                y1="400"
                x2="600"
                y2="400"
                custom={3}
                variants={draw}
                style={shape}
            />
            {/* L */}
            <motion.line
                x1="650"
                y1="200"
                x2="650"
                y2="400"
                custom={4}
                variants={draw}
                style={shape}
            /><motion.line
                x1="650"
                y1="400"
                x2="750"
                y2="400"
                custom={4}
                variants={draw}
                style={shape}
            />
            {/* O */}
            <motion.ellipse
                key="main-ellipse"
                cx="850"
                cy="300"
                rx="95"
                ry="110"
                variants={draw}
                custom={5}
                style={shape}
            />


        </motion.svg>
    )

}