import {createStore} from "aio-store/react";

export const appStore = createStore({
    activeList: "",
    sidebar: false,
    overlay: false,
})

export const showSearch = () => {
    appStore.set(ref => {
        ref.overlay = true
    });
}