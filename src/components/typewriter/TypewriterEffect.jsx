import Typewriter from "typewriter-effect";
import styles from "./TypewriterEffect.module.css"

 
function TypewriterEffect() {
    return (
        <div className={`${styles.App}`}>
            <Typewriter
 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Aspiring Web Developer")
                        .pauseFor(500)
                        .deleteAll()
                        .typeString("Learner")
                        .pauseFor(500)
                        .deleteAll()
                        .typeString("Aspiring Web Developer, Learner")
                        .start();
                }}
            />
        </div>
    );
}
 
export default TypewriterEffect;