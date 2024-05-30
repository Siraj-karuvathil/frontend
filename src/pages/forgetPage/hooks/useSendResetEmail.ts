import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { sendResetEmail } from "../services";
import { AxiosError } from "axios";
const useSendResetEmail = () => {
	const sendResetMR = useMutation({
		mutationKey: ["send-reset-email"],
		mutationFn: sendResetEmail,
		onSuccess({data}) {
			toast.success(data?.message ?? "Sent email successfully");
		},
		onError: (error: AxiosError<any>) => {
			toast.error(
				error.response?.data.message || error.message || "Something went wrong"
			);
		},
	});
	return { sendResetMR };
};

export { useSendResetEmail };
