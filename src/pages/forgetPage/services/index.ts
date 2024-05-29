import instance from "../../../API/api_instance";

interface SendResetData {
	email: string;
}

interface ResetData extends SendResetData {
	password: string;
	confirmPassword: string;
	token: string;
}

export const sendResetEmail = (data: SendResetData) => {
	const url = "/auth/forgot-password";
	const res = instance.post(url, data);
	return res;
};

export const resetPassword = (data: ResetData) => {
	const url = "/auth/reset-password";
	const res = instance.post(
		url,
		{
			newPassword: data.password,
			email: data.email,
			confirmPassword: data.confirmPassword,
		},
		{
			headers: {
				Authorization: `Bearer ${data.token}`,
			},
		}
	);
	return res;
};
