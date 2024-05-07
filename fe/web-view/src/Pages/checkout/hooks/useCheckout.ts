/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { API } from "../../../libs/axios"
import useSnap from "./useSnap";
import { useNavigate } from "react-router-dom";
// import { IPay } from "../../../types/IPay";

export function useCheckout() {
    const navigate = useNavigate();
    const {snapEmbed} = useSnap();
    const [show, setSnapShow] = React.useState(false);
    // const [data, setData] = React.useState<IPay>({
    //     user_email: "",
    //     customer_name: "",
    // });

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setData({
    //         ...data,
    //         [event.target.name]: event.target.value
    //     })
    // }

    const pay = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            // const formData = new FormData();
            // formData.append("user_email", data.user_email);
            // formData.append("customer_name", data.customer_name);

            // setData({
            //     user_email: "",
            //     customer_name: "",
            // })
            const response = await API.post("/transactions");
            console.log(response)
            if(response && response.status === 201) {
                snapEmbed(response.data.snap_token, 'snap-container', {
                    onSuccess: function (result: any) {
                        console.log("success", result);
                        navigate(`/order-status?transaction_id=${response.data.id}`);
                    },
                    onPending: function(result : any){
                        console.log('pending', result);
                        navigate(`/order-status?transaction_id=${response.data.id}`)
                        setSnapShow(false)
                    },
                    onClose: function () {
                        navigate(`/order-status?transaction_id=${response.data.id}`)
                        setSnapShow(false)
                    }
                })
            } else if (response && response.status === 400) {
                alert(response.data.message)
            }
        } catch (error) {
            console.log("")
        }
    }

    return {
        // data,
        // handleChange
        pay,
        show
    }
}