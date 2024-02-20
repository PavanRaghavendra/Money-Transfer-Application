import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer()
{
    return <>
    <div className="bg-second text-babypink">
        <div className="flex flex-col gap-3">
        <p className="font-semibold">Pai Paymnets</p>
        <p>Payments with its product suite. It gives you access to all payment modes including credit card, debit card, netbanking, UPI and popular wallets including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp</p>
        <p>supercharges your business banking experience, bringing effectiveness, efficiency, and excellence to all financial processes.Businesses can get access to fully-functional current accounts, supercharge their payouts and automate payroll compliance.</p>
        <p>Manage your marketplace, automate bank transfers, collect recurring payments, share invoices with customers and avail working capital loans - all from a single platform</p>
        </div>
        <div className="grid sm:grid-cols-2">
            <p className="font-semibold">Contact us</p>
            <br></br>
            <p>Email: Paipayments@gmail.com</p>
            <br></br>
            <p>Ph-no: 7093466892</p>
            <br></br>
        </div>
    </div>
    </>
}