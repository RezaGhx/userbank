import { apiGeneralService } from 'service';
import type { $AxiosXHR } from 'axios';
// import type { responseModel } from '@shared/model/service/responseModel';
// import type { createUserTypeCommand } from '@admin/model/service/General/post/createUserTypeCommand';

function createUser(command): Promise<$AxiosXHR<responseModel<null>>> {
	return apiGeneralService.post(`posts`, command);
}

const postGeneral = {
	createUser,
};

export default postGeneral;
