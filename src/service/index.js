import axios from 'axios';

const { protocol } = window.location;

// در این قسمت دامین میتواند نسبت یه سرور عوض شود
// میتوان یک فایل انوایرمنت به پروژه اضافه کرد و نسبت به سرور دامین تعیین کرد که در اینجا بخاطر فیک ای پی آی نیازی نیست
// import { env } from '/constant';
// const domainUrl = env.REACT_APP_DOMAIN_URL;

const domainUrl = 'jsonplaceholder.typicode.com';

function makeConfig(microAddress) {
	return {
		baseURL: `${protocol}//${domainUrl}${microAddress}`,
		withCredentials: true,
	};
}

function makeInstance(microAddress) {

	const instanceConfig = makeConfig(microAddress);

	const instance = axios.create(instanceConfig);

	instance.interceptors.request.use(
		(config: any) => config,
		(error) => {
			Promise.reject(error);
		},
	);

	instance.interceptors.response.use(
		(response) => response?.data,
		(error: any) => Promise.reject(error?.response),
	);

	return instance;
}

// این قسمت و پوشه بندی سرویس به این دلیل نوشته شده که برای مثال ماکروهای مختلفی را بکند پروژه دارد و به ازای هر ماکرو
// ابتدای هر ای پی آی تفاوت دارد. قسمتهای مشترک هر ماکرو در این قسمت نوشته میشود
const apiGeneralService: any = makeInstance('/');
// const apiSecurityService: any = makeInstance('/security/v1');
// const apiLoanService: any = makeInstance('/loan/v1');
// const apiSportsService: any = makeInstance('/sports/v1');

export { apiGeneralService };
