import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../services";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const useResetPassword = () => {
    const navigate = useNavigate();
    const resetPasswordMR = useMutation({
		mutationKey: ["reset-password"],
		mutationFn: resetPassword,
		onSuccess({data}) {
			toast.success(data?.message);
            navigate('/login')
		},
		onError: (error: AxiosError<any>) => {
			toast.error(
				error.response?.data.message || error.message || "Something went wrong"
			);
		},
	});
	return { resetPasswordMR };
}

export  {useResetPassword}