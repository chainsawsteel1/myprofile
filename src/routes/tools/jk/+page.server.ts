import { APP_NAME, PUSH_KEY, SECRET, CLUSTAR } from '$env/static/private';

const key: string = PUSH_KEY;
const cluster: string = CLUSTAR;
const appId: string = APP_NAME;
const secret: string = SECRET;

import Pusher from "pusher";

const pusher = new Pusher({
    appId,
    key,
    secret,
    cluster,
    useTLS: true,
});
