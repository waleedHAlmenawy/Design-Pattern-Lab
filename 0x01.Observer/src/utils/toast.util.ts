import { ToastProps } from "../components/Toast";
import { Observable } from "../observer";

type Events = {
    type: 'ADD_TOAST'
    toast: Pick<ToastProps, 'id' | 'message' | 'variant'>
}

export const observable = new Observable<Events>();

export const unsubscription: (() => void)[] = [];

export function toast(message: string) {
    observable.notify({
        type: 'ADD_TOAST',
        toast: {id: Math.random(), message}
    })
}

toast.success = (message: string) => {
    observable.notify({
        type: 'ADD_TOAST',
        toast: {id: Math.random(), message, variant: 'success'}
    })
}

toast.error = (message: string) => {
    observable.notify({
        type: 'ADD_TOAST',
        toast: {id: Math.random(), message, variant: 'error'}
    })
}

toast.dismessAll = () => {
    observable.unsubscribeAll();
}