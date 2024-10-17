import { lazy, Suspense, useState } from "react";
import TabButton from "../../UtillsComponet/TabButton/TabButton";
import ModalComponent from "../../UtillsComponet/ModalComponent/ModalComponent";
import AboutComponent from "../AboutComponent/AboutComponent";
import { TabButtons } from "../../constants/TabsConstants";
import LoaderComponent from "../../UtillsComponet/LoaderComponent/LoaderComponent";

const UserLoginComponent = lazy(() => import("../UserLogin/UserLogin"));
const UserRegistration = lazy(() => import("../UserRegistrationForm/UserRegistration"));

export default function HomeComponent() {

  const tabs = TabButtons;
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickTab = (event: number) => {
    setActiveTab(event);
  };

  const openAboutModal = () => {
    setIsOpen(true);
  };

  const closeModal = (dialog: React.RefObject<HTMLDialogElement> | null) => {
    dialog?.current?.close();
    setIsOpen(false);
  };

  return (
    <>
      <div className="h-40 w-[100%] animate-pulse gap-5 p-11 bg-gradient-to-l from-sky-400 via-rose-400 to-lime-400">
        <h1 className="text-4xl font-extrabold text-center ">
          Welcome to Movie Masala
        </h1>
        <p className="text-lg text-center">
          The best place to find your favorite movies
        </p>
      </div>
      <div className="grid grid-cols-2 mt-6">
        <div className=" grid grid-flow-row h-fit">
          <div className="gap-4 flex">
            {tabs.map((tab, index) => (
              <TabButton
                key={index}
                label={tab.label}
                active={activeTab === index ? true : false}
                onClick={() => onClickTab(index)}
              >
                {tab.label}
              </TabButton>
            ))}
            <TabButton
              label="About"
              active={false}
              onClick={() => openAboutModal()}
            >
              About
            </TabButton>
          </div>
          <div className="w-[100%] h-full">
            <Suspense fallback={<LoaderComponent />}>
              {activeTab === 0 &&  <UserLoginComponent />}
              {activeTab === 1 && <UserRegistration />}
            </Suspense>
          </div>

        </div>
        <div className="w-[100%]  overflow-hidden bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400">
          <img
            className="object-contain w-full h-96 "
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/61da8438155793.57575971afe13.jpg"
            alt="movie"
          />
        </div>
      </div>
      {isOpen && (
        <ModalComponent
          children={<AboutComponent />}
          isOpen={isOpen}
          onClose={closeModal}
        />
      )}
    </>
  );
}
