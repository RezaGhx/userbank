import { apiGeneralService } from 'service';
import type { $AxiosXHR } from 'axios';
// import type { responseModel } from '@shared/model/service/responseModel';
// import type {changePasswordCommandType} from "@customer/model/service/General/changePasswordCommandType";

function editUser(id: string, command): Promise<$AxiosXHR<responseModel<null>>> {
	return apiGeneralService.put(`posts/${id}`, command);
}

const putGeneral = {
	editUser,
};

export default putGeneral;
