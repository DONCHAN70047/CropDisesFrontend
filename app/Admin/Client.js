"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "./AdminDashboard.css";
import DashboardHeaderSidebar from "./DashboardHeaderSidebar";
import { motion } from "framer-motion";
import { clear_refresh_cookie } from "./functions";
import { useUserContext } from "../utils/context/user_context";
import Dashboard from "./components/Dashboard";
import UtilityTransactionsSlidebar from "./components/UtilityTransactionsSlidebar";
import AEPSTransactionsSlidebar from "./components/AEPSTransactionsSlidebar";
import CreditCardTransactionsSlidebar from "./components/CreditCardTransactionsSlidebar";
import EducationalFeesSlidebar from "./components/EducationalFeesSlidebar";
import FlightBookingsSidebar from "./components/FlightBookingsSidebar";
import MoneyTransferTransactionsSlidebar from "./components/MoneyTransferTransactionsSlidebar";
import PPITransferTransactionsSlidebar from "./components/PPITransferTransactionsSlidebar";
import UPITransferTransactionsSlidebar from "./components/UPITransferTransactionsSlidebar";


const AdminDashboard = ({ adminName }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { user, setUser } = useUserContext();

    const [name, setName] = useState(adminName || "");
    const [adminPhoto, setAdminPhoto] = useState("");
    const [walletBalance, setWalletBalance] = useState("0.00");


    const query_page = searchParams.get("panel");


    /**
     * https://localhost:4000/Admin?panel=moneytransfer
     * 
     * query_page = moneytransfer
     * 
     * router - router.push("/Admin?panel=moneytransfer")
     */


    /**
     * 
     * (query_page === "moneytransfer" && <Moneytransfer />)
     * (query_page === "moneytransfer" && <Moneytransfer />)
     * (query_page === "moneytransfer" && <Moneytransfer />)
     * (query_page === "moneytransfer" && <Moneytransfer />)
     * (query_page === "moneytransfer" && <Moneytransfer />)
     * (query_page === "moneytransfer" && <Moneytransfer />)
     * (query_page === "moneytransfer" && <Moneytransfer />)
     * (query_page === "moneytransfer" && <Moneytransfer />)
     */

    // useEffect(() => {
    //     const name = localStorage.getItem("adminName");   // use context api
    //     const photo = localStorage.getItem("adminPhoto");

    //     if (!name) {
    //         //   navigate("/Login");
    //         router.push('/login')
    //     } else {
    //         setAdminName(name);
    //         setAdminPhoto(photo);
    //     }
    // }, [router]);

    // Fetch user balance
    /*const fetchBalance = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/api/check-balance/`
            );
            const data = await response.json();

            if (data.status === "success" && data.balance?.normal_balance) {
                setWalletBalance(data.balance.normal_balance);
            }
        } catch (error) {
            console.error("Balance error:", error);
        }
    };

    useEffect(() => {
        fetchBalance();
        const interval = setInterval(fetchBalance, 30000);
        return () => clearInterval(interval);
    }, []); */

    const handleLogout = async () => {
        await clear_refresh_cookie();
        setUser({
            firstName: null,
            lastName: null,
            email: null,
            phone: null,
            userId: null,
            access: null,
        });
        router.push("/");
    };



    return (
        <div className="dashboard-container">
            <DashboardHeaderSidebar
                adminName={name}
                adminPhoto={adminPhoto}
                handleLogout={handleLogout}
            />


            {query_page === null && <Dashboard />}
            {query_page === "AEPSTransactionsSlidebar" && <AEPSTransactionsSlidebar />}
            {query_page === "CreditCardTransactionsSlidebar" && <CreditCardTransactionsSlidebar />}
            {query_page === "EducationalFeesSlidebar" && <EducationalFeesSlidebar />}
            {query_page === "FlightBookingsSidebar" && <FlightBookingsSidebar />}
            {query_page === "MoneyTransferTransactionsSlidebar" && <MoneyTransferTransactionsSlidebar />}
            {query_page === "PPITransferTransactionsSlidebar" && <PPITransferTransactionsSlidebar />}
            {query_page === "UPITransferTransactionsSlidebar" && <UPITransferTransactionsSlidebar />}
            {query_page === "UtilityTransactionsSlidebar" && <UtilityTransactionsSlidebar />}


        </div>
    );
};

export default AdminDashboard;
