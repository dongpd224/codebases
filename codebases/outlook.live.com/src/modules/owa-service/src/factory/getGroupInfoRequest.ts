// This file is auto-generated by the "tsproxygen.exe" tool. Manual modification is not recommended.
import type GetGroupInfoRequest from '../contract/GetGroupInfoRequest';

export default function getGroupInfoRequest(data: GetGroupInfoRequest): GetGroupInfoRequest {
    let result: GetGroupInfoRequest = {
        __type: 'GetGroupInfoRequest:#Exchange',
        ...data,
    };

    return result;
}