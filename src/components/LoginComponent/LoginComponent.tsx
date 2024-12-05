import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import "./LoginComponent.css";
import ModalComponent from "../../UtillsComponet/ModalComponent/ModalComponent";
import LoaderComponent from "../../UtillsComponet/LoaderComponent/LoaderComponent";

function LoginComponent() {
    const [email, setEmail] = useState({
        email: "",
        error: false,
    });
    const [modal, setModal] = useState(false);
    const [loader, setLoader] = useState(false);

    const validateEmail = (email: string) => {
        // Basic email validation
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const updateStateOfEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const el = event.target as HTMLInputElement;
        setEmail((data) => {
            return { ...data, email: el.value };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateEmail(email.email)) {
            setEmail((prev) => ({ ...prev, error: true }));
            setTimeout(() => {
                setEmail((prev) => ({ ...prev, error: false }));
            }, 1000);
        } else {
            setEmail((prev) => ({ ...prev, error: false }));
            // Proceed with form submission
            console.log("Valid email:", email.email);
            setModal(true);
            setLoader(true);
            setTimeout(() => {
                setLoader(false);
            }, 1000);
        }
    };

    const closeModal = (event: React.RefObject<HTMLDialogElement> | null) => {
        event?.current?.close();
        setModal(false);
    };

    return (
        <div className="w-full h-full bg-gradient-to-tl to-slate-600 from-slate-900 flex items-center justify-center">
            <div className="w-100 sm:w-[500px]">
                <h1 className="text-white text-[50px] text-center p-4">
                    Unlimited movies, TV shows and more
                </h1>
                <h5 className="text-white text-xl text-center p-3">
                    Start at 149. Cancel at any time
                </h5>
                <h6 className="text-white text-center p-2">
                    Ready to watch? Enter your email to create or restart your membership.
                </h6>
                <form className="flex p-1 items-center flex-col justify-cente">
                    <div
                        className={`flex items-center justify-center border-2 px-1 bg-white  ${email.error ? "border-red-600 border-2  login-email" : " border-white"
                            }`}
                    >
                        <div className=" rounded-md p-3 bg-white">
                            <input
                                required
                                value={email.email}
                                onChange={updateStateOfEmail}
                                className={` w-[400px] text-lg focus:outline-none rounded-md`}
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <ArrowForwardIcon
                            onClick={handleSubmit}
                            className="text-gray-500 active:scale-75 duration-300 transition-all text-xl rounded-full cursor-pointer border bg-white w-100 h-100"
                            fontSize="large"
                        />
                    </div>
                    <span className="text-white ms-auto p-1 cursor-pointer">
                        {" "}
                        Forget Password
                    </span>
                </form>
            </div>
            {modal && (
                <ModalComponent isOpen={modal} onClose={closeModal}>
                    <div className="flex size-96 bg-white rounded-md items-center justify-center ">
                        {loader ? (
                            <LoaderComponent />
                        ) : (
                            <div className=" p-4 m-auto bg-white align-middle text-center">
                                <img
                                    src={
                                        "https://cdn.dribbble.com/users/3821672/screenshots/7172846/otp.gif"
                                    }
                                    alt="otp"
                                    className="size-full filter"
                                />
                                <h2 className="text-black text-[35px]">
                                    OTP sent to your email.
                                </h2>
                                <h3 className="text-black text-lg">
                                    Please check and Enter OTP
                                </h3>
                            </div>
                        )}
                    </div>
                </ModalComponent>
            )}
        </div>
    );
}

export default LoginComponent;
