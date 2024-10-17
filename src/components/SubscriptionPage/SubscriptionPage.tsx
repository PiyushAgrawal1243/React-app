import SubscriptionCard from "../../UtillsComponet/Subscription-card/SubscriptionCard";

function SubscriptionPage(){


    return(
        <>
            <div className="bg-gradient-to-tr align-middle overflow-auto from-violet-500 via-red-500 to-violet-900  w-[100%] h-[100%]" >
                <div className="flex items-center flex-col p-2 pt-40 justify-evenly sm:p-40 sm:flex-col  xl:flex-row">
                <SubscriptionCard />
                <SubscriptionCard />
                <SubscriptionCard />
                </div>
            </div>
        
        </>
    )
}

export default SubscriptionPage;