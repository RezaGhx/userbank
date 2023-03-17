import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const createUserSchema = yup.object().shape({
	firstName: yup.string().required(),
	lastName: yup.string().required(),
});
const createUserResolver = yupResolver(createUserSchema);
export { createUserSchema, createUserResolver };
