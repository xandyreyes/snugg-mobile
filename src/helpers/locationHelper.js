import { check, request } from 'react-native-permissions'

export const CheckPermission = async ({ permission }) => {
    const result = await check(permission)
    return result
}

export const RequestPermission = async ({ permission }) => {
    const result = await check(permission)
    return result
}

export const CheckAndRequestPermission = async ({ permission }) => {
    const result = await CheckPermission(permission)
    if (result === "denied" || result === "unavailable") {
        const requestRes = await RequestPermission(permission)
        return requestRes
    }
    return result
}