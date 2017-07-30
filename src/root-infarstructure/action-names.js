import login from 'app-ui/containers/login/action-names';
import profile from 'app-ui/containers/profile/action-names';
import transfer from 'app-ui/containers/transfer/action-names';
import authentication from 'services/sessions/authentication/action-names'
import user from 'services/sessions/user/action-names'

const symbols = [
  ...login,
  ...profile,
  ...transfer,
  ...authentication,
  ...user
].reduce((acc, eventName) => ({
    ...acc,
    [`${eventName}`]: acc[eventName] ? duplicateEventNameError(eventName) : Symbol.for(eventName)
}), {});

function duplicateEventNameError (eventName) {
    throw new Error(`Event ${eventName} already exists`);
}

export default symbols;

