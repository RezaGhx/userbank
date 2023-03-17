import { apiGeneralService } from 'service';
import type { $AxiosXHR } from 'axios';
// import type { responseModel } from '@shared/model/service/responseModel';
// import type { fundUserType } from '@shared/model/service/General/get/fundUserType';
// import type { groupType } from '@admin/model/service/General/get/groupType';

function users(): Promise<$AxiosXHR<responseModel<any>>> {
	return apiGeneralService.get('posts');
}

function userDetails(id: string): Promise<$AxiosXHR<responseModel<any>>> {
	return apiGeneralService.get(`posts/${id}`);
}

const getGeneral = { users, userDetails };

export default getGeneral;
