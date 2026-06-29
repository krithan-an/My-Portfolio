import "./Contact.css";
function Contact() {
    return (
        <section id="contact">
            <h2>Contact</h2>

            <p>
                Email:{" "}
                <a href="mailto:krithan45@gmail.com">
                    krithan45@gmail.com
                </a>
            </p>

            <p>
                GitHub:{" "}
                <a
                    href="https://github.com/krithan-an"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    github.com/krithan-an
                </a>
            </p>

            <p>
                LinkedIn:{" "}
                <a
                    href="https://www.linkedin.com/in/krithan/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    linkedin.com/in/krithan
                </a>
            </p>
        </section>
    );
}

export default Contact;