import { toast } from "react-toastify";

const toastConfig = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
};

export function toastInfo(message) {
    toast.info(message, toastConfig);
}

export function toastSuccess(message) {
    toast.success(message, toastConfig);
}

export function toastWarning(message) {
    toast.warning(message, toastConfig);
}

export function toastError(message) {
    toast.error(message, toastConfig);
}