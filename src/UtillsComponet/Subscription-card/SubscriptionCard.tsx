function SubscriptionCard() {
    return (
        <>
            <div className=" max-w-full group cursor-pointer m-4 grid-flow-col grid-cols-1 overflow-hidden grid sm:grid-flow-row sm:hover:grid-cols-2  hover:w-[60%] rounded-md shadow-2xl hover:scale-125 transition-all hover:divide-transparent  duration-500 w-96 h-96 p-6 border bg-gradient-to-tl to-red-600 from-violet-900 ">
                <div className="flex flex-col">
                    <div className="text-white text-[40px] font-extrabold text-center">
                        Silver
                    </div>
                    <p className="text-wrap text-white text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                        consectetur, deleniti recusandae dicta reprehenderit cumque eos
                        atque, est, quaerat magnam nihil id? Voluptatibus voluptatum
                        consequuntur obcaecati vel voluptas fugit ducimus.
                    </p>
                    <ul className="text-white mt-4 ps-3">
                        <li className="list-item font-extrabold list-decimal">
                            {" "}
                            Upto 20GB Data storage Database
                        </li>
                        <li className="list-item font-extrabold list-decimal">
                            {" "}
                            Upto 20GB Data storage Database
                        </li>
                        <li className="list-item font-extrabold list-decimal">
                            {" "}
                            Upto 20GB Data storage Database
                        </li>
                        <li className="list-item font-extrabold list-decimal">
                            {" "}
                            Upto 20GB Data storage Database
                        </li>
                    </ul>
                </div>
                <div className=" hidden group-hover:block  sm:group-hover:grid-cols-6  p-2">


                    <p className="text-white text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium, repellendus alias ad temporibus officia cupiditate
                        incidunt dolores eaque non sequi ea, distinctio eum aspernatur!
                        Consectetur nulla autem saepe ratione eum. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Maxime error laboriosam minus
                        numquam, deleniti commodi sit quisquam quidem? Repudiandae eos
                        officia commodi asperiores vel facilis laboriosam ullam aperiam nam
                        fuga.
                    </p>
                    <div className="flex gap-4 bottom-3 right-3 absolute">
                        <button className="rounded-md  p-2 px-4 text-sm font-normal text-white bg-blue-600 hover:bg-blue-800 hover:text-white hover:shadow-2xl active:scale-95 transition-all duration-300 ">
                            {" "}
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SubscriptionCard;
